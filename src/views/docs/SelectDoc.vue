<template>
  <DocPage
    eyebrow="Formulaires"
    title="Select"
    description="Liste déroulante native, stylée aux couleurs de la marque, pour un choix unique."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <div class="w">
          <BaseSelect v-model="value" :options="options" placeholder="Choisir un marché" />
        </div>
        <p class="hint">Sélection : {{ value || '-' }}</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Bordure <code>--color-border</code>, chevron à droite.</td></tr>
            <tr><td><code>hover</code></td><td>Bordure assombrie.</td></tr>
            <tr><td><code>focus</code></td><td>Bordure d'accent et anneau <code>--color-ring</code>.</td></tr>
            <tr><td><code>open</code></td><td>Liste native du système : rendu propre à l'OS et au navigateur.</td></tr>
            <tr><td><code>disabled</code></td><td>Attribut natif <code>disabled</code>.</td></tr>
            <tr><td><code>empty</code></td><td>Le <code>placeholder</code> s'affiche comme option désactivée tant qu'aucune valeur n'est choisie.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Le composant s'appuie sur <code>&lt;select&gt;</code> natif : le panneau d'options n'est pas
        stylable, mais il est parfaitement accessible et adapté au mobile. Pour une sélection
        multiple, voir <router-link class="doc-link" to="/docs/multiselect">Multiselect</router-link>.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Clavier</strong> - <code>Tab</code> pour atteindre le champ ; <code>Entrée</code> / <code>Espace</code> ou <code>Alt+↓</code> ouvre la liste ; les flèches naviguent ; <code>Entrée</code> valide ; <code>Échap</code> ferme. Taper une lettre saute à l'option correspondante. Tout est natif.</li>
        <li><strong>Label</strong> - envelopper dans <router-link class="doc-link" to="/docs/field">Field</router-link> : le placeholder n'est pas un label.</li>
        <li><strong>Placeholder</strong> - rendu comme option <code>disabled</code> de valeur vide, il n'est donc pas sélectionnable par erreur.</li>
        <li><strong>Chevron</strong> - décoratif (<code>aria-hidden</code>).</li>
        <li><strong>Ordre des options</strong> - logique (alphabétique ou métier), pas aléatoire : c'est ce qui rend la recherche au clavier utilisable.</li>
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
import { BaseSelect } from '@tom/design-system/vue';
import type { SelectOption } from '@tom/design-system/vue';

const value = ref('');
const options: SelectOption[] = [
  { label: 'Aéronautique', value: 'aero' },
  { label: 'Automobile', value: 'auto' },
  { label: 'Industrie', value: 'industry' },
];
const code = `<BaseSelect v-model="value" :options="options" placeholder="Choisir un marché" />`;

const rows: PropRow[] = [
  { name: 'modelValue', type: 'string | number', default: "''", description: 'Valeur sélectionnée (v-model).' },
  { name: 'options', type: 'SelectOption[]', default: '-', description: 'Liste des options { label, value }.' },
  { name: 'placeholder', type: 'string', default: '-', description: 'Option indicative désactivée.' },
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
