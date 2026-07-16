<template>
  <DocPage
    eyebrow="Affichage"
    title="Separator"
    description="Trait fin pour séparer visuellement des groupes de contenu, en horizontal ou vertical."
  >
    <section class="doc-section">
      <h2>Horizontal</h2>
      <DemoBlock :code="hCode" stack>
        <div class="block">
          <span>Section A</span>
          <BaseSeparator />
          <span>Section B</span>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Vertical</h2>
      <DemoBlock :code="vCode">
        <span>Accueil</span>
        <BaseSeparator orientation="vertical" />
        <span>Docs</span>
        <BaseSeparator orientation="vertical" />
        <span>Composants</span>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <p>Élément statique : un trait de 1px en <code>--color-border</code>, horizontal ou vertical selon <code>orientation</code>. Aucun état, aucune interaction.</p>
      <p>Le séparateur vertical prend la hauteur de son conteneur : il a besoin d'un parent en <code>flex</code> avec une hauteur définie.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Rôle</strong> - <code>role="separator"</code> : annoncé comme une séparation, pas ignoré.</li>
        <li><strong>Séparateur décoratif</strong> - s'il ne fait que décorer, préférer de l'espacement : une séparation annoncée sans raison ajoute du bruit.</li>
        <li><strong>Pas de structure</strong> - le séparateur ne remplace pas des titres : il n'organise pas le document pour un lecteur d'écran.</li>
        <li><strong>Sobriété</strong> - souvent, <code>--space-6</code> d'espacement sépare mieux qu'un trait (voir <router-link class="doc-link" to="/docs/borders">Bordures &amp; ombres</router-link>).</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Props</h2>
      <PropsTable :rows="rows" />
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import PropsTable from '../../components/docs/PropsTable.vue';
import type { PropRow } from '../../components/docs/types';
import { BaseSeparator } from '@tommaniglier/design-system-lib/vue';

const hCode = `<span>Section A</span>
<BaseSeparator />
<span>Section B</span>`;
const vCode = `<span>Accueil</span>
<BaseSeparator orientation="vertical" />
<span>Docs</span>`;

const rows: PropRow[] = [
  {
    name: 'orientation',
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
    description: 'Sens du séparateur.',
  },
];
</script>

<style scoped lang="scss">
.block {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 260px;
  max-width: 100%;
  font-size: var(--text-sm);
}
</style>
