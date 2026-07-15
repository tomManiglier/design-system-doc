<template>
  <DocPage
    eyebrow="Formulaires"
    title="Field"
    description="Associe un label, un contrôle et un texte d'aide ou d'erreur."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <div class="field-w">
          <BaseField label="Nom du projet" hint="Ce nom sera visible par votre équipe.">
            <BaseInput v-model="value" placeholder="ex. Mon projet" />
          </BaseField>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Erreur</h2>
      <p>La prop <code>error</code> remplace le texte d'aide et signale le problème.</p>
      <DemoBlock :code="errorCode" stack>
        <div class="field-w">
          <BaseField label="E-mail" required error="Cette adresse e-mail est invalide.">
            <BaseInput modelValue="jean@" type="email" />
          </BaseField>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Label, contrôle, et aide (<code>hint</code>) si fournie.</td></tr>
            <tr><td><code>required</code></td><td>Astérisque après le label.</td></tr>
            <tr><td><code>error</code></td><td>Le message d'<code>error</code> remplace l'aide, en rouge, avec icône d'alerte.</td></tr>
          </tbody>
        </table>
      </div>
      <p>L'aide et l'erreur ne s'affichent jamais ensemble : quand <code>error</code> est renseignée, elle prend la place du <code>hint</code>. Field est le porteur de l'état d'erreur - pas l'<router-link class="doc-link" to="/docs/input">Input</router-link>.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Erreur annoncée</strong> - le message porte <code>role="alert"</code> : il est lu dès son apparition, sans attendre que l'utilisateur y arrive.</li>
        <li><strong>Label</strong> - visible, toujours ; c'est la raison d'être du composant. Ne jamais s'en passer au profit d'un placeholder.</li>
        <li><strong>Icône d'alerte</strong> - décorative (<code>aria-hidden</code>) : le texte porte le message.</li>
        <li><strong>Required</strong> - l'astérisque est visuel ; ajouter aussi <code>required</code> sur le contrôle pour l'annonce.</li>
        <li><strong>Aide utile</strong> - <code>hint</code> porte les contraintes de format ; ce qui est indispensable ne va pas dans un <router-link class="doc-link" to="/docs/tooltip">Tooltip</router-link>.</li>
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
import { BaseField, BaseInput } from '@tom/design-system/vue';

const value = ref('');

const code = `<BaseField label="Nom du projet" hint="Ce nom sera visible par votre équipe.">
  <BaseInput v-model="value" placeholder="ex. Mon projet" />
</BaseField>`;

const errorCode = `<BaseField label="E-mail" required error="Cette adresse e-mail est invalide.">
  <BaseInput v-model="email" type="email" />
</BaseField>`;

const rows: PropRow[] = [
  { name: 'label', type: 'string', default: '-', description: 'Label du champ.' },
  { name: 'hint', type: 'string', default: '-', description: "Texte d'aide sous le contrôle." },
  { name: 'error', type: 'string', default: '-', description: "Message d'erreur (prioritaire sur hint)." },
  { name: 'required', type: 'boolean', default: 'false', description: 'Affiche un astérisque après le label.' },
];
</script>

<style scoped lang="scss">
.field-w {
  width: 360px;
  max-width: 100%;
}
</style>
