<template>
  <DocPage
    eyebrow="Navigation"
    title="Breadcrumb"
    description="Fil d'Ariane indiquant la position de la page courante dans la hiérarchie du site."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code">
        <BaseBreadcrumb :items="items" />
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Maillons cliquables en <code>--color-muted-foreground</code>.</td></tr>
            <tr><td><code>hover</code></td><td>Maillon en <code>--color-foreground</code>.</td></tr>
            <tr><td><code>current</code></td><td>Dernier maillon : jamais un lien, <code>aria-current="page"</code>.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Un item devient un lien s'il porte <code>href</code> (ou <code>to</code>) <strong>et</strong>
        qu'il n'est pas le dernier. Le dernier item reste toujours du texte : on ne navigue pas
        vers la page où l'on est.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Repère</strong> - <code>&lt;nav aria-label&gt;</code> : annoncé comme une navigation distincte.</li>
        <li><strong>Page courante</strong> - <code>aria-current="page"</code> sur le dernier maillon.</li>
        <li><strong>Séparateurs</strong> - décoratifs (<code>aria-hidden</code>) : ils ne sont pas lus entre chaque maillon.</li>
        <li><strong>Clavier</strong> - liens natifs : <code>Tab</code> et <code>Entrée</code>.</li>
        <li><strong>Libellés</strong> - le nom réel de chaque niveau, pas « Retour » ni « Niveau 2 ».</li>
        <li><strong>Quand</strong> - dès trois niveaux de hiérarchie ; inutile sur une arborescence plate.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Props</h2>
      <PropsTable :rows="rows" />
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import PropsTable from '../../components/docs/PropsTable.vue';
import type { PropRow } from '../../components/docs/types';
import { BaseBreadcrumb } from '@tommaniglier/design-system-lib/vue';
import type { BreadcrumbItem } from '@tommaniglier/design-system-lib/vue';

const items: BreadcrumbItem[] = [
  { label: 'Accueil', to: '/' },
  { label: 'Docs', to: '/docs' },
  { label: 'Breadcrumb' },
];
const code = `<BaseBreadcrumb :items="[
  { label: 'Accueil', to: '/' },
  { label: 'Docs', to: '/docs' },
  { label: 'Breadcrumb' },
]" />`;

const rows: PropRow[] = [
  {
    name: 'items',
    type: 'BreadcrumbItem[]',
    default: '-',
    description: 'Éléments { label, to? }. Le dernier est la page courante.',
  },
];
</script>
