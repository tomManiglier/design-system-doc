<template>
  <div class="hero-container">
    <h1>The foundations for your Design System</h1>
    <p>A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own.</p>
  </div>

  <section class="card-grid">
    <!-- Colonne 1 -->
    <div class="card-grid__col">
      <CardHome label="Buttons">
        <div class="stack">
          <BaseButton variant="primary">Get started</BaseButton>
          <BaseButton variant="secondary">Secondary</BaseButton>
          <BaseButton variant="outline">Outline</BaseButton>
        </div>
      </CardHome>

      <CardHome label="Couleurs">
        <div class="swatches">
          <button
            v-for="c in homeColors"
            :key="c.hex"
            type="button"
            class="swatch"
            :style="{ background: c.hex }"
            :title="`${c.name} - copier ${c.hex}`"
            @click="copyHex(c.hex)"
          >
            <span class="swatch__overlay" :class="{ 'swatch__overlay--dark-icon': c.light }">
              <BaseIcon :name="copiedHex === c.hex ? 'check' : 'copy'" :size="14" />
            </span>
          </button>
        </div>
      </CardHome>

      <CardHome label="Avatar">
        <div class="avatars">
          <BaseAvatar initials="NS" />
          <BaseAvatar initials="TM" />
          <BaseAvatar initials="LR" />
        </div>
      </CardHome>

      <CardHome label="Icônes">
        <div class="icons">
          <BaseIcon name="search" />
          <BaseIcon name="bell" />
          <BaseIcon name="user" />
          <BaseIcon name="mail" />
          <BaseIcon name="heart" />
          <BaseIcon name="check" />
        </div>
      </CardHome>
    </div>

    <!-- Colonne 2 -->
    <div class="card-grid__col">
      <CardHome label="Élément graphique">
        <div class="circle-demo">
          <span class="gradient-circle" />
          <p class="caption">Cercle dégradé - élément signature</p>
        </div>
      </CardHome>

      <CardHome label="Switch">
        <div class="rows">
          <div class="row">
            <span>Notifications</span>
            <BaseSwitch v-model="notifications" />
          </div>
          <div class="row">
            <span>Newsletter</span>
            <BaseSwitch v-model="newsletter" />
          </div>
        </div>
      </CardHome>

      <CardHome label="Progress">
        <div class="stack">
          <BaseProgress :value="72" />
          <p class="caption">72% complété</p>
        </div>
      </CardHome>

      <CardHome label="Skeleton">
        <div class="stack">
          <BaseSkeleton width="60%" height="14px" />
          <BaseSkeleton width="100%" height="14px" />
          <BaseSkeleton width="80%" height="14px" />
        </div>
      </CardHome>
    </div>

    <!-- Colonne 3 -->
    <div class="card-grid__col">
      <CardHome label="Typographie">
        <div class="type-specimen">
          <p class="type-specimen__title">Inter</p>
          <p class="type-specimen__meta">Titres - neutre, pensée pour les interfaces</p>
          <p class="type-specimen__body">Roboto</p>
          <p class="type-specimen__meta">Corps de texte - sobre et lisible</p>
        </div>
      </CardHome>

      <CardHome label="Badges">
        <div class="badges">
          <BaseBadge variant="primary">Stable</BaseBadge>
          <BaseBadge variant="secondary">Beta</BaseBadge>
          <BaseBadge variant="outline">v0.1</BaseBadge>
        </div>
      </CardHome>

      <CardHome label="Tabs">
        <BaseTabs v-model="activeTab" :tabs="tabItems" />
      </CardHome>

      <CardHome label="Breadcrumb">
        <BaseBreadcrumb :items="breadcrumbItems" />
      </CardHome>
    </div>

    <!-- Colonne 4 -->
    <div class="card-grid__col">
      <CardHome label="Formulaire">
        <BaseField label="Nom du projet" hint="Ce nom sera visible par votre équipe.">
          <BaseInput v-model="projectName" placeholder="ex. Mon projet" />
        </BaseField>
        <BaseButton variant="primary">Créer</BaseButton>
      </CardHome>

      <CardHome label="Dégradés">
        <div class="stack">
          <span class="gradient-block" style="background: var(--gradient-brand)" />
          <span class="gradient-block" style="background: var(--gradient-brand-cool)" />
        </div>
      </CardHome>

      <CardHome label="Alert">
        <BaseAlert variant="info" title="Nouveauté">
          Le design system passe en version 0.1.
        </BaseAlert>
      </CardHome>

      <CardHome label="Spinner">
        <div class="spinner-demo">
          <BaseSpinner :size="28" />
          <p class="caption">Chargement en cours</p>
        </div>
      </CardHome>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CardHome from '../components/CardHome.vue';
import {
  BaseButton,
  BaseBadge,
  BaseInput,
  BaseField,
  BaseSwitch,
  BaseAvatar,
  BaseProgress,
  BaseTabs,
  BaseAlert,
  BaseIcon,
  BaseSkeleton,
  BaseBreadcrumb,
  BaseSpinner,
} from '@tommaniglier/design-system-lib/vue';
import type { TabItem, BreadcrumbItem } from '@tommaniglier/design-system-lib/vue';

const notifications = ref(true);
const newsletter = ref(false);
const projectName = ref('');

const activeTab = ref('overview');
const tabItems: TabItem[] = [
  { label: 'Aperçu', value: 'overview' },
  { label: 'Détails', value: 'details' },
];

const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Accueil', to: '/' },
  { label: 'Composants', to: '/docs/introduction' },
  { label: 'Breadcrumb' },
];

const homeColors = [
  { name: 'Ciel', hex: '#a7e3dd', light: true },
  { name: 'Rose', hex: '#fadadd', light: true },
  { name: 'Nuit', hex: '#14213d', light: false },
  { name: 'Anthracite', hex: '#333333', light: false },
  { name: 'Orange', hex: '#ff7e5f', light: false },
  { name: 'Pêche', hex: '#ffdab9', light: true },
];

const copiedHex = ref<string | null>(null);

function copyHex(hex: string) {
  navigator.clipboard.writeText(hex);
  copiedHex.value = hex;
  setTimeout(() => {
    if (copiedHex.value === hex) copiedHex.value = null;
  }, 1200);
}
</script>

<style scoped lang="scss">
.hero-container {
  margin: 80px 24px;
  animation: fade-up 0.6s ease both;
}

// Apparition en cascade des cards (colonne puis ligne)
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-grid__col > * {
  animation: fade-up 0.5s ease both;
}

@for $col from 1 through 4 {
  @for $row from 1 through 4 {
    .card-grid__col:nth-child(#{$col}) > *:nth-child(#{$row}) {
      animation-delay: #{0.1 + 0.05 * ($col - 1) + 0.08 * ($row - 1)}s;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-container,
  .card-grid__col > * {
    animation: none;
  }
}

h1 {
  text-align: center;
}

p {
  text-align: center;
  max-width: 56rem;
  margin: 22px auto;
  width: 100%;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 0 24px 80px;
}

.card-grid__col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 900px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}

// --- Helpers de démonstration ---
.stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: stretch;
}

.swatches {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
}

.swatch {
  position: relative;
  aspect-ratio: 1;
  padding: 0;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(74, 74, 73, 0.08);
  cursor: pointer;
  overflow: hidden;
}

.swatch__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: rgba(17, 17, 17, 0.35);
  opacity: 0;
  transition: opacity 0.15s ease;
}

.swatch__overlay--dark-icon {
  color: #111111;
  background: rgba(255, 255, 255, 0.35);
}

.swatch:hover .swatch__overlay,
.swatch:focus-visible .swatch__overlay {
  opacity: 1;
}

.avatars {
  display: flex;
  gap: 10px;
}

.icons {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  color: var(--color-foreground);
}

.spinner-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}

.circle-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
}

.gradient-circle {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -50%;
    background: var(--gradient-brand);
  }

  // Au survol : même rotation que les avatars
  &:hover::before {
    animation: circle-spin 6s linear infinite;
  }
}

@keyframes circle-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.caption {
  font-size: var(--text-xs);
  color: var(--color-muted-foreground);
  text-align: center;
  margin: 0;
}

.rows {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--text-sm);
}

.type-specimen__title {
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: 2rem;
  margin: 0;
  text-align: left;
}

.type-specimen__body {
  font-family: var(--font-body);
  font-weight: var(--weight-medium);
  font-size: 1.75rem;
  margin: 12px 0 0;
  text-align: left;
}

.type-specimen__meta {
  font-size: var(--text-xs);
  color: var(--color-muted-foreground);
  margin: 4px 0 0;
  text-align: left;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.gradient-block {
  display: block;
  height: 72px;
  border-radius: var(--radius-md);
}
</style>
