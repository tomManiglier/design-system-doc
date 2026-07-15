<template>
  <DocPage
    eyebrow="Données"
    title="Scroll Area"
    description="Zone défilante à hauteur fixe, avec fondu progressif en haut et en bas."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <p>Le fondu apparaît uniquement du côté où il reste du contenu à faire défiler.</p>
      <DemoBlock :code="code" stack>
        <div class="sa-w">
          <BaseScrollArea :height="220">
            <ul class="sa-list">
              <li v-for="item in items" :key="item" class="sa-item">{{ item }}</li>
            </ul>
          </BaseScrollArea>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Zone de hauteur fixe ; la barre de défilement apparaît si le contenu dépasse.</td></tr>
            <tr><td><code>hover</code></td><td>Barre de défilement plus contrastée.</td></tr>
          </tbody>
        </table>
      </div>
      <p>La zone ne défile que si nécessaire : un contenu court ne montre aucune barre.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Clavier</strong> - une zone défilante doit être atteignable au clavier : si elle ne contient aucun élément focusable, lui donner <code>tabindex="0"</code> pour permettre le défilement aux flèches.</li>
        <li><strong>Libellé</strong> - une zone focusable a besoin d'un nom accessible (<code>aria-label</code>) décrivant son contenu.</li>
        <li><strong>Contenu caché</strong> - ce qui est hors champ reste dans le DOM et atteignable : la zone masque visuellement, pas sémantiquement.</li>
        <li><strong>Ne pas imbriquer</strong> - une zone défilante dans une autre rend le défilement imprévisible, surtout au trackpad.</li>
        <li><strong>Hauteur</strong> - assez grande pour montrer que ça défile : un contenu coupé net paraît complet.</li>
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
import { BaseScrollArea } from '@tom/design-system/vue';

const items = [
  'Button',
  'Input',
  'Checkbox',
  'Radio Group',
  'Select',
  'Switch',
  'Slider',
  'Badge',
  'Avatar',
  'Card',
  'Table',
  'Calendar',
];

const code = `<BaseScrollArea :height="220">
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</BaseScrollArea>`;

const rows: PropRow[] = [
  { name: 'height', type: 'number', default: '240', description: 'Hauteur maximale de la zone en pixels.' },
  { name: 'default', type: 'slot', default: '-', description: 'Contenu défilant.' },
];
</script>

<style scoped lang="scss">
.sa-w {
  width: 320px;
  max-width: 100%;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 4px;
}

.sa-list {
  display: flex;
  flex-direction: column;
}

.sa-item {
  padding: 12px 14px;
  font-size: var(--text-sm);
  border-bottom: 1px solid var(--color-border);

  &:last-child {
    border-bottom: none;
  }
}
</style>
