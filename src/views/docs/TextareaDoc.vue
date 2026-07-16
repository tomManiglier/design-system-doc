<template>
  <DocPage
    eyebrow="Formulaires"
    title="Textarea"
    description="Champ de saisie multiligne, compatible v-model, avec hauteur redimensionnable."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <BaseTextarea v-model="value" placeholder="Votre message…" />
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Bordure <code>--color-border</code>, hauteur de 4 lignes (<code>rows</code>).</td></tr>
            <tr><td><code>hover</code></td><td>Bordure assombrie.</td></tr>
            <tr><td><code>focus</code></td><td>Bordure d'accent et anneau <code>--color-ring</code>.</td></tr>
            <tr><td><code>disabled</code></td><td>Attribut natif <code>disabled</code>.</td></tr>
            <tr><td><code>error</code></td><td>Porté par <router-link class="doc-link" to="/docs/field">Field</router-link>.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Le redimensionnement vertical par l'utilisateur reste actif : ne pas le bloquer, c'est une
        aide réelle sur les textes longs. Ajuster <code>rows</code> à la longueur attendue plutôt
        que de compter sur le redimensionnement.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Clavier</strong> - saisie native ; <code>Tab</code> sort du champ (il n'insère pas de tabulation), <code>Entrée</code> crée une nouvelle ligne.</li>
        <li><strong>Label</strong> - toujours dans un <router-link class="doc-link" to="/docs/field">Field</router-link> : le label est lié au champ.</li>
        <li><strong>Aide</strong> - indiquer les contraintes (longueur, format attendu) dans <code>hint</code>, pas dans le placeholder.</li>
        <li><strong>Compteur de caractères</strong> - s'il existe, l'annoncer via <code>aria-live="polite"</code> et ne pas le mettre à jour à chaque frappe.</li>
        <li><strong>Hauteur</strong> - ne jamais réduire sous 3 lignes : le contexte de saisie doit rester lisible.</li>
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
import { BaseTextarea } from '@tommaniglier/design-system-lib/vue';

const value = ref('');
const code = `<BaseTextarea v-model="value" placeholder="Votre message…" />`;

const rows: PropRow[] = [
  { name: 'modelValue', type: 'string', default: "''", description: 'Valeur liée (v-model).' },
  { name: 'placeholder', type: 'string', default: '-', description: 'Texte indicatif.' },
  { name: 'rows', type: 'number', default: '4', description: 'Nombre de lignes visibles.' },
];
</script>
