<template>
  <DocPage
    eyebrow="Fondations"
    title="Espacement"
    description="Une échelle en base 4 et trois registres de densité pour composer des interfaces régulières sans valeurs arbitraires."
  >
    <section class="doc-section">
      <h2>Échelle</h2>
      <p>
        Tous les espacements sont des multiples de 4px, sous forme de tokens
        <code>--space-*</code>. On ne sort jamais de cette échelle pour une marge ou un padding.
      </p>
      <div class="scale">
        <div v-for="step in scale" :key="step.token" class="scale__row">
          <code class="scale__token">{{ step.token }}</code>
          <span class="scale__px">{{ step.px }}</span>
          <span class="scale__bar" :style="{ width: step.px }" />
          <span class="scale__usage">{{ step.usage }}</span>
        </div>
      </div>
    </section>

    <section class="doc-section">
      <h2>Trois niveaux</h2>
      <ul class="doc-list">
        <li>
          <strong>Compact</strong> (<code>--space-1</code> à <code>--space-3</code>) - à l'intérieur
          d'un composant : gap icône/texte d'un bouton, padding d'un badge, label collé à son champ.
        </li>
        <li>
          <strong>Standard</strong> (<code>--space-4</code> à <code>--space-6</code>) - entre
          éléments d'une même section : champs d'un formulaire, cards d'une grille.
        </li>
        <li>
          <strong>Roomy</strong> (<code>--space-8</code> à <code>--space-16</code>) - entre
          sections : entre deux blocs de page, autour d'une zone héros.
        </li>
      </ul>
      <p>
        La règle : plus deux éléments sont liés, plus ils sont proches. Un label colle à son champ
        (<code>--space-2</code>), mais deux champs différents sont plus espacés (<code>--space-4</code>).
      </p>
    </section>

    <section class="doc-section">
      <h2>Cas d'usage</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Contexte</th><th>Token recommandé</th></tr>
          </thead>
          <tbody>
            <tr><td>Gap entre une icône et son texte</td><td><code>--space-2</code> (8px)</td></tr>
            <tr><td>Padding horizontal d'un bouton</td><td><code>--space-4</code> (16px)</td></tr>
            <tr><td>Gap entre les champs d'un formulaire</td><td><code>--space-4</code> à <code>--space-5</code></td></tr>
            <tr><td>Padding interne d'une card</td><td><code>--space-5</code> (20px)</td></tr>
            <tr><td>Padding latéral de page</td><td><code>--space-6</code> (24px)</td></tr>
            <tr><td>Espace entre deux sections de page</td><td><code>--space-12</code> (48px)</td></tr>
            <tr><td>Marge autour d'un héros</td><td><code>--space-16</code> (64px)</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Voir aussi <router-link class="doc-link" to="/docs/grid">Grille &amp; layout</router-link>
        pour la structure des pages.
      </p>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';

const scale = [
  { token: '--space-1', px: '4px', usage: 'Compact : gap icône/texte serré' },
  { token: '--space-2', px: '8px', usage: 'Compact : éléments très liés' },
  { token: '--space-3', px: '12px', usage: 'Compact : padding interne des champs' },
  { token: '--space-4', px: '16px', usage: 'Standard : gap par défaut' },
  { token: '--space-5', px: '20px', usage: 'Standard : padding des cards' },
  { token: '--space-6', px: '24px', usage: 'Standard : padding latéral de page' },
  { token: '--space-8', px: '32px', usage: 'Roomy : entre blocs' },
  { token: '--space-10', px: '40px', usage: 'Roomy : sous les en-têtes' },
  { token: '--space-12', px: '48px', usage: 'Roomy : entre sections' },
  { token: '--space-16', px: '64px', usage: 'Roomy : zones héros' },
];
</script>

<style scoped lang="scss">
.scale {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.scale__row {
  display: grid;
  grid-template-columns: 110px 44px 80px 1fr;
  align-items: center;
  gap: 14px;
  font-size: var(--text-sm);
}

.scale__token {
  font-family: var(--font-mono);
  font-size: 12px;
}

.scale__px {
  color: var(--color-muted-foreground);
  font-size: var(--text-xs);
}

.scale__bar {
  height: 14px;
  border-radius: 3px;
  background: var(--color-accent);
  opacity: 0.85;
}

.scale__usage {
  color: var(--color-muted-foreground);
  font-size: var(--text-xs);
}

@media (max-width: 640px) {
  .scale__row {
    grid-template-columns: 90px 40px 1fr;
  }

  .scale__usage {
    display: none;
  }
}
</style>
