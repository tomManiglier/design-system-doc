<template>
  <DocPage
    eyebrow="Données"
    title="DateTime Picker"
    description="Sélection combinée d'une date et d'une heure dans un panneau déroulant."
    status="beta"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <BaseDatetimePicker v-model="value" placeholder="Planifier une intervention" />
        <p class="hint">Valeur : {{ value || '-' }}</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Champ fermé affichant la valeur ou le placeholder.</td></tr>
            <tr><td><code>open</code></td><td>Panneau calendrier + heure ; <code>aria-expanded="true"</code>.</td></tr>
            <tr><td><code>focus</code></td><td>Anneau <code>--color-ring</code> sur le déclencheur.</td></tr>
            <tr><td><code>selected</code></td><td>Date et heure choisies affichées dans le champ.</td></tr>
            <tr><td><code>empty</code></td><td>Placeholder tant qu'aucune valeur n'est choisie.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Le panneau se ferme au clic extérieur et sur <code>Échap</code>.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Clavier</strong> - <code>Tab</code> jusqu'au déclencheur, <code>Entrée</code> pour ouvrir, <code>Échap</code> pour fermer. La navigation aux flèches dans la grille de dates n'est pas implémentée.</li>
        <li><strong>État</strong> - <code>aria-expanded</code> sur le déclencheur.</li>
        <li><strong>Label</strong> - envelopper dans un <router-link class="doc-link" to="/docs/field">Field</router-link> : le placeholder ne dit pas de quelle date il s'agit.</li>
        <li><strong>Format attendu</strong> - indiquer le format dans l'aide du Field, pas dans le placeholder.</li>
        <li><strong>Saisie directe</strong> - pour une date connue (date de naissance), un champ texte avec format guidé est plus rapide qu'un calendrier.</li>
        <li><strong>Focus</strong> - rendre le focus au déclencheur à la fermeture.</li>
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
import { BaseDatetimePicker } from '@tom/design-system/vue';

const value = ref('');

const code = `<BaseDatetimePicker v-model="value" placeholder="Planifier une intervention" />`;

const rows: PropRow[] = [
  { name: 'modelValue', type: 'string', default: '-', description: "Valeur au format 'YYYY-MM-DDTHH:mm' (v-model)." },
  { name: 'placeholder', type: 'string', default: "'Choisir une date et une heure'", description: 'Texte affiché sans valeur.' },
];
</script>

<style scoped lang="scss">
.hint {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}
</style>
