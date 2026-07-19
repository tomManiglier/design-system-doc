<template>
  <DocPage
    eyebrow="Patterns"
    title="Tableau de bord"
    description="Assembler Card, Chart et Meter en une vue d'ensemble : le chiffre d'abord, le contexte ensuite."
  >
    <section class="doc-section">
      <h2>Exemple complet</h2>
      <DemoBlock :code="dashboardCode" stack>
        <div class="dashboard">
          <div class="dashboard__stats">
            <BaseCard v-for="stat in stats" :key="stat.label" class="dashboard__stat">
              <div class="dashboard__stat-head">
                <span class="dashboard__stat-label">{{ stat.label }}</span>
                <BaseBadge :variant="stat.trend >= 0 ? 'primary' : 'outline'">
                  {{ stat.trend >= 0 ? '+' : '' }}{{ stat.trend }} %
                </BaseBadge>
              </div>
              <p class="dashboard__stat-value">{{ stat.value }}</p>
            </BaseCard>
          </div>

          <div class="dashboard__grid">
            <BaseCard title="Adoption hebdomadaire" class="dashboard__chart">
              <BaseChart
                type="line"
                :data="[12, 28, 22, 45, 38, 62, 58]"
                :labels="['L', 'M', 'M', 'J', 'V', 'S', 'D']"
                aria-label="Adoption des composants par semaine"
              />
            </BaseCard>
            <BaseCard title="Capacité" class="dashboard__meters">
              <BaseMeter label="Stockage utilisé" :value="64" />
              <BaseMeter
                label="Quota API"
                :value="380"
                :max="500"
                :format="(v) => `${v} / 500 appels`"
              />
            </BaseCard>
          </div>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Décisions UX</h2>
      <ul class="doc-list">
        <li><strong>Le chiffre d'abord, le contexte ensuite</strong> : chaque carte de statistique met la valeur en avant, la tendance à côté en <router-link class="doc-link" to="/docs/badge">Badge</router-link> - jamais l'inverse.</li>
        <li><strong>Le signe (+/-) porte l'information de tendance</strong>, pas la seule teinte du badge : la palette du design system reste volontairement sobre, sans code vert/rouge.</li>
        <li><router-link class="doc-link" to="/docs/meter">Meter</router-link> mesure une quantité dans un intervalle connu (stockage, quota) ; pour l'avancement d'une tâche, voir <router-link class="doc-link" to="/docs/progress">Progress</router-link> plutôt.</li>
        <li>Chaque <router-link class="doc-link" to="/docs/chart">Chart</router-link> porte un <code>aria-label</code> qui décrit ce qu'il montre, pas sa forme.</li>
        <li><strong>Une carte, un sujet</strong> : ne pas empiler plusieurs graphiques sans rapport dans la même Card.</li>
        <li>La grille de statistiques passe de 4 colonnes à 2 puis 1 selon la largeur - jamais de défilement horizontal forcé sur les chiffres clés.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import {
  BaseBadge,
  BaseCard,
  BaseChart,
  BaseMeter,
} from '@tommaniglier/design-system-lib/vue';

const stats = [
  { label: 'Projets actifs', value: '24', trend: 8 },
  { label: 'Utilisateurs', value: '1 284', trend: 3 },
  { label: 'Tickets ouverts', value: '12', trend: -5 },
  { label: 'Temps de réponse', value: '2,4 h', trend: -12 },
];

const dashboardCode = `<div class="stats">
  <BaseCard v-for="stat in stats" :key="stat.label">
    <span>{{ stat.label }}</span>
    <BaseBadge :variant="stat.trend >= 0 ? 'primary' : 'outline'">
      {{ stat.trend >= 0 ? '+' : '' }}{{ stat.trend }} %
    </BaseBadge>
    <p>{{ stat.value }}</p>
  </BaseCard>
</div>

<BaseCard title="Adoption hebdomadaire">
  <BaseChart type="line" :data="[...]" :labels="[...]" aria-label="Adoption des composants par semaine" />
</BaseCard>

<BaseCard title="Capacité">
  <BaseMeter label="Stockage utilisé" :value="64" />
  <BaseMeter label="Quota API" :value="380" :max="500" />
</BaseCard>`;
</script>

<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.dashboard__stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

// Les libellés n'ont pas tous la même longueur ("Utilisateurs" tient sur une
// ligne, "Temps de réponse" peut en prendre trois) : sans ancrer la valeur en
// bas de carte, les 4 chiffres ne s'alignent pas sur une même ligne de base.
.dashboard__stat {
  :deep(.card__body) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
}

.dashboard__stat-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.dashboard__stat-label {
  font-size: var(--text-xs);
  color: var(--color-muted-foreground);
}

.dashboard__stat-value {
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: var(--text-xl);
  margin: 10px 0 0;
}

.dashboard__grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 14px;
}

.dashboard__meters {
  display: flex;
  flex-direction: column;

  :deep(.card__body) > * + * {
    margin-top: 20px;
  }
}

@media (max-width: 640px) {
  .dashboard__stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .dashboard__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 400px) {
  .dashboard__stats {
    grid-template-columns: 1fr;
  }
}
</style>
