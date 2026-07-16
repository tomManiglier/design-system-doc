<template>
  <DocPage
    eyebrow="Affichage"
    title="Card"
    description="Conteneur pour regrouper un contenu et ses actions, avec en-tête et pied optionnels."
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code">
        <div class="w">
          <BaseCard title="Nouveau projet" description="Configurez votre espace de travail.">
            <p class="body">Un espace centralisé pour vos composants et vos tokens.</p>
            <template #footer>
              <BaseButton variant="primary">Créer</BaseButton>
              <BaseButton variant="outline">Annuler</BaseButton>
            </template>
          </BaseCard>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Pro Plan</h2>
      <p>Carte de tarification composée avec les primitives du design system.</p>
      <DemoBlock :code="proCode">
        <div class="w">
          <BaseCard>
            <template #header>
              <div class="pro-head">
                <h3 class="pro-title">Pro Plan</h3>
                <BaseBadge variant="secondary">Populaire</BaseBadge>
              </div>
              <p class="pro-desc">Pour les équipes qui veulent aller plus loin.</p>
            </template>
            <div class="pro-price">
              <span class="pro-price__amount">19 €</span>
              <span class="pro-price__period">/ mois par utilisateur</span>
            </div>
            <ul class="pro-features">
              <li v-for="feature in features" :key="feature" class="pro-feature">
                <BaseIcon name="check" :size="15" class="pro-feature__icon" />
                {{ feature }}
              </li>
            </ul>
            <template #footer>
              <BaseButton variant="primary" class="pro-cta">Commencer l'essai gratuit</BaseButton>
            </template>
          </BaseCard>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Props &amp; slots</h2>
      <PropsTable :rows="rows" />
      <p class="note">
        Slots : <code>default</code> (corps), <code>header</code> (remplace le titre),
        <code>footer</code> (actions).
      </p>
    </section>
    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Fond <code>--color-surface</code>, bordure <code>--color-border</code>, rayon <code>--radius-lg</code>.</td></tr>
            <tr><td><code>hover</code></td><td>Aucun par défaut : la card n'est pas interactive. Si elle l'est, ajouter <code>--shadow-sm</code> au survol.</td></tr>
          </tbody>
        </table>
      </div>
      <p>La card structure, elle n'élève pas : bordure seule dans le flux de la page (voir <router-link class="doc-link" to="/docs/borders">Bordures &amp; ombres</router-link>).</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Pas de conteneur cliquable</strong> - ne pas rendre toute la card cliquable en enveloppant dans un lien : les éléments interactifs internes deviennent inatteignables. Un titre-lien ou un bouton explicite convient mieux.</li>
        <li><strong>Titres</strong> - l'en-tête de card utilise un niveau de titre cohérent avec la page (souvent <code>h3</code>), pas un simple texte en gras.</li>
        <li><strong>Ordre de lecture</strong> - l'ordre DOM (en-tête, contenu, pied) est l'ordre de lecture : ne pas le réorganiser en CSS.</li>
        <li><strong>Regroupement</strong> - une card regroupe un contenu cohérent ; elle n'est pas un habillage décoratif.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import PropsTable from '../../components/docs/PropsTable.vue';
import type { PropRow } from '../../components/docs/types';
import { BaseCard, BaseButton, BaseBadge, BaseIcon } from '@tommaniglier/design-system-lib/vue';

const features = [
  'Projets illimités',
  'Collaboration en temps réel',
  'Historique des versions',
  'Support prioritaire',
];

const proCode = `<BaseCard>
  <template #header>
    <h3>Pro Plan</h3>
    <BaseBadge variant="secondary">Populaire</BaseBadge>
  </template>
  <div class="price">19 € <span>/ mois par utilisateur</span></div>
  <ul>
    <li><BaseIcon name="check" /> Projets illimités</li>
    <li><BaseIcon name="check" /> Collaboration en temps réel</li>
  </ul>
  <template #footer>
    <BaseButton variant="primary">Commencer l'essai gratuit</BaseButton>
  </template>
</BaseCard>`;

const code = `<BaseCard title="Nouveau projet" description="Configurez votre espace de travail.">
  <p>Un espace centralisé pour vos composants et vos tokens.</p>
  <template #footer>
    <BaseButton variant="primary">Créer</BaseButton>
    <BaseButton variant="outline">Annuler</BaseButton>
  </template>
</BaseCard>`;

const rows: PropRow[] = [
  { name: 'title', type: 'string', default: '-', description: "Titre de l'en-tête." },
  { name: 'description', type: 'string', default: '-', description: "Sous-titre de l'en-tête." },
];
</script>

<style scoped lang="scss">
.w {
  width: 340px;
  max-width: 100%;
}
.body {
  font-size: var(--text-sm);
  line-height: 1.6;
  color: var(--color-muted-foreground);
  margin: 0;
}
.note {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 16px 0 0;
}

.pro-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.pro-title {
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: var(--text-lg);
  margin: 0;
}

.pro-desc {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 6px 0 0;
}

.pro-price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 16px;
}

.pro-price__amount {
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: var(--text-2xl);
  letter-spacing: -0.02em;
}

.pro-price__period {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
}

.pro-features {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pro-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--text-sm);
}

.pro-feature__icon {
  color: var(--color-brand-primary);
}

.pro-cta {
  width: 100%;
}
</style>
