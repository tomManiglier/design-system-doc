<template>
  <DocPage
    eyebrow="Formulaires"
    title="Multiselect"
    description="Sélection multiple dans une liste déroulante, avec cases à cocher."
    status="beta"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <div class="ms-w">
          <BaseMultiselect v-model="selected" :options="options" placeholder="Choisir des équipes" />
        </div>
        <p class="hint">Sélection : {{ selected.length ? selected.join(', ') : '-' }}</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Champ fermé, placeholder ou résumé de la sélection.</td></tr>
            <tr><td><code>open</code></td><td>Liste d'options déroulée ; <code>aria-expanded="true"</code>.</td></tr>
            <tr><td><code>selected</code></td><td>Option cochée : <code>aria-selected="true"</code> et marque visuelle.</td></tr>
            <tr><td><code>focus</code></td><td>Anneau <code>--color-ring</code> sur le déclencheur.</td></tr>
            <tr><td><code>empty</code></td><td>Aucune sélection : placeholder affiché.</td></tr>
          </tbody>
        </table>
      </div>
      <p>La liste se ferme au clic extérieur et sur <code>Échap</code> ; elle reste ouverte entre deux sélections, pour enchaîner les choix.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Rôles</strong> - liste en <code>role="listbox"</code> avec <code>aria-multiselectable="true"</code>, options en <code>role="option"</code> avec <code>aria-selected</code>.</li>
        <li><strong>Clavier</strong> - <code>Entrée</code> ouvre, <code>Échap</code> ferme, <code>Tab</code> atteint les options. La navigation aux flèches avec <code>aria-activedescendant</code> n'est pas implémentée : à signaler pour un usage intensif.</li>
        <li><strong>Label</strong> - envelopper dans un <router-link class="doc-link" to="/docs/field">Field</router-link>.</li>
        <li><strong>Sélection annoncée</strong> - le résumé dans le déclencheur (« 3 sélectionnés ») doit refléter l'état réel.</li>
        <li><strong>Alternative</strong> - sous 5 options, un groupe de <router-link class="doc-link" to="/docs/checkbox">Checkbox</router-link> est plus simple et plus accessible.</li>
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
import { BaseMultiselect } from '@tom/design-system/vue';
import type { SelectOption } from '@tom/design-system/vue';

const selected = ref<(string | number)[]>(['design']);
const options: SelectOption[] = [
  { label: 'Design', value: 'design' },
  { label: 'Développement', value: 'dev' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Support', value: 'support' },
  { label: 'Finance', value: 'finance' },
];

const code = `<BaseMultiselect
  v-model="selected"
  :options="options"
  placeholder="Choisir des équipes"
/>`;

const rows: PropRow[] = [
  { name: 'modelValue', type: '(string | number)[]', default: '[]', description: 'Valeurs sélectionnées (v-model).' },
  { name: 'options', type: 'SelectOption[]', default: '-', description: 'Liste des options { label, value }.' },
  { name: 'placeholder', type: 'string', default: "'Sélectionner...'", description: 'Texte affiché sans sélection.' },
];
</script>

<style scoped lang="scss">
.ms-w {
  width: 360px;
  max-width: 100%;
}

.hint {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}
</style>
