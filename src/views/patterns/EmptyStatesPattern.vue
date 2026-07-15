<template>
  <DocPage
    eyebrow="Patterns"
    title="États vides"
    description="Quand il n'y a rien à afficher, l'écran doit expliquer pourquoi et proposer la prochaine action - jamais une zone blanche."
  >
    <section class="doc-section">
      <h2>Premier usage</h2>
      <p>La liste est vide parce que rien n'a encore été créé : l'état vide devient un point de départ.</p>
      <DemoBlock :code="firstUseCode" stack>
        <div class="empty">
          <span class="empty__icon"><BaseIcon name="folder" :size="28" /></span>
          <p class="empty__title">Aucun projet pour l'instant</p>
          <p class="empty__text">Créez votre premier projet pour organiser le travail de l'équipe.</p>
          <BaseButton variant="primary">Créer un projet</BaseButton>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Recherche sans résultat</h2>
      <p>Ici l'utilisateur a agi : l'état vide explique le lien avec sa requête et propose une sortie.</p>
      <DemoBlock :code="noResultCode" stack>
        <div class="empty empty--compact">
          <span class="empty__icon"><BaseIcon name="search" :size="24" /></span>
          <p class="empty__title">Aucun résultat pour « rapport-2024 »</p>
          <p class="empty__text">Vérifiez l'orthographe ou retirez des filtres.</p>
          <BaseButton variant="outline">Effacer les filtres</BaseButton>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Règles</h2>
      <ul class="doc-list">
        <li><strong>Trois éléments maximum :</strong> une icône sobre, un titre qui constate, une phrase qui oriente - puis l'action.</li>
        <li><strong>Un seul appel à l'action</strong> : <code>primary</code> pour un premier usage, <code>outline</code> pour annuler une recherche.</li>
        <li>Le titre constate (« Aucun projet »), le texte oriente (« Créez votre premier… ») - pas de ton d'excuse ni d'humour forcé.</li>
        <li>Ne pas confondre avec le chargement (<router-link class="doc-link" to="/docs/skeleton">Skeleton</router-link>) ni avec l'erreur (<router-link class="doc-link" to="/patterns/error-states">États d'erreur</router-link>) : trois états distincts, trois rendus distincts.</li>
        <li>L'état vide d'une table garde les en-têtes de colonnes visibles : le contexte reste lisible.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import { BaseButton, BaseIcon } from '@tom/design-system/vue';

const firstUseCode = `<div class="empty">
  <BaseIcon name="folder" :size="28" />
  <p class="empty__title">Aucun projet pour l'instant</p>
  <p class="empty__text">Créez votre premier projet pour organiser le travail.</p>
  <BaseButton variant="primary">Créer un projet</BaseButton>
</div>`;

const noResultCode = `<div class="empty">
  <BaseIcon name="search" :size="24" />
  <p class="empty__title">Aucun résultat pour « {{ query }} »</p>
  <p class="empty__text">Vérifiez l'orthographe ou retirez des filtres.</p>
  <BaseButton variant="outline">Effacer les filtres</BaseButton>
</div>`;
</script>

<style scoped lang="scss">
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 48px 24px;
  text-align: center;
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-lg);
}

.empty--compact {
  padding: 32px 24px;
}

.empty__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  color: var(--color-muted-foreground);
  background: var(--color-muted);
  margin-bottom: 6px;
}

.empty__title {
  font-weight: var(--weight-medium);
  font-size: var(--text-base);
  margin: 0;
}

.empty__text {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0 0 10px;
  max-width: 360px;
}
</style>
