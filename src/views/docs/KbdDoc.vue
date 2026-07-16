<template>
  <DocPage
    eyebrow="Utilitaires"
    title="Kbd"
    description="Représente une touche ou un raccourci clavier."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code">
        <BaseKbd>Ctrl</BaseKbd>
        <BaseKbd>K</BaseKbd>
        <span class="sep">·</span>
        <BaseKbd>⌘</BaseKbd>
        <BaseKbd>⇧</BaseKbd>
        <BaseKbd>P</BaseKbd>
        <span class="sep">·</span>
        <BaseKbd>Échap</BaseKbd>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Dans une phrase</h2>
      <DemoBlock :code="inlineCode" stack>
        <p class="line">
          Appuyez sur <BaseKbd>Ctrl</BaseKbd> <BaseKbd>K</BaseKbd> pour ouvrir la palette de commandes.
        </p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>API</h2>
      <PropsTable :rows="rows" />
    </section>
    <section class="doc-section">
      <h2>États</h2>
      <p>Élément de présentation, sans état ni interaction : il affiche une touche avec un fond <code>--color-muted</code>, une bordure et un rayon <code>--radius-sm</code>.</p>
      <p>Pour un raccourci à plusieurs touches, composer plusieurs Kbd séparés par un signe (<code>⌘</code> + <code>K</code>).</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Élément natif</strong> - rend un <code>&lt;kbd&gt;</code> : la sémantique « saisie clavier » est portée par le HTML.</li>
        <li><strong>Symboles</strong> - <code>⌘</code> ou <code>⇧</code> sont mal lus par les lecteurs d'écran : accompagner le raccourci d'un texte (« Ctrl + K ») quand il est essentiel.</li>
        <li><strong>Multiplateforme</strong> - afficher <code>⌘</code> sur macOS et <code>Ctrl</code> ailleurs, détecté à l'exécution (voir la barre de recherche de cette doc).</li>
        <li><strong>Complément</strong> - un raccourci ne remplace jamais un contrôle cliquable.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import PropsTable from '../../components/docs/PropsTable.vue';
import type { PropRow } from '../../components/docs/types';
import { BaseKbd } from '@tommaniglier/design-system-lib/vue';

const code = `<BaseKbd>Ctrl</BaseKbd>
<BaseKbd>K</BaseKbd>`;

const inlineCode = `<p>Appuyez sur <BaseKbd>Ctrl</BaseKbd> <BaseKbd>K</BaseKbd> pour ouvrir la palette.</p>`;

const rows: PropRow[] = [
  { name: 'default', type: 'slot', default: '-', description: 'Touche ou symbole à afficher.' },
];
</script>

<style scoped lang="scss">
.sep {
  color: var(--color-muted-foreground);
}

.line {
  font-size: var(--text-sm);
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}
</style>
