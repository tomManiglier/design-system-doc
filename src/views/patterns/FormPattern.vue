<template>
  <DocPage
    eyebrow="Patterns"
    title="Formulaire"
    description="Assembler Form, Field, Input, Select et Button en un formulaire complet : labels, aides, validation et messages d'erreur."
  >
    <section class="doc-section">
      <h2>Exemple complet</h2>
      <p>
        Chaque champ passe par <router-link class="doc-link" to="/docs/field">Field</router-link>,
        qui affiche le label, l'aide et le message d'erreur. On valide au moment d'envoyer le
        formulaire, pas pendant que l'utilisateur tape.
      </p>
      <DemoBlock :code="formCode" stack>
        <form class="pattern-form" novalidate @submit.prevent="submit">
          <BaseField label="Nom du projet" hint="Visible par toute l'équipe." :error="errors.name" required>
            <BaseInput v-model="name" placeholder="ex. Refonte du site vitrine" />
          </BaseField>

          <BaseField label="Responsable" :error="errors.owner" required>
            <BaseSelect v-model="owner" :options="owners" placeholder="Choisir un membre" />
          </BaseField>

          <BaseField label="Description" hint="Facultatif - quelques phrases suffisent.">
            <BaseTextarea v-model="description" placeholder="ex. Migrer les pages produit vers le design system" />
          </BaseField>

          <BaseCheckbox v-model="notify">Prévenir l'équipe par e-mail</BaseCheckbox>

          <div class="pattern-form__actions">
            <BaseButton variant="primary" type="submit">Créer le projet</BaseButton>
            <BaseButton variant="outline" type="button" @click="reset">Annuler</BaseButton>
          </div>
        </form>
      </DemoBlock>
      <p>
        Une fois le formulaire validé, la confirmation suit les règles du pattern
        <router-link class="doc-link" to="/patterns/feedback">Notifications &amp; feedback</router-link>.
      </p>
    </section>

    <section class="doc-section">
      <h2>Décisions UX</h2>
      <ul class="doc-list">
        <li><strong>Une seule colonne.</strong> Plusieurs colonnes cassent l'ordre de lecture et la navigation au clavier.</li>
        <li><strong>On valide à l'envoi</strong>, puis chaque champ se corrige à son tour : un champ en erreur redevient valide dès qu'il est corrigé.</li>
        <li><strong>Le bouton principal répète l'action</strong> (« Créer le projet »), le bouton secondaire est en <code>outline</code>, juste à côté.</li>
        <li><strong>Le bouton reste cliquable</strong> même si le formulaire est incomplet : cliquer déclenche la validation et montre quoi corriger.</li>
        <li>Si la plupart des champs sont obligatoires, marquer plutôt ceux qui sont <em>facultatifs</em>.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Rédaction</h2>
      <p>
        Labels courts, placeholders en « ex. … », erreurs qui disent quoi corriger.
      </p>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import {
  BaseButton,
  BaseCheckbox,
  BaseField,
  BaseInput,
  BaseSelect,
  BaseTextarea,
} from '@tommaniglier/design-system-lib/vue';
import type { SelectOption } from '@tommaniglier/design-system-lib/vue';

const name = ref('');
const owner = ref('');
const description = ref('');
const notify = ref(true);
const errors = ref<{ name?: string; owner?: string }>({});

const owners: SelectOption[] = [
  { label: 'Marie Dupont', value: 'marie' },
  { label: 'Nicolas Sy', value: 'nicolas' },
  { label: 'Lina Roche', value: 'lina' },
];

function submit() {
  errors.value = {};
  if (!name.value.trim()) errors.value.name = 'Donnez un nom au projet, ex. Refonte 2026.';
  if (!owner.value) errors.value.owner = 'Choisissez un responsable dans la liste.';
}

function reset() {
  name.value = '';
  owner.value = '';
  description.value = '';
  errors.value = {};
}

const formCode = `<form novalidate @submit.prevent="submit">
  <BaseField label="Nom du projet" hint="Visible par toute l'équipe."
             :error="errors.name" required>
    <BaseInput v-model="name" placeholder="ex. Refonte du site vitrine" />
  </BaseField>

  <BaseField label="Responsable" :error="errors.owner" required>
    <BaseSelect v-model="owner" :options="owners" placeholder="Choisir un membre" />
  </BaseField>

  <BaseCheckbox v-model="notify">Prévenir l'équipe par e-mail</BaseCheckbox>

  <BaseButton variant="primary" type="submit">Créer le projet</BaseButton>
  <BaseButton variant="outline" type="button">Annuler</BaseButton>
</form>`;
</script>

<style scoped lang="scss">
.pattern-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 480px;
}

.pattern-form__actions {
  display: flex;
  gap: 10px;
}
</style>
