<template>
  <DocPage
    eyebrow="Navigation"
    title="Menu"
    description="Menu déroulant contextuel : actions, séparateurs et actions destructrices."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <BaseMenu :entries="entries" @select="selected = $event">
          <template #trigger>
            <BaseButton variant="outline">Actions</BaseButton>
          </template>
        </BaseMenu>
        <p class="hint">Action : {{ selected || '-' }}</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Avec icônes</h2>
      <p>Chaque entrée accepte une prop <code>icon</code> pour renforcer la lisibilité.</p>
      <DemoBlock :code="iconCode" stack>
        <BaseMenu :entries="iconEntries" @select="selected = $event">
          <template #trigger>
            <BaseButton variant="outline">Options du fichier</BaseButton>
          </template>
        </BaseMenu>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>closed</code></td><td>Seul le déclencheur est rendu ; <code>aria-expanded="false"</code>.</td></tr>
            <tr><td><code>open</code></td><td>Panneau flottant, bordure + <code>--shadow-md</code> ; <code>aria-expanded="true"</code>.</td></tr>
            <tr><td><code>hover</code> (item)</td><td>Fond <code>--color-muted</code>.</td></tr>
            <tr><td><code>danger</code> (item)</td><td>Texte rouge : réservé aux actions destructrices, en fin de menu.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Le menu se ferme au clic extérieur, sur <code>Échap</code>, et après la sélection d'un item.
        Les entrées <code>separator</code> regroupent visuellement sans porter d'action.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Rôles</strong> - panneau en <code>role="menu"</code>, items en <code>role="menuitem"</code>, séparateurs en <code>role="separator"</code>.</li>
        <li><strong>Clavier</strong> - <code>Tab</code> jusqu'au déclencheur, <code>Entrée</code> pour ouvrir, <code>Échap</code> pour fermer. La navigation aux flèches dans le panneau n'est pas implémentée : les items s'atteignent au <code>Tab</code>. À signaler comme manque si le besoin est fort.</li>
        <li><strong>Déclencheur</strong> - porte <code>aria-expanded</code> reflétant l'ouverture. Un déclencheur <code>icon-only</code> doit avoir un <code>aria-label</code>.</li>
        <li><strong>Focus</strong> - après fermeture, rendre le focus au déclencheur.</li>
        <li><strong>Libellés</strong> - verbes d'action (« Renommer », « Supprimer »), jamais des noms seuls.</li>
        <li><strong>Icônes</strong> - décoratives : le libellé porte le sens.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Props</h2>
      <PropsTable :rows="rows" />
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import PropsTable from '../../components/docs/PropsTable.vue';
import type { PropRow } from '../../components/docs/types';
import { BaseMenu, BaseButton } from '@tom/design-system/vue';
import type { MenuEntry } from '@tom/design-system/vue';

const selected = ref('');

const entries: MenuEntry[] = [
  { label: 'Dupliquer', value: 'duplicate' },
  { label: 'Renommer', value: 'rename' },
  { separator: true },
  { label: 'Supprimer', value: 'delete', danger: true },
];

const iconEntries: MenuEntry[] = [
  { label: 'Télécharger', value: 'download', icon: 'download' },
  { label: 'Partager', value: 'share', icon: 'share' },
  { label: 'Imprimer', value: 'print', icon: 'print' },
  { separator: true },
  { label: 'Supprimer', value: 'delete', icon: 'trash', danger: true },
];

const iconCode = `const entries: MenuEntry[] = [
  { label: 'Télécharger', value: 'download', icon: 'download' },
  { label: 'Partager', value: 'share', icon: 'share' },
  { separator: true },
  { label: 'Supprimer', value: 'delete', icon: 'trash', danger: true },
];`;

const code = `<BaseMenu :entries="entries" @select="onSelect">
  <template #trigger>
    <BaseButton variant="outline">Actions</BaseButton>
  </template>
</BaseMenu>

const entries: MenuEntry[] = [
  { label: 'Dupliquer', value: 'duplicate' },
  { label: 'Renommer', value: 'rename' },
  { separator: true },
  { label: 'Supprimer', value: 'delete', danger: true },
];`;

const rows: PropRow[] = [
  { name: 'entries', type: 'MenuEntry[]', default: '-', description: 'Entrées { label, value?, icon?, danger?, separator? }.' },
  { name: '#trigger', type: 'slot', default: '-', description: 'Élément déclencheur du menu.' },
  { name: '@select', type: 'event', default: '-', description: 'Émis avec la value (ou le label) de l’entrée cliquée.' },
];
</script>

<style scoped lang="scss">
.hint {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}
</style>
