<template>
  <DocPage
    eyebrow="Formulaires"
    title="Slider"
    description="Sélection d'une valeur numérique sur une plage continue."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <div class="w">
          <BaseSlider v-model="value" :min="0" :max="100" />
        </div>
        <p class="hint">Valeur : {{ value }}</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Piste remplie jusqu'à la valeur, pastille à la position courante.</td></tr>
            <tr><td><code>hover</code></td><td>Pastille légèrement agrandie.</td></tr>
            <tr><td><code>focus</code></td><td>Anneau <code>--color-ring</code> autour de la pastille (<code>:focus-visible</code>).</td></tr>
            <tr><td><code>disabled</code></td><td>Attribut natif <code>disabled</code> sur l'input.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Le remplissage suit la valeur via une variable CSS calculée entre <code>min</code> et <code>max</code>. Le pas est défini par <code>step</code>.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Élément natif</strong> - <code>&lt;input type="range"&gt;</code> : rôle, valeur min/max/courante et navigation sont fournis par le navigateur.</li>
        <li><strong>Clavier</strong> - flèches pour ajuster d'un <code>step</code>, <code>Début</code> / <code>Fin</code> pour les extrêmes. Rien à réimplémenter.</li>
        <li><strong>Label</strong> - envelopper dans un <router-link class="doc-link" to="/docs/field">Field</router-link> : sans lui, l'utilisateur ne sait pas ce qu'il règle.</li>
        <li><strong>Valeur visible</strong> - afficher la valeur courante à côté : la position de la pastille ne donne pas le chiffre.</li>
        <li><strong>Saisie précise</strong> - si la valeur exacte compte, doubler d'un champ numérique : le slider vise l'approximation.</li>
        <li><strong>Cible tactile</strong> - la pastille reste assez grande pour être attrapée au doigt.</li>
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
import { BaseSlider } from '@tom/design-system/vue';

const value = ref(40);
const code = `<BaseSlider v-model="value" :min="0" :max="100" />`;

const rows: PropRow[] = [
  { name: 'modelValue', type: 'number', default: '50', description: 'Valeur courante (v-model).' },
  { name: 'min', type: 'number', default: '0', description: 'Valeur minimale.' },
  { name: 'max', type: 'number', default: '100', description: 'Valeur maximale.' },
  { name: 'step', type: 'number', default: '1', description: 'Pas d\'incrément.' },
];
</script>

<style scoped lang="scss">
.w {
  width: 260px;
  max-width: 100%;
}
.hint {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}
</style>
