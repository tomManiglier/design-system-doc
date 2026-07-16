<template>
  <DocPage
    eyebrow="Données"
    title="Carousel"
    description="Diaporama horizontal avec défilement fluide, flèches et points de navigation."
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <BaseCarousel>
          <div class="slide" style="background: var(--gradient-brand)">Dégradé signature</div>
          <div class="slide" style="background: var(--gradient-brand-cool)">Dégradé bleu</div>
          <div class="slide slide--muted">Contenu libre</div>
        </BaseCarousel>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Trois éléments visibles</h2>
      <p>La prop <code>per-view</code> affiche plusieurs éléments simultanément.</p>
      <DemoBlock :code="multiCode" stack>
        <BaseCarousel :per-view="3">
          <div class="mini" v-for="n in 6" :key="n">
            <div class="mini__card">{{ n }}</div>
          </div>
        </BaseCarousel>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>API</h2>
      <PropsTable :rows="rows" />
    </section>
    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Première slide visible, points de navigation sous le cadre.</td></tr>
            <tr><td><code>selected</code></td><td>Point actif coloré en <code>--color-brand-primary</code>.</td></tr>
            <tr><td><code>disabled</code></td><td>Flèche précédente sur la première slide, suivante sur la dernière : désactivées, pas masquées.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Le défilement est manuel : pas de rotation automatique. C'est délibéré - un carrousel qui défile seul fait perdre le contenu à la lecture.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Clavier</strong> - les flèches et les points sont des <code>&lt;button&gt;</code> : atteignables au <code>Tab</code>, activables à <code>Entrée</code>.</li>
        <li><strong>Libellés</strong> - flèches et points portent un <code>aria-label</code> (« Slide suivante », « Aller à la slide 3 ») ; les icônes sont <code>aria-hidden</code>.</li>
        <li><strong>Pas d'auto-défilement</strong> - aucun mouvement non demandé : rien à mettre en pause.</li>
        <li><strong>Contenu masqué</strong> - les slides hors champ restent dans le DOM : leur contenu peut être atteint au clavier. Ne pas y mettre d'information critique.</li>
        <li><strong>Alternative</strong> - pour du contenu important, une grille ou une liste vaut mieux : un carrousel cache par construction.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import PropsTable from '../../components/docs/PropsTable.vue';
import type { PropRow } from '../../components/docs/types';
import { BaseCarousel } from '@tommaniglier/design-system-lib/vue';

const code = `<BaseCarousel>
  <div class="slide">Diapositive 1</div>
  <div class="slide">Diapositive 2</div>
  <div class="slide">Diapositive 3</div>
</BaseCarousel>`;

const multiCode = `<BaseCarousel :per-view="3">
  <div v-for="n in 6" :key="n" class="slide">{{ n }}</div>
</BaseCarousel>`;

const rows: PropRow[] = [
  { name: 'perView', type: 'number', default: '1', description: "Nombre d'éléments visibles simultanément." },
  { name: 'default', type: 'slot', default: '-', description: 'Chaque enfant direct devient une diapositive.' },
];
</script>

<style scoped lang="scss">
.slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: #ffffff;
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: var(--text-xl);
}

.slide--muted {
  background: var(--color-muted);
  color: var(--color-foreground);
}

.mini {
  padding: 0 6px;
}

.mini__card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: var(--text-xl);
  color: var(--color-foreground);
  background: var(--color-muted);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}
</style>
