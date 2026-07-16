<template>
  <DocPage
    eyebrow="Formulaires"
    title="Checkbox"
    description="Case à cocher pour un choix binaire ou une sélection multiple."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <BaseCheckbox v-model="a">Accepter les conditions</BaseCheckbox>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Groupe</h2>
      <DemoBlock :code="groupCode" stack>
        <BaseCheckbox v-model="framework1">Next.js</BaseCheckbox>
        <BaseCheckbox v-model="framework2">Vite</BaseCheckbox>
        <BaseCheckbox v-model="framework3">Astro</BaseCheckbox>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Carré vide, bordure <code>--color-border</code>.</td></tr>
            <tr><td><code>checked</code></td><td>Fond <code>--color-primary</code> et coche blanche, piloté par <code>v-model</code>.</td></tr>
            <tr><td><code>hover</code></td><td>Bordure assombrie ; toute la zone du label est cliquable.</td></tr>
            <tr><td><code>focus</code></td><td>Anneau <code>--color-ring</code> autour du carré (<code>:focus-visible</code>).</td></tr>
            <tr><td><code>disabled</code></td><td>Attribut natif <code>disabled</code> sur l'input.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Pas d'état indéterminé fourni. Pour une case « tout sélectionner » partielle, il faut
        poser <code>indeterminate</code> sur l'élément natif en JavaScript - à signaler comme un
        manque si le besoin se répète.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Clavier</strong> - <code>Tab</code> pour atteindre la case, <code>Espace</code> pour la cocher/décocher (comportement natif).</li>
        <li><strong>Label</strong> - le composant est un <code>&lt;label&gt;</code> englobant : le texte du slot est le nom accessible et étend la zone cliquable.</li>
        <li><strong>Case sans texte</strong> - proscrite ; si le contexte l'impose (case dans une ligne de tableau), fournir un <code>aria-label</code> décrivant la ligne concernée.</li>
        <li><strong>Groupes</strong> - plusieurs cases liées se regroupent dans un <router-link class="doc-link" to="/docs/fieldset">Fieldset</router-link> avec une légende.</li>
        <li><strong>Checkbox ou Switch ?</strong> - la case sert à un choix validé plus tard (formulaire) ; le <router-link class="doc-link" to="/docs/switch">Switch</router-link> applique un réglage immédiatement.</li>
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
import { BaseCheckbox } from '@tommaniglier/design-system-lib/vue';

const a = ref(true);
const code = `<BaseCheckbox v-model="a">Accepter les conditions</BaseCheckbox>`;

const framework1 = ref(true);
const framework2 = ref(false);
const framework3 = ref(false);
const groupCode = `<BaseCheckbox v-model="framework1">Next.js</BaseCheckbox>
<BaseCheckbox v-model="framework2">Vite</BaseCheckbox>
<BaseCheckbox v-model="framework3">Astro</BaseCheckbox>`;

const rows: PropRow[] = [
  {
    name: 'modelValue',
    type: 'boolean',
    default: 'false',
    description: 'État coché (v-model).',
  },
];
</script>
