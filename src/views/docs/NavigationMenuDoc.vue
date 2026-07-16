<template>
  <DocPage
    eyebrow="Navigation"
    title="Navigation Menu"
    description="Barre de navigation avec panneaux déroulants pour organiser des liens riches."
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <BaseNavigationMenu :items="items" @select="selected = $event" />
        <p class="hint">Sélection : {{ selected || '-' }}</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Entrées de premier niveau, chevron sur celles qui ont des liens.</td></tr>
            <tr><td><code>open</code></td><td>Panneau de liens déroulé ; <code>aria-expanded="true"</code>.</td></tr>
            <tr><td><code>hover</code></td><td>Fond <code>--color-muted</code> sur l'entrée survolée.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Un seul panneau ouvert à la fois ; il se ferme au clic extérieur et sur <code>Échap</code>. Une entrée sans <code>links</code> est un lien simple, sans panneau.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Repère</strong> - <code>&lt;nav aria-label&gt;</code> : annoncé comme navigation.</li>
        <li><strong>État</strong> - <code>aria-expanded</code> sur les déclencheurs de panneau.</li>
        <li><strong>Clavier</strong> - <code>Tab</code> et <code>Entrée</code> ouvrent, <code>Échap</code> ferme. La navigation complète aux flèches n'est pas implémentée.</li>
        <li><strong>Chevrons</strong> - décoratifs (<code>aria-hidden</code>).</li>
        <li><strong>Survol seul</strong> - l'ouverture ne dépend pas du survol : accessible au clavier et au tactile.</li>
        <li><strong>Profondeur</strong> - deux niveaux maximum.</li>
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
import { BaseNavigationMenu } from '@tommaniglier/design-system-lib/vue';
import type { NavigationMenuItem } from '@tommaniglier/design-system-lib/vue';

const selected = ref('');

const items: NavigationMenuItem[] = [
  {
    label: 'Produits',
    links: [
      { label: 'Tableau de bord', description: 'Vue d’ensemble de votre activité.' },
      { label: 'Automatisations', description: 'Workflows déclenchés sans effort.' },
      { label: 'Intégrations', description: 'Connectez vos outils préférés.' },
    ],
  },
  {
    label: 'Ressources',
    links: [
      { label: 'Documentation', description: 'Guides et tutoriels pas à pas.' },
      { label: 'Support', description: 'Contacter l’équipe technique.' },
    ],
  },
  { label: 'À propos' },
];

const code = `<BaseNavigationMenu :items="items" @select="onSelect" />

const items: NavigationMenuItem[] = [
  {
    label: 'Produits',
    links: [
      { label: 'Tableau de bord', description: 'Vue d’ensemble de votre activité.' },
      { label: 'Automatisations', description: 'Workflows déclenchés sans effort.' },
    ],
  },
  { label: 'À propos' },
];`;

const rows: PropRow[] = [
  { name: 'items', type: 'NavigationMenuItem[]', default: '-', description: 'Entrées { label, links? } ; les liens ont label et description.' },
  { name: '@select', type: 'event', default: '-', description: 'Émis avec le label du lien ou de l’entrée cliquée.' },
];
</script>

<style scoped lang="scss">
.hint {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}
</style>
