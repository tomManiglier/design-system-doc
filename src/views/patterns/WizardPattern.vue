<template>
  <DocPage
    eyebrow="Patterns"
    title="Assistant multi-étapes"
    description="Découper une tâche longue en étapes visibles, avec retour en arrière libre et récapitulatif avant validation."
  >
    <section class="doc-section">
      <h2>Exemple complet</h2>
      <DemoBlock :code="wizardCode" stack>
        <div class="wizard">
          <ol class="wizard__steps">
            <li
              v-for="(label, i) in steps"
              :key="label"
              class="wizard__step"
              :class="{ 'wizard__step--done': i < current, 'wizard__step--active': i === current }"
            >
              <span class="wizard__step-dot">
                <BaseIcon v-if="i < current" name="check" :size="12" />
                <template v-else>{{ i + 1 }}</template>
              </span>
              <span class="wizard__step-label">{{ label }}</span>
            </li>
          </ol>
          <BaseProgress :value="progress" />

          <div class="wizard__body">
            <template v-if="current === 0">
              <BaseField label="Nom du projet" required>
                <BaseInput v-model="form.name" placeholder="ex. Refonte du site vitrine" />
              </BaseField>
              <BaseField label="Équipe">
                <BaseSelect v-model="form.team" :options="teams" placeholder="Choisir une équipe" />
              </BaseField>
            </template>
            <template v-else-if="current === 1">
              <BaseField label="Description" hint="Facultatif - quelques phrases suffisent.">
                <BaseTextarea v-model="form.description" placeholder="Objectif du projet" />
              </BaseField>
              <BaseCheckbox v-model="form.notify">Prévenir l'équipe au lancement</BaseCheckbox>
            </template>
            <template v-else>
              <p class="wizard__summary-label">Récapitulatif avant création</p>
              <ul class="wizard__summary">
                <li><strong>Projet</strong> {{ form.name || '—' }}</li>
                <li><strong>Équipe</strong> {{ teamLabel }}</li>
                <li><strong>Description</strong> {{ form.description || '—' }}</li>
              </ul>
            </template>
          </div>

          <div class="wizard__actions">
            <BaseButton variant="outline" :disabled="current === 0" @click="current--">Précédent</BaseButton>
            <BaseButton v-if="current < steps.length - 1" variant="primary" @click="current++">
              Continuer
            </BaseButton>
            <BaseButton v-else variant="primary" @click="finish">Créer le projet</BaseButton>
          </div>
          <p v-if="done" class="wizard__done">
            <BaseIcon name="check" :size="14" /> Projet « {{ form.name }} » créé.
          </p>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Décisions UX</h2>
      <ul class="doc-list">
        <li><strong>Les étapes restent nommées et visibles en permanence</strong> - une barre de progression seule ne dit pas combien il en reste ni ce qu'elles couvrent.</li>
        <li><strong>Retour en arrière toujours possible</strong> via « Précédent » : jamais de perte du contenu déjà saisi en revenant sur une étape.</li>
        <li>Chaque étape valide son propre contenu à l'envoi, pas pendant la saisie - même règle que le pattern <router-link class="doc-link" to="/patterns/form">Formulaire</router-link>.</li>
        <li><strong>La dernière étape est un récapitulatif texte</strong>, pas un aperçu graphique : la personne doit pouvoir vérifier chaque valeur avant de valider.</li>
        <li>Au-delà de 4 à 5 étapes, l'assistant devient un obstacle : découper en tâches séparées plutôt que d'allonger la séquence.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import {
  BaseButton,
  BaseCheckbox,
  BaseField,
  BaseIcon,
  BaseInput,
  BaseProgress,
  BaseSelect,
  BaseTextarea,
} from '@tommaniglier/design-system-lib/vue';
import type { SelectOption } from '@tommaniglier/design-system-lib/vue';

const steps = ['Informations', 'Détails', 'Confirmation'];
const current = ref(0);
const done = ref(false);

const teams: SelectOption[] = [
  { label: 'Produit', value: 'produit' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Support', value: 'support' },
];

const form = reactive({
  name: '',
  team: '',
  description: '',
  notify: true,
});

const teamLabel = computed(() => teams.find((t) => t.value === form.team)?.label ?? '—');
const progress = computed(() => Math.round(((current.value + 1) / steps.length) * 100));

function finish() {
  done.value = true;
}

const wizardCode = `<ol class="wizard__steps">
  <li v-for="(label, i) in steps" :key="label"
      :class="{ done: i < current, active: i === current }">
    <span>{{ i < current ? '✓' : i + 1 }}</span> {{ label }}
  </li>
</ol>
<BaseProgress :value="progress" />

<!-- contenu de l'étape courante -->
<BaseField label="Nom du projet" required>
  <BaseInput v-model="form.name" />
</BaseField>

<BaseButton variant="outline" :disabled="current === 0" @click="current--">Précédent</BaseButton>
<BaseButton variant="primary" @click="current++">Continuer</BaseButton>`;
</script>

<style scoped lang="scss">
.wizard {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 480px;
}

.wizard__steps {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.wizard__step {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
}

.wizard__step-dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex: none;
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  color: var(--color-muted-foreground);
  background: var(--color-muted);
  border-radius: 999px;
}

.wizard__step--active {
  color: var(--color-foreground);

  .wizard__step-dot {
    color: var(--color-primary-foreground);
    background: var(--color-primary);
  }
}

.wizard__step--done .wizard__step-dot {
  color: var(--color-primary-foreground);
  background: var(--color-brand-secondary);
}

.wizard__body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 96px;
}

.wizard__summary-label {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  margin: 0;
}

.wizard__summary {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: var(--text-sm);

  strong {
    display: inline-block;
    min-width: 90px;
    color: var(--color-muted-foreground);
    font-weight: var(--weight-medium);
  }
}

.wizard__actions {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.wizard__done {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}
</style>
