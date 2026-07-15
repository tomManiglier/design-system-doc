<template>
  <DocPage
    eyebrow="Formulaires"
    title="Button"
    description="Déclenche une action. Trois variantes pour hiérarchiser les actions d'une interface."
    status="stable"
  >
    <section class="doc-section">
      <h2>Variantes</h2>
      <p>
        <code>primary</code> pour l'action principale, <code>secondary</code> et
        <code>outline</code> pour les actions secondaires.
      </p>
      <DemoBlock :code="variantsCode">
        <BaseButton variant="primary">Primary</BaseButton>
        <BaseButton variant="secondary">Secondary</BaseButton>
        <BaseButton variant="outline">Outline</BaseButton>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Couleur de la marque</h2>
      <p>
        <code>brand</code> reprend le bleu de la marque, <code>gradient</code> applique le
        dégradé signature bleu → violet.
      </p>
      <DemoBlock :code="brandCode">
        <BaseButton variant="brand">Brand</BaseButton>
        <BaseButton variant="brand-outline">Brand Outline</BaseButton>
        <BaseButton variant="gradient">Gradient</BaseButton>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Destructif</h2>
      <p>
        <code>destructive</code> et <code>destructive-outline</code> pour les actions
        de suppression, à utiliser avec parcimonie.
      </p>
      <DemoBlock :code="destructiveCode">
        <BaseButton variant="destructive">Supprimer</BaseButton>
        <BaseButton variant="destructive-outline">Supprimer</BaseButton>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Lien</h2>
      <p>
        <code>link</code> et <code>link-black</code> pour une action discrète. Le lien bleu
        se souligne au survol ; le lien noir est souligné par défaut et le trait s'efface au
        survol.
      </p>
      <DemoBlock :code="linkCode">
        <BaseButton variant="link">En savoir plus</BaseButton>
        <BaseButton variant="link-black">Voir la documentation</BaseButton>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Icône</h2>
      <p>Un bouton peut afficher une icône seule (<code>icon-only</code>) ou une icône avec du texte, via le slot <code>#icon</code>.</p>
      <DemoBlock :code="iconCode">
        <BaseButton variant="outline" icon-only aria-label="Ajouter">
          <template #icon>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </template>
        </BaseButton>
        <BaseButton variant="brand">
          <template #icon>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </template>
          Ajouter
        </BaseButton>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <p>Le bouton hérite des états natifs de <code>&lt;button&gt;</code> ; le style change sans jamais modifier la taille de l'élément.</p>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Fond et bordure de la variante.</td></tr>
            <tr><td><code>hover</code></td><td>Fond assombri (<code>--color-primary-hover</code>) ou teinté à 8 % pour les variantes <code>outline</code>. Transition de 150 ms.</td></tr>
            <tr><td><code>focus</code></td><td>Anneau de 2px en <code>--color-ring</code>, décalé de 2px, visible au clavier uniquement (<code>:focus-visible</code>).</td></tr>
            <tr><td><code>active</code></td><td>Aucun décalage : le changement de fond suffit à confirmer la pression.</td></tr>
            <tr><td><code>disabled</code></td><td>Attribut natif <code>disabled</code> : le bouton n'est plus focusable ni cliquable.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Pas d'état <code>loading</code> intégré : pour une action longue, composer avec
        <router-link class="doc-link" to="/docs/spinner">Spinner</router-link> dans le slot
        <code>#icon</code> et désactiver le bouton le temps de l'opération.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Clavier</strong> - <code>Tab</code> pour atteindre le bouton, <code>Entrée</code> et <code>Espace</code> pour l'activer (comportement natif de <code>&lt;button&gt;</code>).</li>
        <li><strong>Focus</strong> - anneau <code>--color-ring</code> visible au clavier ; ne jamais le supprimer.</li>
        <li><strong>Libellé</strong> - le texte du bouton est son nom accessible. Un bouton <code>icon-only</code> <strong>doit</strong> porter un <code>aria-label</code> décrivant l'action.</li>
        <li><strong>Icônes</strong> - décoratives quand le texte est présent ; le slot <code>#icon</code> ne doit pas porter le sens à lui seul.</li>
        <li><strong>Type</strong> - préciser <code>type="button"</code> hors formulaire pour éviter une soumission involontaire.</li>
        <li><strong>Couleur</strong> - <code>destructive</code> ne suffit pas à signaler le danger : le libellé doit le dire (« Supprimer », pas « Continuer »).</li>
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
import { BaseButton } from '@tom/design-system/vue';

const variantsCode = `<BaseButton variant="primary">Primary</BaseButton>
<BaseButton variant="secondary">Secondary</BaseButton>
<BaseButton variant="outline">Outline</BaseButton>`;

const brandCode = `<BaseButton variant="brand">Brand</BaseButton>
<BaseButton variant="brand-outline">Brand Outline</BaseButton>
<BaseButton variant="gradient">Gradient</BaseButton>`;

const destructiveCode = `<BaseButton variant="destructive">Supprimer</BaseButton>
<BaseButton variant="destructive-outline">Supprimer</BaseButton>`;

const linkCode = `<BaseButton variant="link">En savoir plus</BaseButton>
<BaseButton variant="link-black">Voir la documentation</BaseButton>`;

const iconCode = `<BaseButton variant="outline" icon-only aria-label="Ajouter">
  <template #icon><PlusIcon /></template>
</BaseButton>

<BaseButton variant="brand">
  <template #icon><PlusIcon /></template>
  Ajouter
</BaseButton>`;

const rows: PropRow[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'outline' | 'brand' | 'brand-outline' | 'gradient' | 'link' | 'link-black' | 'destructive' | 'destructive-outline'",
    default: "'primary'",
    description: 'Style visuel du bouton.',
  },
  {
    name: 'iconOnly',
    type: 'boolean',
    default: 'false',
    description: 'Rend le bouton carré, sans texte, pour une icône seule.',
  },
];
</script>
