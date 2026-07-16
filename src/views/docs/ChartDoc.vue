<template>
  <DocPage
    eyebrow="Données"
    title="Chart"
    description="Graphiques SVG légers aux couleurs de la marque : barres ou courbe."
    status="beta"
  >
    <section class="doc-section">
      <h2>Barres</h2>
      <DemoBlock :code="barCode" stack>
        <BaseChart type="bar" :data="[42, 68, 55, 81, 74, 96]" :labels="['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin']" />
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Courbe</h2>
      <DemoBlock :code="lineCode" stack>
        <BaseChart type="line" :data="[12, 28, 22, 45, 38, 62, 58]" :labels="['L', 'M', 'M', 'J', 'V', 'S', 'D']" />
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Barres ou ligne en <code>--color-brand-primary</code>.</td></tr>
            <tr><td><code>hover</code> (barre)</td><td>Passage en <code>--color-brand-secondary</code>.</td></tr>
            <tr><td><code>empty</code></td><td><code>data</code> vide ne rend aucune série : afficher un <router-link class="doc-link" to="/patterns/empty-states">état vide</router-link> à la place du graphique.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Deux types : <code>bar</code> pour comparer des catégories, <code>line</code> pour une évolution dans le temps. <code>data</code> et <code>labels</code> doivent avoir la même longueur.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Rôle</strong> - le SVG porte <code>role="img"</code> et un <code>ariaLabel</code> : le graphique est annoncé comme une image nommée.</li>
        <li><strong>ariaLabel obligatoire</strong> - il décrit ce que montre le graphique (« Adoption par semaine »), pas sa forme. Sans lui, le graphique est muet.</li>
        <li><strong>Alternative textuelle</strong> - pour des données importantes, fournir aussi un <router-link class="doc-link" to="/docs/table">Table</router-link> équivalent : un lecteur d'écran ne lit pas des barres.</li>
        <li><strong>Couleur</strong> - une seule série : pas de codage par couleur à distinguer. Pour plusieurs séries, prévoir un autre marqueur que la teinte.</li>
        <li><strong>Échelle</strong> - l'axe commence à zéro : ne pas tronquer, cela déforme la lecture.</li>
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
import { BaseChart } from '@tommaniglier/design-system-lib/vue';

const barCode = `<BaseChart
  type="bar"
  :data="[42, 68, 55, 81, 74, 96]"
  :labels="['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin']"
/>`;

const lineCode = `<BaseChart
  type="line"
  :data="[12, 28, 22, 45, 38, 62, 58]"
  :labels="['L', 'M', 'M', 'J', 'V', 'S', 'D']"
/>`;

const rows: PropRow[] = [
  { name: 'type', type: "'bar' | 'line'", default: "'bar'", description: 'Type de graphique.' },
  { name: 'data', type: 'number[]', default: '-', description: 'Valeurs à représenter.' },
  { name: 'labels', type: 'string[]', default: '-', description: 'Étiquettes sous le graphique.' },
  { name: 'height', type: 'number', default: '180', description: 'Hauteur de la zone de tracé.' },
];
</script>
