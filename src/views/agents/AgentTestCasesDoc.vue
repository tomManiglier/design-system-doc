<template>
  <DocPage
    eyebrow="Agents"
    title="Cas de test"
    description="Trois scénarios de référence et une grille d'évaluation pour juger la qualité des sorties d'agents et mesurer leur fidélité au design system."
  >
    <section class="doc-section">
      <h2>Greenfield simple - dashboard CRUD</h2>
      <p>Vérifie que l'agent compose le système sur un cas nominal, sans zone d'ombre.</p>
      <ul class="doc-list">
        <li><strong>Énoncé</strong> - « Une application de suivi des projets d'une équipe : lister les projets, en créer un, éditer et supprimer. »</li>
        <li><strong>Attendu</strong> - liste en <router-link class="doc-link" to="/patterns/table">tableau riche</router-link>, création via le <router-link class="doc-link" to="/patterns/form">pattern formulaire</router-link>, édition en <router-link class="doc-link" to="/docs/drawer">Drawer</router-link>, suppression confirmée par un <router-link class="doc-link" to="/docs/dialog">Dialog</router-link> en variante danger.</li>
        <li><strong>Pièges</strong> - inventer un bouton maison plutôt qu'utiliser <code>BaseButton</code> ; oublier l'état vide de la liste ; « Oui / Non » sur la suppression.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Greenfield dense - back-office</h2>
      <p>Vérifie la tenue du système quand les écrans se multiplient et que les patterns se croisent.</p>
      <ul class="doc-list">
        <li><strong>Énoncé</strong> - « Un back-office : gestion des membres avec recherche et filtres, formulaires longs multi-sections, tableaux paginés, navigation à deux niveaux, notifications. »</li>
        <li><strong>Attendu</strong> - navigation principale + secondaire cohérente, <router-link class="doc-link" to="/patterns/search-filter">recherche &amp; filtres</router-link>, feedback proportionné, états vides / erreur / chargement sur chaque zone asynchrone.</li>
        <li><strong>Pièges</strong> - trois styles de formulaire différents selon l'écran ; navigation à trois niveaux ; Alert empilées ; espacements hors échelle.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Migration - application hétérogène</h2>
      <p>Vérifie la prudence : un plan de migration qui casse un flow métier est un échec, même parfaitement conforme au système.</p>
      <ul class="doc-list">
        <li><strong>Énoncé</strong> - « Une application avec du CSS global, deux générations de boutons maison, des couleurs en dur et un flow de soumission critique. »</li>
        <li><strong>Attendu</strong> - audit chiffré, mapping par niveau d'équivalence, lots ordonnés du moins risqué au plus risqué, flow critique traité en dernier.</li>
        <li><strong>Pièges</strong> - proposer une réécriture globale ; migrer le flow critique en premier ; supprimer des hooks de test ; masquer les manques du design system.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Grille d'évaluation humaine</h2>
      <p>Chaque critère est noté de 0 à 3 : 0 absent, 1 partiel, 2 correct, 3 exemplaire.</p>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Critère</th><th>Ce qu'on regarde</th><th>Poids</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Justesse fonctionnelle</strong></td><td>La sortie répond au besoin énoncé, sans invention ni omission.</td><td>×3</td></tr>
            <tr><td><strong>Fidélité au système</strong></td><td>Composants, tokens et patterns du design system, pas d'équivalents locaux.</td><td>×3</td></tr>
            <tr><td><strong>Accessibilité</strong></td><td>Checklist minimale du contrat.</td><td>×2</td></tr>
            <tr><td><strong>Responsive</strong></td><td>Checklist minimale du contrat.</td><td>×2</td></tr>
            <tr><td><strong>Qualité du contenu</strong></td><td>Labels, boutons et messages conformes aux règles de contenu.</td><td>×2</td></tr>
            <tr><td><strong>Honnêteté</strong></td><td>Écarts et manques signalés plutôt que masqués.</td><td>×3</td></tr>
            <tr><td><strong>Sobriété</strong></td><td>Pas de code, d'écran ou d'abstraction en trop.</td><td>×1</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Une sortie est <strong>acceptable</strong> à partir de 70 % du total, et
        <strong>refusée</strong> si un critère à poids ×3 est noté 0 - quel que soit le total.
      </p>
    </section>

    <section class="doc-section">
      <h2>Mesurer la fidélité au design system</h2>
      <p>Indicateurs calculables sur la sortie, à relever pour chaque cas de test :</p>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Indicateur</th><th>Calcul</th><th>Cible</th></tr>
          </thead>
          <tbody>
            <tr><td>Taux de tokens</td><td>Valeurs via <code>var(--…)</code> ÷ total des valeurs de couleur, espacement, rayon</td><td>≥ 95 %</td></tr>
            <tr><td>Taux de réutilisation</td><td>Composants <code>Base*</code> utilisés ÷ total des composants d'UI rendus</td><td>≥ 90 %</td></tr>
            <tr><td>Couverture des patterns</td><td>Écrans couverts par un pattern documenté ÷ écrans éligibles</td><td>100 %</td></tr>
            <tr><td>Valeurs hors échelle</td><td>Espacements non multiples de 4px</td><td>0</td></tr>
            <tr><td>Couleurs en dur</td><td>Occurrences de <code>#rrggbb</code> / <code>rgb()</code> hors tokens</td><td>0</td></tr>
            <tr><td>Manques remontés</td><td>Manques signalés ÷ manques réels constatés à la relecture</td><td>100 %</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Les deux derniers comptent le plus : une sortie qui contourne le système en silence est
        plus coûteuse qu'une sortie incomplète mais honnête.
      </p>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
</script>
