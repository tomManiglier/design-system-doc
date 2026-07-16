<template>
  <DocPage
    eyebrow="Patterns"
    title="États d'erreur"
    description="Trois niveaux d'erreur - champ, section, page - chacun avec son composant et sa portée. Toujours dire quoi corriger ou quoi faire."
  >
    <section class="doc-section">
      <h2>Erreur de champ</h2>
      <p>
        Portée locale : le message s'affiche sous le champ via
        <router-link class="doc-link" to="/docs/field">Field</router-link>, qui l'annonce aussi
        aux lecteurs d'écran (<code>role="alert"</code>).
      </p>
      <DemoBlock :code="fieldCode" stack>
        <BaseField
          label="Adresse e-mail"
          error="L'adresse doit contenir un @, ex. nom@domaine.fr"
          required
          style="max-width: 380px; width: 100%"
        >
          <BaseInput model-value="marie.dupont" />
        </BaseField>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Erreur de section</h2>
      <p>
        Une opération a échoué mais la page reste utilisable :
        <router-link class="doc-link" to="/docs/alert">Alert</router-link> en variante
        <code>danger</code>, placée en tête de la zone concernée.
      </p>
      <DemoBlock :code="sectionCode" stack />
    </section>

    <section class="doc-section">
      <h2>Erreur de chargement</h2>
      <p>Le contenu n'a pas pu être chargé : expliquer, et donner un moyen de réessayer.</p>
      <DemoBlock :code="loadCode" stack>
        <div class="error-block">
          <span class="error-block__icon"><BaseIcon name="warning" :size="24" /></span>
          <p class="error-block__title">Impossible de charger les projets</p>
          <p class="error-block__text">Vérifiez votre connexion, puis réessayez.</p>
          <BaseButton variant="outline">Réessayer</BaseButton>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Règles</h2>
      <ul class="doc-list">
        <li><strong>La portée définit le composant :</strong> champ → message de Field, section → Alert, page/chargement → bloc avec action de reprise.</li>
        <li><strong>Toujours une sortie :</strong> réessayer, corriger, contacter - une erreur sans action est une impasse.</li>
        <li>Rédaction : dire quoi corriger, pas de code d'erreur brut, pas de ton culpabilisant.</li>
        <li>Ne pas empiler les niveaux : une erreur de champ ne déclenche pas aussi une Alert de page.</li>
        <li>Les données déjà saisies ne se perdent jamais à cause d'une erreur.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import { BaseButton, BaseField, BaseIcon, BaseInput } from '@tommaniglier/design-system-lib/vue';

const fieldCode = `<BaseField
  label="Adresse e-mail"
  error="L'adresse doit contenir un @, ex. nom@domaine.fr"
  required
>
  <BaseInput v-model="email" />
</BaseField>`;

const sectionCode = `<BaseAlert variant="danger" title="L'enregistrement a échoué">
  Vos modifications sont conservées localement. Réessayez, ou contactez
  le support si l'erreur persiste.
</BaseAlert>`;

const loadCode = `<div class="error-block">
  <BaseIcon name="warning" :size="24" />
  <p>Impossible de charger les projets</p>
  <p>Vérifiez votre connexion, puis réessayez.</p>
  <BaseButton variant="outline" @click="retry">Réessayer</BaseButton>
</div>`;
</script>

<style scoped lang="scss">
.error-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 40px 24px;
  text-align: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.error-block__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #b3261e;
  background: rgba(179, 38, 30, 0.08);
  margin-bottom: 6px;
}

.error-block__title {
  font-weight: var(--weight-medium);
  margin: 0;
}

.error-block__text {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0 0 10px;
}
</style>
