<template>
  <DocPage
    eyebrow="Données"
    title="Table"
    description="Tableau de données avec en-têtes, lignes survolables et légende optionnelle."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <BaseTable :columns="columns" :rows="rows" caption="Dernières factures émises." />
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>En-têtes sur fond <code>--color-muted</code>, lignes séparées par <code>--color-border</code>.</td></tr>
            <tr><td><code>hover</code> (ligne)</td><td>Fond <code>--color-muted</code> : aide au suivi horizontal.</td></tr>
            <tr><td><code>empty</code></td><td><code>rows</code> vide rend un tableau sans lignes : afficher un <router-link class="doc-link" to="/patterns/empty-states">état vide</router-link> à la place, en gardant les en-têtes visibles.</td></tr>
            <tr><td><code>loading</code></td><td>Non fourni : composer avec <router-link class="doc-link" to="/docs/skeleton">Skeleton</router-link> sur quelques lignes.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Le tri, la sélection et les actions par ligne ne sont pas intégrés : voir le pattern
        <router-link class="doc-link" to="/patterns/table">Tableau riche</router-link> pour les
        composer.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Structure</strong> - vrai <code>&lt;table&gt;</code> avec <code>&lt;thead&gt;</code> et <code>&lt;th&gt;</code> : la navigation par cellule des lecteurs d'écran fonctionne, chaque cellule est annoncée avec sa colonne.</li>
        <li><strong>Caption</strong> - la prop <code>caption</code> nomme le tableau. La renseigner dès qu'il y a plusieurs tableaux sur une page.</li>
        <li><strong>Clavier</strong> - un tableau de données n'est pas focusable en soi ; seuls ses éléments interactifs le sont. S'il défile horizontalement, le conteneur doit rester atteignable au clavier.</li>
        <li><strong>Colonnes</strong> - les libellés d'en-tête sont explicites : ils sont relus à chaque cellule.</li>
        <li><strong>Pas de mise en page</strong> - jamais de <code>&lt;table&gt;</code> pour disposer des éléments : utiliser la <router-link class="doc-link" to="/docs/grid">grille</router-link>.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Props</h2>
      <PropsTable :rows="propRows" />
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import PropsTable from '../../components/docs/PropsTable.vue';
import type { PropRow } from '../../components/docs/types';
import { BaseTable } from '@tommaniglier/design-system-lib/vue';
import type { TableColumn } from '@tommaniglier/design-system-lib/vue';

const columns: TableColumn[] = [
  { key: 'ref', label: 'Facture' },
  { key: 'client', label: 'Client' },
  { key: 'montant', label: 'Montant' },
  { key: 'statut', label: 'Statut' },
];

const rows = [
  { ref: 'INV-001', client: 'Acme Corp', montant: '1 250 €', statut: 'Payée' },
  { ref: 'INV-002', client: 'Globex', montant: '860 €', statut: 'Payée' },
  { ref: 'INV-003', client: 'Initech', montant: '2 400 €', statut: 'En attente' },
  { ref: 'INV-004', client: 'Umbrella', montant: '540 €', statut: 'Payée' },
];

const code = `<BaseTable :columns="columns" :rows="rows" caption="Dernières factures émises." />

const columns: TableColumn[] = [
  { key: 'ref', label: 'Facture' },
  { key: 'client', label: 'Client' },
];
const rows = [
  { ref: 'INV-001', client: 'Acme Corp' },
];`;

const propRows: PropRow[] = [
  { name: 'columns', type: 'TableColumn[]', default: '-', description: 'Colonnes { key, label }.' },
  { name: 'rows', type: 'Record<string, string | number>[]', default: '-', description: 'Lignes indexées par la key des colonnes.' },
  { name: 'caption', type: 'string', default: '-', description: 'Légende affichée sous le tableau.' },
];
</script>
