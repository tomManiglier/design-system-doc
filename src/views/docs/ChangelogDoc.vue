<template>
  <DocPage
    eyebrow="Démarrer"
    title="Changelog"
    description="Les évolutions notables du design system, de la bibliothèque et de sa documentation."
  >
    <section class="doc-section">
      <h2>Juillet 2026</h2>
      <h3>v0.1.0 - première version</h3>
      <ul class="doc-list">
        <li><strong>Bibliothèque</strong> - 39 composants, utilisables en Vue (<code>@tommaniglier/design-system-lib/vue</code>) ou en HTML classique via les custom elements <code>ds-*</code> (<code>/register</code>).</li>
        <li><strong>Tokens</strong> - couleurs, typographie, espacement, rayons, ombres et animations, en clair et en sombre.</li>
        <li><strong>Documentation</strong> - une page par composant avec démos, code à copier et liste des props ; recherche ⌘K ; thème clair/sombre.</li>
        <li><strong>Fondations</strong> - pages Couleurs, Typographie, Espacement, Grille, Bordures &amp; ombres, Iconographie, Motion.</li>
        <li><strong>Patterns</strong> - 8 exemples d'assemblage : formulaire, recherche &amp; filtres, tableau riche, états vides, états d'erreur, confirmation de suppression, Dialog ou Drawer, feedback.</li>
        <li><strong>Gouvernance</strong> - conventions de nommage, guide de contribution.</li>
        <li><strong>Agents</strong> - des agents pour construire ou migrer des applications avec le design system.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Politique de version</h2>
      <ul class="doc-list">
        <li>Le package suit semver : patch = correctifs, minor = ajouts sans rupture, major = changements qui cassent l'existant.</li>
        <li>Un composant publié ne change jamais son API dans une minor ; une dépréciation est annoncée ici au moins une version avant d'être retirée.</li>
        <li>Les changements de tokens (nouvelles valeurs, nouveaux rôles) sont listés ici avec leur impact.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
</script>
