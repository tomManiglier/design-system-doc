<template>
  <DocPage
    eyebrow="Navigation"
    title="Accordion"
    description="Sections repliables pour présenter du contenu de façon compacte. Une seule ouverte à la fois."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <div class="w">
          <BaseAccordion :items="items" />
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Panneau replié, chevron vers le bas.</td></tr>
            <tr><td><code>open</code></td><td>Contenu déplié, chevron pivoté ; <code>aria-expanded="true"</code>.</td></tr>
            <tr><td><code>hover</code></td><td>Fond <code>--color-muted</code> sur l'en-tête.</td></tr>
            <tr><td><code>focus</code></td><td>Anneau <code>--color-ring</code> sur l'en-tête.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Plusieurs sections peuvent être ouvertes simultanément : ouvrir l'une ne referme pas les autres.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Clavier</strong> - les en-têtes sont des <code>&lt;button&gt;</code> : <code>Tab</code> pour les atteindre, <code>Entrée</code> / <code>Espace</code> pour plier-déplier.</li>
        <li><strong>État</strong> - <code>aria-expanded</code> sur l'en-tête reflète l'ouverture.</li>
        <li><strong>Chevron</strong> - décoratif (<code>aria-hidden</code>) : la rotation double une information déjà portée par <code>aria-expanded</code>.</li>
        <li><strong>Titres</strong> - décrivent le contenu replié : l'utilisateur décide d'ouvrir sans deviner.</li>
        <li><strong>Ne pas masquer l'essentiel</strong> - un accordéon range du détail ; ce qui est indispensable reste visible.</li>
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
import { BaseAccordion } from '@tommaniglier/design-system-lib/vue';
import type { AccordionItem } from '@tommaniglier/design-system-lib/vue';

const items: AccordionItem[] = [
  {
    title: "Qu'est-ce qu'un design system ?",
    content: 'Un langage commun entre design et développement : tokens, composants et règles d’usage réunis au même endroit.',
  },
  {
    title: 'Quelles typographies utiliser ?',
    content: 'Quicksand pour les titres, Helvetica pour les corps de texte.',
  },
  {
    title: 'Puis-je personnaliser les composants ?',
    content: 'Oui : chaque composant repose sur des variables CSS que vous pouvez surcharger.',
  },
];
const code = `<BaseAccordion :items="items" />`;

const rows: PropRow[] = [
  {
    name: 'items',
    type: 'AccordionItem[]',
    default: '-',
    description: 'Sections { title, content }.',
  },
];
</script>

<style scoped lang="scss">
.w {
  width: 480px;
  max-width: 100%;
}
</style>
