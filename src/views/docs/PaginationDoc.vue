<template>
  <DocPage
    eyebrow="Navigation"
    title="Pagination"
    description="Navigation entre pages avec raccourcis précédent/suivant et ellipses."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <BasePagination v-model="page" :total="12" />
        <p class="hint">Page courante : {{ page }} / 12</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Peu de pages</h2>
      <p>En dessous de 8 pages, toutes sont affichées sans ellipse.</p>
      <DemoBlock :code="shortCode" stack>
        <BasePagination v-model="shortPage" :total="5" />
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Numéro sur fond transparent.</td></tr>
            <tr><td><code>selected</code></td><td>Page courante : fond <code>--color-muted</code>, <code>aria-current="page"</code>.</td></tr>
            <tr><td><code>hover</code></td><td>Fond <code>--color-muted</code> sur le numéro survolé.</td></tr>
            <tr><td><code>disabled</code></td><td>« Précédent » sur la première page, « Suivant » sur la dernière : boutons désactivés, pas masqués - la position reste lisible.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Les numéros sont tronqués par des points de suspension quand <code>total</code> est grand :
        première page, dernière page et voisines de la page courante restent toujours accessibles.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Repère</strong> - le conteneur est un <code>&lt;nav&gt;</code> avec <code>aria-label</code> : les lecteurs d'écran l'annoncent comme une navigation.</li>
        <li><strong>Page courante</strong> - <code>aria-current="page"</code> sur le numéro actif : l'état n'est pas porté que par la couleur.</li>
        <li><strong>Clavier</strong> - chaque numéro est un <code>&lt;button&gt;</code> : <code>Tab</code> puis <code>Entrée</code>. Les boutons désactivés sont sortis du parcours.</li>
        <li><strong>Flèches</strong> - les chevrons sont décoratifs (<code>aria-hidden</code>) ; leurs boutons portent un <code>aria-label</code> (« Page précédente »).</li>
        <li><strong>Changement de page</strong> - après navigation, remonter le focus en haut de la liste : l'utilisateur clavier ne doit pas repartir du pied de page.</li>
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
import { BasePagination } from '@tommaniglier/design-system-lib/vue';

const page = ref(5);
const shortPage = ref(2);

const code = `<BasePagination v-model="page" :total="12" />`;
const shortCode = `<BasePagination v-model="page" :total="5" />`;

const rows: PropRow[] = [
  { name: 'modelValue', type: 'number', default: '1', description: 'Page courante (v-model).' },
  { name: 'total', type: 'number', default: '-', description: 'Nombre total de pages.' },
];
</script>

<style scoped lang="scss">
.hint {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}
</style>
