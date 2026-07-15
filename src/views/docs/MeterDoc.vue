<template>
  <DocPage
    eyebrow="Données"
    title="Meter"
    description="Mesure statique d'une valeur dans une plage connue : quota, capacité, stock."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <div class="meter-w"><BaseMeter label="Stockage utilisé" :value="64" /></div>
        <div class="meter-w"><BaseMeter label="Quota API" :value="380" :max="500" :format="(v) => `${v} / 500 appels`" /></div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Jauge remplie proportionnellement entre <code>min</code> et <code>max</code>.</td></tr>
            <tr><td><code>empty</code></td><td><code>value</code> à <code>min</code> : piste vide, jauge toujours visible.</td></tr>
            <tr><td><code>full</code></td><td><code>value</code> à <code>max</code> : piste pleine.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Meter mesure une <strong>quantité dans un intervalle connu</strong> (espace disque, quota). Pour l'avancement d'une tâche, utiliser <router-link class="doc-link" to="/docs/progress">Progress</router-link>.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Rôle</strong> - <code>role="meter"</code> avec <code>aria-valuenow</code>, <code>aria-valuemin</code> et <code>aria-valuemax</code> : la valeur est annoncée, pas seulement dessinée.</li>
        <li><strong>Libellé</strong> - <code>aria-label</code> obligatoire : il dit ce qui est mesuré (« Espace disque utilisé »).</li>
        <li><strong>Valeur visible</strong> - afficher aussi la valeur en texte à côté : la jauge seule ne donne pas le chiffre.</li>
        <li><strong>Unités</strong> - préciser l'unité dans le texte (« 18 Go sur 20 Go »), pas seulement le pourcentage.</li>
        <li><strong>Couleur</strong> - si un seuil critique change la teinte, doubler l'information d'un texte.</li>
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
import { BaseMeter } from '@tom/design-system/vue';

const code = `<BaseMeter label="Stockage utilisé" :value="64" />
<BaseMeter label="Quota API" :value="380" :max="500" :format="(v) => \`\${v} / 500 appels\`" />`;

const rows: PropRow[] = [
  { name: 'value', type: 'number', default: '-', description: 'Valeur mesurée.' },
  { name: 'min', type: 'number', default: '0', description: 'Borne minimale.' },
  { name: 'max', type: 'number', default: '100', description: 'Borne maximale.' },
  { name: 'label', type: 'string', default: '-', description: 'Libellé au-dessus de la jauge.' },
  { name: 'showValue', type: 'boolean', default: 'true', description: 'Affiche la valeur à droite du libellé.' },
  { name: 'format', type: '(value: number) => string', default: '-', description: "Formateur personnalisé de l'affichage." },
];
</script>

<style scoped lang="scss">
.meter-w {
  width: 360px;
  max-width: 100%;
}
</style>
