<template>
  <DocPage
    eyebrow="Formulaires"
    title="Input"
    description="Champ de saisie sur une ligne, compatible v-model, avec focus ring aux couleurs de la marque."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="basicCode" stack>
        <div class="input-w"><BaseInput v-model="value" placeholder="ex. Mon projet" /></div>
        <p class="hint">Valeur : {{ value || '-' }}</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Types</h2>
      <p>La prop <code>type</code> accepte tout type HTML natif (<code>text</code>, <code>email</code>, <code>password</code>…).</p>
      <DemoBlock :code="typesCode" stack>
        <div class="input-w"><BaseInput v-model="email" type="email" placeholder="email@exemple.com" /></div>
        <div class="input-w"><BaseInput v-model="typePassword" type="password" placeholder="Mot de passe" /></div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Password</h2>
      <p>Le type <code>password</code> affiche automatiquement un bouton pour révéler ou masquer le mot de passe.</p>
      <DemoBlock :code="passwordCode" stack>
        <div class="input-w"><BaseInput v-model="password" type="password" placeholder="Mot de passe" /></div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Clearable</h2>
      <p>La prop <code>clearable</code> ajoute une croix à droite pour vider le champ.</p>
      <DemoBlock :code="clearableCode" stack>
        <div class="input-w"><BaseInput v-model="search" clearable placeholder="Rechercher un composant" /></div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Icône</h2>
      <p>Une icône peut être placée dans le champ via le slot <code>#icon</code>.</p>
      <DemoBlock :code="iconCode" stack>
        <div class="input-w">
          <BaseInput placeholder="Rechercher...">
            <template #icon>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </template>
          </BaseInput>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Bordure <code>--color-border</code>, fond <code>--color-surface</code>.</td></tr>
            <tr><td><code>hover</code></td><td>Bordure assombrie.</td></tr>
            <tr><td><code>focus</code></td><td>Bordure d'accent et anneau <code>--color-ring</code>.</td></tr>
            <tr><td><code>disabled</code></td><td>Attribut natif <code>disabled</code> : opacité réduite, curseur interdit.</td></tr>
            <tr><td><code>error</code></td><td>Porté par <router-link class="doc-link" to="/docs/field">Field</router-link>, pas par l'input : passer <code>error</code> au Field parent.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        États fonctionnels intégrés : <code>type="password"</code> ajoute un bouton
        afficher/masquer, <code>clearable</code> ajoute un bouton d'effacement dès que le champ
        n'est plus vide.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Clavier</strong> - saisie native ; les boutons de révélation et d'effacement sont atteignables au <code>Tab</code>.</li>
        <li><strong>Label</strong> - l'input n'a pas de label propre : toujours l'envelopper dans <router-link class="doc-link" to="/docs/field">Field</router-link>, qui lie le label au champ.</li>
        <li><strong>Placeholder</strong> - jamais en guise de label : il disparaît à la saisie et n'est pas lu de façon fiable.</li>
        <li><strong>Aide et erreur</strong> - passer par les props <code>hint</code> et <code>error</code> de Field ; le message d'erreur est annoncé (<code>role="alert"</code>).</li>
        <li><strong>Boutons internes</strong> - le bouton mot de passe porte un <code>aria-label</code> dynamique (« Afficher / Masquer le mot de passe »).</li>
        <li><strong>Type</strong> - utiliser le bon <code>type</code> (<code>email</code>, <code>tel</code>, <code>number</code>) : clavier adapté sur mobile et validation native.</li>
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
import { BaseInput } from '@tom/design-system/vue';

const value = ref('');
const email = ref('');
const typePassword = ref('');
const password = ref('secret123');
const search = ref('Button');

const basicCode = `<BaseInput v-model="value" placeholder="ex. Mon projet" />`;

const passwordCode = `<BaseInput v-model="password" type="password" placeholder="Mot de passe" />`;

const clearableCode = `<BaseInput v-model="search" clearable placeholder="Rechercher un composant" />`;
const typesCode = `<BaseInput v-model="email" type="email" placeholder="email@exemple.com" />
<BaseInput v-model="password" type="password" placeholder="Mot de passe" />`;

const iconCode = `<BaseInput placeholder="Rechercher...">
  <template #icon><SearchIcon /></template>
</BaseInput>`;

const rows: PropRow[] = [
  { name: 'modelValue', type: 'string', default: "''", description: 'Valeur liée (v-model).' },
  { name: 'type', type: 'string', default: "'text'", description: 'Type HTML du champ.' },
  { name: 'placeholder', type: 'string', default: '-', description: 'Texte indicatif.' },
  { name: 'clearable', type: 'boolean', default: 'false', description: 'Affiche une croix pour vider le champ.' },
];
</script>

<style scoped lang="scss">
.input-w {
  width: 360px;
  max-width: 100%;
}

.hint {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}
</style>
