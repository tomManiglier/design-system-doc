<template>
  <div class="lab">
    <header class="lab__hero" v-gradient-flow="{ duration: 12 }">
      <div class="lab__hero-inner" v-reveal="{ stagger: 0.1, y: 16 }">
        <p class="lab__eyebrow">Motion Lab</p>
        <h1 class="lab__title">Le mouvement,<br />orchestré</h1>
        <p class="lab__lead">
          Les durées et courbes de la page Motion, appliquées avec GSAP là où le CSS seul ne
          suffit pas. Toujours au service d'un rôle — jamais décoratif pour décorer.
        </p>
        <ul class="lab__hero-tokens">
          <li class="lab__hero-token"><code>--duration-slower</code> · 400ms</li>
          <li class="lab__hero-token"><code>--ease-out-expo</code></li>
          <li class="lab__hero-token">GSAP en peer optionnelle</li>
        </ul>
      </div>
    </header>

    <div class="lab__body">
      <BaseAlert variant="info" title="Vos préférences sont respectées">
        Toutes ces animations se désactivent d'elles-mêmes si votre système est réglé sur
        « animations réduites » : le contenu s'affiche alors directement dans son état final.
      </BaseAlert>

      <!-- Apparition au scroll -->
      <section class="lab-section">
        <div class="lab-section__head">
          <span class="lab-section__role">Orientation</span>
          <h2>Apparition au scroll</h2>
          <p>Chaque carte monte et se révèle en entrant dans le viewport, en cascade. Défilez pour rejouer.</p>
        </div>
        <div class="reveal-grid" v-reveal="{ stagger: 0.08, y: 18 }">
          <div v-for="card in revealCards" :key="card.title" class="reveal-card">
            <BaseIcon :name="card.icon" :size="20" />
            <p class="reveal-card__title">{{ card.title }}</p>
            <p class="reveal-card__desc">{{ card.desc }}</p>
          </div>
        </div>
        <pre class="lab-code"><code>&lt;section v-reveal="{ stagger: 0.08, y: 18 }"&gt;
  &lt;article v-for="…"&gt;…&lt;/article&gt;
&lt;/section&gt;</code></pre>
      </section>

      <!-- Compteurs -->
      <section class="lab-section">
        <div class="lab-section__head">
          <span class="lab-section__role">Feedback</span>
          <h2>Compteurs</h2>
          <p>Une donnée chiffrée devient tangible quand elle s'incrémente à l'entrée à l'écran.</p>
        </div>
        <div class="stats">
          <div v-for="stat in stats" :key="stat.label" class="stat">
            <span class="stat__num" v-count-up="stat.count" />
            <span class="stat__label">{{ stat.label }}</span>
          </div>
        </div>
        <pre class="lab-code"><code>&lt;span v-count-up="{ to: 40, suffix: ' composants' }" /&gt;</code></pre>
      </section>

      <!-- FLIP -->
      <section class="lab-section">
        <div class="lab-section__head">
          <span class="lab-section__role">Continuité</span>
          <h2>Réordonner une liste (FLIP)</h2>
          <p>Les éléments glissent de leur ancienne à leur nouvelle position — l'œil ne perd jamais le fil.</p>
        </div>
        <div class="lab-controls">
          <BaseButton variant="outline" @click="sortByName">Trier par nom</BaseButton>
          <BaseButton variant="outline" @click="sortByCategory">Grouper par famille</BaseButton>
          <BaseButton variant="brand" @click="shuffle">Mélanger</BaseButton>
        </div>
        <div ref="flipContainer" class="chip-grid">
          <span v-for="item in items" :key="item.name" class="chip" :class="`chip--${item.cat}`">
            {{ item.name }}
          </span>
        </div>
        <pre class="lab-code"><code>const { capture, play } = useFlip(() =&gt; container.value.children);
function shuffle() {
  capture();
  items.value = shuffled(items.value);
  play();            // anime vers le nouvel ordre
}</code></pre>
      </section>

      <!-- Flux du dégradé -->
      <section class="lab-section">
        <div class="lab-section__head">
          <span class="lab-section__role">Marque</span>
          <h2>Flux du dégradé</h2>
          <p>Le dégradé signature « ciel rose » dérive comme un lever de soleil. Expression de marque, réservée aux surfaces héros.</p>
        </div>
        <div class="gradient-band" v-gradient-flow="{ paused: bandPaused, duration: 10 }" />
        <div class="lab-controls">
          <BaseButton variant="outline" @click="bandPaused = !bandPaused">
            {{ bandPaused ? 'Reprendre' : 'Mettre en pause' }}
          </BaseButton>
        </div>
        <pre class="lab-code"><code>&lt;div class="hero" v-gradient-flow="{ duration: 10 }" /&gt;</code></pre>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BaseAlert, BaseButton, BaseIcon } from '@tommaniglier/design-system-lib/vue';
import type { IconName } from '@tommaniglier/design-system-lib/vue';
import { vReveal, vCountUp, vGradientFlow, useFlip } from '@tommaniglier/design-system-lib/motion';

const revealCards: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'filter', title: 'Orientation', desc: "Montrer d'où arrive le contenu." },
  { icon: 'heart', title: 'Discret', desc: 'Fondu + 18px de montée, pas plus.' },
  { icon: 'check', title: 'Une fois', desc: 'Révélé une seule fois, puis oublié.' },
  { icon: 'chart', title: 'Cascade', desc: 'Un léger décalage entre voisins.' },
  { icon: 'settings', title: 'Tokens', desc: 'Durée slower, courbe expo.out.' },
  { icon: 'user', title: 'Accessible', desc: 'Neutralisé si mouvement réduit.' },
];

const stats = [
  { count: { to: 40 }, label: "composants prêts à l'emploi" },
  { count: { to: 0 }, label: 'dépendance imposée aux composants' },
  { count: { to: 1 }, label: 'fichier CSS (tokens + reset)' },
  { count: { to: 100, suffix: '%' }, label: 'du reduced-motion respecté' },
];

interface ChipItem {
  name: string;
  cat: 'form' | 'display' | 'nav';
}

const initialItems: ChipItem[] = [
  { name: 'Button', cat: 'form' },
  { name: 'Input', cat: 'form' },
  { name: 'Select', cat: 'form' },
  { name: 'Switch', cat: 'form' },
  { name: 'Badge', cat: 'display' },
  { name: 'Avatar', cat: 'display' },
  { name: 'Card', cat: 'display' },
  { name: 'Progress', cat: 'display' },
  { name: 'Tabs', cat: 'nav' },
  { name: 'Menu', cat: 'nav' },
  { name: 'Breadcrumb', cat: 'nav' },
  { name: 'Pagination', cat: 'nav' },
];

const items = ref<ChipItem[]>([...initialItems]);
const flipContainer = ref<HTMLElement | null>(null);
const { capture, play } = useFlip(() => flipContainer.value?.children ?? []);

function reorder(mutator: (list: ChipItem[]) => ChipItem[]) {
  capture();
  items.value = mutator([...items.value]);
  play();
}

function sortByName() {
  reorder((list) => list.sort((a, b) => a.name.localeCompare(b.name)));
}

function sortByCategory() {
  const order: ChipItem['cat'][] = ['form', 'display', 'nav'];
  reorder((list) =>
    list.sort((a, b) => order.indexOf(a.cat) - order.indexOf(b.cat) || a.name.localeCompare(b.name)),
  );
}

function shuffle() {
  reorder((list) => list.sort(() => Math.random() - 0.5));
}

const bandPaused = ref(false);
</script>

<style scoped lang="scss">
.lab__hero {
  background: var(--gradient-brand);
  padding: 96px 24px;
  text-align: center;
}

.lab__hero-inner {
  max-width: 46rem;
  margin: 0 auto;
}

.lab__eyebrow {
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1a1a1a;
  opacity: 0.7;
  margin: 0 0 8px;
}

.lab__title {
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  margin: 0;
}

.lab__lead {
  font-size: var(--text-base);
  line-height: 1.6;
  color: #1a1a1a;
  opacity: 0.85;
  max-width: 34rem;
  margin: 20px auto 0;
}

.lab__hero-tokens {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
}

.lab__hero-token {
  padding: 7px 14px;
  font-family: var(--font-mono, monospace);
  font-size: var(--text-xs);
  color: #1a1a1a;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(26, 26, 26, 0.15);
  border-radius: 999px;
  backdrop-filter: blur(2px);

  code {
    font-family: inherit;
    font-weight: var(--weight-medium);
  }
}

.lab__body {
  max-width: 64rem;
  margin: 0 auto;
  padding: 48px 24px 96px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  min-width: 0;
}

// Les enfants d'un flex/grid ont min-width:auto : sans ça, un bloc de code à
// ligne longue étire la colonne et déborde le viewport au lieu de scroller.
.lab-section,
.stat,
.reveal-card {
  min-width: 0;
}

.lab-code {
  max-width: 100%;
}

.lab-section__head {
  margin-bottom: 24px;
}

.lab-section__role {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 8px;
}

.lab-section h2 {
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: var(--text-xl, 24px);
  margin: 0 0 6px;
}

.lab-section__head p {
  color: var(--color-muted-foreground);
  margin: 0;
  max-width: 48rem;
}

// Reveal
.reveal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.reveal-card {
  padding: 20px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-accent);
}

.reveal-card__title {
  font-weight: var(--weight-bold);
  font-size: var(--text-sm);
  color: var(--color-foreground);
  margin: 12px 0 4px;
}

.reveal-card__desc {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}

// Compteurs
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.stat {
  padding: 24px 20px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  text-align: center;
}

.stat__num {
  display: block;
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-variant-numeric: tabular-nums;
  background: var(--gradient-brand);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.stat__label {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
}

// FLIP
.lab-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.chip-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  padding: 8px 14px;
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  border-radius: 999px;
  border: 1px solid transparent;
}

.chip--form {
  background: color-mix(in srgb, var(--color-cyan) 30%, transparent);
  border-color: color-mix(in srgb, var(--color-cyan) 55%, transparent);
}

.chip--display {
  background: color-mix(in srgb, var(--color-peach) 45%, transparent);
  border-color: color-mix(in srgb, var(--color-peach) 70%, transparent);
}

.chip--nav {
  background: color-mix(in srgb, var(--color-brand-primary) 55%, transparent);
  border-color: color-mix(in srgb, var(--color-brand-primary) 80%, transparent);
}

// Bande dégradé
.gradient-band {
  height: 160px;
  border-radius: var(--radius-lg);
  background: var(--gradient-brand);
  margin-bottom: 20px;
}

// Code
.lab-code {
  margin-top: 20px;
  padding: 16px 18px;
  background: var(--color-muted);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: var(--font-mono, monospace);
  font-size: var(--text-sm);
  line-height: 1.6;
  overflow-x: auto;
  color: var(--color-foreground);
}

@media (max-width: 720px) {
  .reveal-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .reveal-grid {
    grid-template-columns: 1fr;
  }
}
</style>
