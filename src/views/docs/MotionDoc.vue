<template>
  <DocPage
    eyebrow="Fondations"
    title="Motion"
    description="Des durées courtes, des courbes précises et trois rôles - feedback, orientation, continuité - pour un mouvement utile, jamais décoratif."
  >
    <section class="doc-section">
      <h2>Rôle des animations</h2>
      <ul class="doc-list">
        <li><strong>Feedback</strong> - montrer qu'une action a été prise en compte : survol d'un bouton, clic, copie réussie.</li>
        <li><strong>Orientation</strong> - montrer d'où vient un élément : un drawer glisse depuis son bord, un dialog apparaît au centre.</li>
        <li><strong>Continuité</strong> - relier deux états d'une même surface : changement de thème, ouverture d'un accordéon.</li>
        <li>Une animation qui ne sert à rien de tout ça est supprimée.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Durées</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Token</th><th>Valeur</th><th>Usage</th></tr>
          </thead>
          <tbody>
            <tr><td><code>--duration-fast</code></td><td>150ms</td><td>Survol, focus, changement de couleur.</td></tr>
            <tr><td><code>--duration-base</code></td><td>200ms</td><td>Changement d'état d'un composant (tabs, switch).</td></tr>
            <tr><td><code>--duration-slow</code></td><td>300ms</td><td>Apparitions : dialog, drawer, changement de thème.</td></tr>
            <tr><td><code>--duration-slower</code></td><td>400ms</td><td>Mouvements plus visibles : soulignement des liens, icône de thème.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Au-delà de 400ms, l'interface paraît lente : les durées longues sont réservées aux entrées de page.</p>
    </section>

    <section class="doc-section">
      <h2>Courbes</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Token</th><th>Courbe</th><th>Usage</th></tr>
          </thead>
          <tbody>
            <tr><td><code>--ease-standard</code></td><td><code>ease</code></td><td>Couleurs, opacité, petits changements.</td></tr>
            <tr><td><code>--ease-out-expo</code></td><td><code>cubic-bezier(0.22, 1, 0.36, 1)</code></td><td>Entrées d'éléments : départ rapide, arrivée douce.</td></tr>
            <tr><td><code>--ease-in-out</code></td><td><code>cubic-bezier(0.4, 0, 0.2, 1)</code></td><td>Bascules d'état symétriques : thème, toggles.</td></tr>
          </tbody>
        </table>
      </div>
      <DemoBlock :code="demoCode">
        <BaseButton variant="outline" class="motion-demo">Survolez-moi</BaseButton>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Transitions types</h2>
      <ul class="doc-list">
        <li>Survol / focus : transition rapide sur la couleur ou le fond.</li>
        <li>Dialog : fondu du voile et léger déplacement du panneau.</li>
        <li>Drawer : glissement depuis le bord d'où il vient.</li>
        <li>On anime de préférence <code>transform</code> et <code>opacity</code> - jamais la largeur ou la hauteur, qui ralentissent le rendu.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Réduire le mouvement</h2>
      <p>
        Quand l'utilisateur demande moins d'animations dans son système, les déplacements et
        apparitions sont désactivés. Les transitions de couleur peuvent rester.
      </p>
      <DemoBlock :code="reducedCode" stack />
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import { BaseButton } from '@tom/design-system/vue';

const demoCode = `.element {
  transition: transform var(--duration-base) var(--ease-out-expo);
}

.element:hover {
  transform: translateY(-2px);
}`;

const reducedCode = `@media (prefers-reduced-motion: reduce) {
  .hero,
  .card-grid > * {
    animation: none;
    transition: none;
  }
}`;
</script>

<style scoped lang="scss">
.motion-demo {
  height: 36px;
  padding: 0 16px;
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  color: var(--color-foreground);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition:
    transform var(--duration-base) var(--ease-out-expo),
    box-shadow var(--duration-base) var(--ease-out-expo);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
}
</style>
