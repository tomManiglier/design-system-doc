<template>
  <DocPage
    eyebrow="Démarrer"
    title="Changelog"
    description="Les évolutions notables du design system, de la bibliothèque et de sa documentation."
  >
    <section class="doc-section">
      <h2>Juillet 2026</h2>

      <h3>v1.0.0 - première version stable</h3>
      <ul class="doc-list">
        <li><strong>Accessibilité</strong> - indicateur de focus clavier visible sur tous les composants interactifs (WCAG 2.4.7) ; onglets navigables aux flèches (roving tabindex) ; Dialog et Drawer avec piège à focus, gel du scroll de fond et restauration du focus à la fermeture.</li>
        <li><strong>Tokens de statut</strong> - <code>--color-danger</code>, <code>--color-success</code>, <code>--color-warning</code>, <code>--color-info</code> remplacent les couleurs codées en dur ; les pastilles de statut d'Avatar sont unifiées avec les couleurs d'alerte.</li>
        <li><strong>Palette</strong> - le bleu nuit <code>#14213d</code> remplace le teal comme ancre sombre (accent, focus, survols).</li>
        <li><strong>Responsive</strong> - les 40 composants tiennent sur mobile : onglets et menus défilent ou s'enroulent, Dialog scrollable en hauteur, tooltips plafonnés au viewport.</li>
        <li><strong>Licence</strong> - publication sous licence MIT.</li>
      </ul>

      <h3>v0.5.0</h3>
      <ul class="doc-list">
        <li><strong>Palette</strong> - le teal foncé remplace le violet/indigo comme ancre sombre ; bouton gradient simplifié.</li>
      </ul>

      <h3>v0.4.0</h3>
      <ul class="doc-list">
        <li><strong>Palette « ciel rose »</strong> - nouveau token ciel <code>--color-cyan</code>, dégradé signature entièrement pastel (ciel → pêche → corail → rose), texte foncé sur tous les dégradés (correction de contraste).</li>
      </ul>

      <h3>v0.3.0</h3>
      <ul class="doc-list">
        <li><strong>NavigationMenu</strong> - vrais liens via <code>to</code>/<code>href</code> et prop <code>linkComponent</code> pour l'intégration vue-router.</li>
      </ul>

      <h3>v0.2.0</h3>
      <ul class="doc-list">
        <li><strong>Palette</strong> - rose, bleu foncé, anthracite, violet, orange, pêche ; accent interactif découplé du rose de marque pour rester lisible.</li>
        <li><strong>Typographies</strong> - Inter (titres) et Roboto (corps) remplacent Quicksand/Helvetica.</li>
      </ul>

      <h3>v0.1.1 - première publication</h3>
      <ul class="doc-list">
        <li><strong>Bibliothèque</strong> - 40 composants, utilisables en Vue (<code>@tommaniglier/design-system-lib/vue</code>) ou en HTML classique via les custom elements <code>ds-*</code> (<code>/register</code>).</li>
        <li><strong>Tokens</strong> - couleurs, typographie, espacement, rayons, ombres et animations, en clair et en sombre.</li>
        <li><strong>Documentation</strong> - une page par composant avec démos, code à copier et liste des props ; recherche ⌘K ; thème clair/sombre.</li>
        <li><strong>Fondations</strong> - pages Couleurs, Typographie, Espacement, Grille, Bordures &amp; ombres, Iconographie, Motion.</li>
        <li><strong>Patterns</strong> - 6 exemples d'assemblage : formulaire, recherche &amp; filtres, tableau riche, états vides, états d'erreur, notifications &amp; feedback.</li>
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
