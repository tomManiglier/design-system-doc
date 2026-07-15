<template>
  <DocPage
    eyebrow="Navigation"
    title="Tabs"
    description="Bascule entre plusieurs vues d'un même contexte via des onglets."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <BaseTabs v-model="active" :tabs="tabs" />
        <div class="panel">
          <p v-if="active === 'apercu'">Vue d'ensemble du projet et de ses indicateurs clés.</p>
          <p v-else-if="active === 'activite'">Historique des dernières contributions.</p>
          <p v-else>Réglages et préférences de l'espace.</p>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Libellé en <code>--color-muted-foreground</code>.</td></tr>
            <tr><td><code>selected</code></td><td>Onglet actif : fond <code>--color-surface</code>, texte <code>--color-foreground</code>, <code>aria-selected="true"</code>.</td></tr>
            <tr><td><code>hover</code></td><td>Texte qui passe en <code>--color-foreground</code>.</td></tr>
            <tr><td><code>focus</code></td><td>Anneau <code>--color-ring</code> sur l'onglet focalisé.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Un onglet est toujours sélectionné : <code>modelValue</code> ne doit jamais être vide.
        Le composant rend la liste d'onglets, pas leur contenu : afficher le panneau associé
        vous-même en fonction de <code>modelValue</code>.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Rôles</strong> - la liste porte <code>role="tablist"</code>, chaque onglet <code>role="tab"</code> avec <code>aria-selected</code>.</li>
        <li><strong>Clavier</strong> - les onglets sont des <code>&lt;button&gt;</code> : <code>Tab</code> les atteint, <code>Entrée</code> / <code>Espace</code> les active. La navigation aux flèches entre onglets n'est pas implémentée - à signaler comme manque si le besoin est fort.</li>
        <li><strong>Panneau associé</strong> - le conteneur de contenu doit porter <code>role="tabpanel"</code> et être lié à son onglet (<code>aria-controls</code> / <code>aria-labelledby</code>).</li>
        <li><strong>Libellés</strong> - courts, sur un seul mot si possible ; ce sont des noms de vues, pas des actions.</li>
        <li><strong>Nombre</strong> - au-delà de 5 ou 6 onglets, revoir la structure : une sidebar convient mieux.</li>
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
import { BaseTabs } from '@tom/design-system/vue';
import type { TabItem } from '@tom/design-system/vue';

const active = ref('apercu');
const tabs: TabItem[] = [
  { label: 'Aperçu', value: 'apercu' },
  { label: 'Activité', value: 'activite' },
  { label: 'Réglages', value: 'reglages' },
];
const code = `<BaseTabs v-model="active" :tabs="tabs" />`;

const rows: PropRow[] = [
  { name: 'modelValue', type: 'string', default: '-', description: "Valeur de l'onglet actif (v-model)." },
  { name: 'tabs', type: 'TabItem[]', default: '-', description: 'Liste des onglets { label, value }.' },
];
</script>

<style scoped lang="scss">
.panel {
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--color-muted-foreground);

  p {
    margin: 0;
  }
}
</style>
