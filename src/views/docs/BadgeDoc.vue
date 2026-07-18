<template>
  <DocPage
    eyebrow="Affichage"
    title="Badge"
    description="Petite étiquette pour signaler un statut, une catégorie ou une valeur courte."
  >
    <section class="doc-section">
      <h2>Variantes</h2>
      <DemoBlock :code="variantsCode">
        <BaseBadge variant="primary">Primary</BaseBadge>
        <BaseBadge variant="secondary">Secondary</BaseBadge>
        <BaseBadge variant="outline">Outline</BaseBadge>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Couleur personnalisée</h2>
      <p>La prop <code>color</code> accepte n'importe quelle couleur : fond teinté, texte et bordure assortis.</p>
      <DemoBlock :code="colorCode">
        <BaseBadge color="#fadadd">Rose</BaseBadge>
        <BaseBadge color="#14213d">Nuit</BaseBadge>
        <BaseBadge color="#1a7f45">Succès</BaseBadge>
        <BaseBadge color="#b3261e">Erreur</BaseBadge>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Icône</h2>
      <p>Le slot <code>#icon</code> place une icône devant le texte.</p>
      <DemoBlock :code="iconCode">
        <BaseBadge variant="secondary">
          <template #icon><BaseIcon name="check" :size="12" /></template>
          Vérifié
        </BaseBadge>
        <BaseBadge color="#fadadd">
          <template #icon><BaseIcon name="bell" :size="12" /></template>
          Nouveau
        </BaseBadge>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <p>Le badge est un élément de présentation : pas d'état interactif, pas de focus.</p>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>Variante</th><th>Usage</th></tr></thead>
          <tbody>
            <tr><td><code>primary</code></td><td>Statut appuyé : contraste fort.</td></tr>
            <tr><td><code>secondary</code></td><td>Statut discret sur fond <code>--color-muted</code>.</td></tr>
            <tr><td><code>outline</code></td><td>Contour seul : information de contexte, poids minimal.</td></tr>
          </tbody>
        </table>
      </div>
      <p>La prop <code>color</code> permet un aplat personnalisé : à réserver aux statuts métier codifiés, jamais pour de la décoration.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Texte obligatoire</strong> - un badge sans libellé (pastille de couleur seule) n'est pas accessible : la couleur ne porte jamais le sens à elle seule.</li>
        <li><strong>Vocabulaire fermé</strong> - un jeu de statuts stable (« Stable », « Beta »), pas du texte libre : c'est ce qui rend la lecture rapide.</li>
        <li><strong>Non interactif</strong> - si un badge doit être cliquable (filtre retirable), utiliser un <code>&lt;button&gt;</code> et non un badge.</li>
        <li><strong>Contraste</strong> - vérifier 4.5:1 quand <code>color</code> est utilisée avec du texte.</li>
        <li><strong>Longueur</strong> - un ou deux mots ; au-delà c'est du texte, pas un badge.</li>
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
import { BaseBadge, BaseIcon } from '@tommaniglier/design-system-lib/vue';

const variantsCode = `<BaseBadge variant="primary">Primary</BaseBadge>
<BaseBadge variant="secondary">Secondary</BaseBadge>
<BaseBadge variant="outline">Outline</BaseBadge>`;

const colorCode = `<BaseBadge color="#fadadd">Rose</BaseBadge>
<BaseBadge color="#14213d">Nuit</BaseBadge>
<BaseBadge color="#1a7f45">Succès</BaseBadge>
<BaseBadge color="#b3261e">Erreur</BaseBadge>`;

const iconCode = `<BaseBadge variant="secondary">
  <template #icon><BaseIcon name="check" :size="12" /></template>
  Vérifié
</BaseBadge>`;

const rows: PropRow[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'outline'",
    default: "'primary'",
    description: 'Style visuel du badge.',
  },
  {
    name: 'color',
    type: 'string',
    default: '-',
    description: 'Couleur personnalisée (hex, rgb…) : fond teinté et texte assorti.',
  },
];
</script>
