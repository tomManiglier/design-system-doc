<template>
  <DocPage
    eyebrow="Données"
    title="Calendar"
    description="Calendrier mensuel : sélection de date, navigation entre mois, aujourd'hui mis en avant."
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <BaseCalendar v-model="date" />
        <p class="hint">Date sélectionnée : {{ date || '-' }}</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Jour du mois courant, texte <code>--color-foreground</code>.</td></tr>
            <tr><td><code>selected</code></td><td>Jour sélectionné : fond plein.</td></tr>
            <tr><td><code>today</code></td><td>Jour courant marqué en <code>--color-brand-primary</code>.</td></tr>
            <tr><td><code>hover</code></td><td>Fond <code>--color-muted</code> sur le jour survolé.</td></tr>
            <tr><td><code>outside</code></td><td>Jours des mois adjacents, atténués.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Le calendrier affiche un mois à la fois ; la navigation se fait par les flèches d'en-tête. Pour saisir une date dans un formulaire, préférer <router-link class="doc-link" to="/docs/datetime-picker">DateTime Picker</router-link>.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Clavier</strong> - les jours sont des <code>&lt;button&gt;</code>, atteignables au <code>Tab</code>. La navigation aux flèches dans la grille n'est pas implémentée : à signaler comme manque pour un usage intensif.</li>
        <li><strong>Flèches de navigation</strong> - boutons avec <code>aria-label</code> (« Mois précédent ») ; les icônes sont <code>aria-hidden</code>.</li>
        <li><strong>Jour courant</strong> - marqué par la couleur <em>et</em> reste identifiable au texte : ne pas s'appuyer sur la seule teinte.</li>
        <li><strong>Libellés de jours</strong> - les en-têtes de colonnes sont abrégés ; le format complet doit rester déductible du contexte.</li>
        <li><strong>Sélection</strong> - annoncer la date choisie ailleurs qu'en couleur (champ associé, résumé).</li>
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
import { BaseCalendar } from '@tommaniglier/design-system-lib/vue';

const date = ref('');

const code = `<BaseCalendar v-model="date" />`;

const rows: PropRow[] = [
  { name: 'modelValue', type: 'string', default: '-', description: "Date sélectionnée au format 'YYYY-MM-DD' (v-model)." },
];
</script>

<style scoped lang="scss">
.hint {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}
</style>
