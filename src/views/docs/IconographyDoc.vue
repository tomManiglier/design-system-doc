<template>
  <DocPage
    eyebrow="Fondations"
    title="Iconographie"
    description="Un seul style de trait, des tailles fixes et des règles d'accompagnement pour que les icônes soutiennent le texte sans le remplacer."
    status="stable"
  >
    <section class="doc-section">
      <h2>Style</h2>
      <ul class="doc-list">
        <li>Un seul style : <strong>trait fin</strong>, jamais rempli, avec des bouts arrondis.</li>
        <li>Toutes les icônes sont dessinées sur une grille <code>24 × 24</code>.</li>
        <li>La couleur suit celle du texte autour : une icône ne fixe jamais sa propre couleur.</li>
        <li>On ne mélange pas avec des icônes d'un autre style (pleines, plus épaisses...).</li>
      </ul>
      <DemoBlock :code="iconCode">
        <BaseIcon name="search" />
        <BaseIcon name="bell" />
        <BaseIcon name="user" />
        <BaseIcon name="mail" />
        <BaseIcon name="settings" />
        <BaseIcon name="check" />
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Icônes d'entreprise</h2>
      <p>Pour représenter une organisation, un lieu ou une activité professionnelle :</p>
      <DemoBlock :code="businessCode">
        <BaseIcon name="building" />
        <BaseIcon name="briefcase" />
        <BaseIcon name="globe" />
        <BaseIcon name="truck" />
        <BaseIcon name="wrench" />
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Bibliothèque complète</h2>
      <DemoBlock :code="libraryCode">
        <div class="icon-grid">
          <div v-for="n in names" :key="n" class="icon-tile">
            <BaseIcon :name="n" />
            <span class="icon-tile__name">{{ n }}</span>
          </div>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Tailles</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Taille</th><th>Contexte</th></tr>
          </thead>
          <tbody>
            <tr><td><code>14</code></td><td>Dans du petit texte : métadonnées, bouton de copie.</td></tr>
            <tr><td><code>16</code></td><td>Taille par défaut : boutons, champs, items de menu.</td></tr>
            <tr><td><code>18–20</code></td><td>Navigation, en-têtes de panneau.</td></tr>
            <tr><td><code>24</code></td><td>Illustrations légères, états vides.</td></tr>
          </tbody>
        </table>
      </div>
      <DemoBlock :code="sizeCode">
        <BaseIcon name="star" :size="14" />
        <BaseIcon name="star" :size="16" />
        <BaseIcon name="star" :size="20" />
        <BaseIcon name="star" :size="24" />
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Alignement</h2>
      <ul class="doc-list">
        <li>Icône + texte : alignés au centre, avec un petit espace entre les deux (<code>--space-2</code>).</li>
        <li>L'icône précède le texte pour une action (<code>+ Ajouter</code>) ; elle le suit pour indiquer une direction (chevrons, flèches).</li>
        <li>Dans une liste, toutes les icônes gardent la même taille pour rester alignées.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <p>
        L'icône n'a pas d'état propre : elle hérite de la couleur (<code>currentColor</code>) et
        des transitions de son parent. Sa taille est fixée par <code>size</code>.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité et règles d'usage</h2>
      <ul class="doc-list">
        <li><strong>Décorative par défaut</strong> - masquée aux lecteurs d'écran (<code>aria-hidden="true"</code>), le bon comportement dans la plupart des cas.</li>
        <li><strong>Icône porteuse de sens</strong> - mettre l'<code>aria-label</code> sur l'élément interactif (le bouton), pas sur l'icône. Sans texte ni <code>aria-label</code>, l'action reste anonyme.</li>
        <li><strong>Une icône, un sens</strong> - ne pas réutiliser la même icône pour deux choses différentes.</li>
        <li>Ne pas inventer d'icône pour une idée abstraite : un texte clair vaut mieux qu'un symbole obscur.</li>
        <li><strong>Taille</strong> - 16 dans les contrôles, 14 dans le texte fin ; en dessous de 14, le trait devient illisible.</li>
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
import { BaseIcon } from '@tom/design-system/vue';
import type { IconName } from '@tom/design-system/vue';

const iconCode = `<BaseIcon name="search" />
<BaseIcon name="bell" />
<BaseIcon name="user" />`;

const businessCode = `<BaseIcon name="building" />
<BaseIcon name="briefcase" />
<BaseIcon name="globe" />
<BaseIcon name="truck" />
<BaseIcon name="wrench" />`;

const sizeCode = `<BaseIcon name="star" :size="14" />
<BaseIcon name="star" :size="16" />
<BaseIcon name="star" :size="20" />
<BaseIcon name="star" :size="24" />`;

const names: IconName[] = [
  'search',
  'plus',
  'check',
  'close',
  'chevron-down',
  'chevron-right',
  'arrow-right',
  'bell',
  'user',
  'users',
  'mail',
  'trash',
  'heart',
  'settings',
  'file',
  'folder',
  'download',
  'upload',
  'calendar',
  'clock',
  'phone',
  'globe',
  'building',
  'truck',
  'wrench',
  'chart',
  'filter',
  'edit',
  'lock',
  'info',
  'warning',
  'star',
  'briefcase',
  'print',
  'share',
  'logout',
  'copy',
];

const libraryCode = `<BaseIcon name="search" />
<BaseIcon name="bell" />
<BaseIcon name="user" />`;

const rows: PropRow[] = [
  {
    name: 'name',
    type: 'IconName',
    default: '-',
    description: 'Nom de l\'icône à afficher.',
  },
  {
    name: 'size',
    type: 'number',
    default: '20',
    description: 'Taille (largeur/hauteur) en pixels.',
  },
];
</script>

<style scoped lang="scss">
.icon-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  width: 100%;
}

.icon-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-foreground);
}

.icon-tile__name {
  font-size: var(--text-xs);
  color: var(--color-muted-foreground);
}

@media (max-width: 560px) {
  .icon-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
