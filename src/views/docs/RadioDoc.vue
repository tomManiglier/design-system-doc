<template>
  <DocPage
    eyebrow="Formulaires"
    title="Radio Group"
    description="Groupe de boutons radio pour un choix unique parmi plusieurs options."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <BaseRadioGroup v-model="value" :options="options" />
        <p class="hint">Sélection : {{ value }}</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Cercle vide par option.</td></tr>
            <tr><td><code>selected</code></td><td>Point central plein ; une seule option sélectionnée à la fois.</td></tr>
            <tr><td><code>hover</code></td><td>Bordure assombrie sur l'option survolée.</td></tr>
            <tr><td><code>focus</code></td><td>Anneau <code>--color-ring</code> sur l'option focalisée.</td></tr>
            <tr><td><code>disabled</code></td><td>Attribut natif sur l'input de l'option.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Le groupe peut n'avoir aucune option sélectionnée au départ (<code>modelValue</code> vide).
        Une fois un choix fait, l'utilisateur ne peut plus revenir à « rien » : prévoir une option
        explicite (« Aucun ») si ce cas doit rester possible.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Clavier</strong> - <code>Tab</code> entre dans le groupe (sur l'option sélectionnée, ou la première) ; les <strong>flèches</strong> déplacent la sélection entre les options. Le groupe entier compte pour un seul arrêt de tabulation.</li>
        <li><strong>Rôle</strong> - le conteneur porte <code>role="radiogroup"</code>.</li>
        <li><strong>Label du groupe</strong> - indispensable : envelopper dans un <router-link class="doc-link" to="/docs/field">Field</router-link> ou un <router-link class="doc-link" to="/docs/fieldset">Fieldset</router-link> ; sans lui, les options n'ont pas de question.</li>
        <li><strong>Labels d'options</strong> - chaque option est un <code>&lt;label&gt;</code> englobant : cliquer le texte sélectionne.</li>
        <li><strong>Radio ou Select ?</strong> - radio jusqu'à 5 options environ (tout est visible) ; au-delà, <router-link class="doc-link" to="/docs/select">Select</router-link>.</li>
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
import { BaseRadioGroup } from '@tommaniglier/design-system-lib/vue';
import type { RadioOption } from '@tommaniglier/design-system-lib/vue';

const value = ref('starter');
const options: RadioOption[] = [
  { label: 'Starter', value: 'starter' },
  { label: 'Pro', value: 'pro' },
  { label: 'Enterprise', value: 'enterprise' },
];
const code = `<BaseRadioGroup v-model="value" :options="options" />`;

const rows: PropRow[] = [
  {
    name: 'modelValue',
    type: 'string | number',
    default: '-',
    description: 'Valeur sélectionnée (v-model).',
  },
  {
    name: 'options',
    type: 'RadioOption[]',
    default: '-',
    description: 'Liste des options { label, value }.',
  },
];
</script>

<style scoped lang="scss">
.hint {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}
</style>
