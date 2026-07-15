<template>
  <DocPage
    eyebrow="Formulaires"
    title="Form"
    description="Conteneur de formulaire : espacement vertical cohérent et soumission interceptée."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <div class="form-w">
          <BaseForm @submit="submitted = true">
            <BaseField label="Nom" required>
              <BaseInput v-model="name" placeholder="Jean Dupont" />
            </BaseField>
            <BaseField label="E-mail" hint="Nous ne partagerons jamais votre e-mail.">
              <BaseInput v-model="email" type="email" placeholder="jean@exemple.com" />
            </BaseField>
            <BaseButton variant="primary" style="align-self: flex-start">Envoyer</BaseButton>
          </BaseForm>
          <p v-if="submitted" class="hint">Formulaire soumis ✓</p>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Événements</h2>
      <PropsTable :rows="rows" />
    </section>
    <section class="doc-section">
      <h2>États</h2>
      <p>Le composant est un <code>&lt;form&gt;</code> qui intercepte la soumission (<code>@submit.prevent</code>) et espace ses enfants verticalement. Les états - validation, erreurs, envoi en cours - sont portés par les champs et par votre logique.</p>
      <p>L'assemblage complet (validation, erreurs, actions) est décrit dans le pattern <router-link class="doc-link" to="/patterns/form">Formulaire</router-link>.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Élément natif</strong> - un vrai <code>&lt;form&gt;</code> : <code>Entrée</code> dans un champ soumet, les lecteurs d'écran annoncent le formulaire.</li>
        <li><strong>Bouton de soumission</strong> - toujours un <code>type="submit"</code> dans le formulaire, même si un gestionnaire JS existe : c'est lui qui permet la soumission au clavier.</li>
        <li><strong>Ne pas désactiver le bouton</strong> tant que le formulaire est incomplet : un clic doit déclencher la validation et montrer quoi corriger.</li>
        <li><strong>Erreurs groupées</strong> - après un échec, donner le focus au premier champ en erreur.</li>
        <li><strong>novalidate</strong> - le poser si vous gérez la validation vous-même, pour garder la maîtrise des messages.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import PropsTable from '../../components/docs/PropsTable.vue';
import type { PropRow } from '../../components/docs/types';
import { BaseForm, BaseField, BaseInput, BaseButton } from '@tom/design-system/vue';

const name = ref('');
const email = ref('');
const submitted = ref(false);

const code = `<BaseForm @submit="onSubmit">
  <BaseField label="Nom" required>
    <BaseInput v-model="name" placeholder="Jean Dupont" />
  </BaseField>
  <BaseField label="E-mail" hint="Nous ne partagerons jamais votre e-mail.">
    <BaseInput v-model="email" type="email" placeholder="jean@exemple.com" />
  </BaseField>
  <BaseButton variant="primary">Envoyer</BaseButton>
</BaseForm>`;

const rows: PropRow[] = [
  { name: '@submit', type: 'event', default: '-', description: 'Émis à la soumission (preventDefault appliqué).' },
];
</script>

<style scoped lang="scss">
.form-w {
  width: 420px;
  max-width: 100%;
}

.hint {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 12px 0 0;
}
</style>
