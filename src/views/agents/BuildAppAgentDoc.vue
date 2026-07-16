<template>
  <DocPage
    eyebrow="Agents"
    title="build-app-with-ds"
    description="Construire une application neuve à partir du design system : arborescence, routes et écrans composés à partir des composants et patterns existants."
  >
    <section class="doc-section">
      <h2>Rôle</h2>
      <p>
        Part d'un besoin métier sans code existant et produit une application dont chaque écran est
        assemblé à partir de la bibliothèque. L'agent ne dessine pas d'interface : il compose le
        système.
      </p>
    </section>

    <section class="doc-section">
      <h2>Entrées</h2>
      <ul class="doc-list">
        <li><strong>Type d'application</strong> - dashboard, CRUD, portail, back-office, site de contenu.</li>
        <li><strong>Cible métier</strong> - qui l'utilise, dans quel contexte, avec quel niveau d'expertise.</li>
        <li><strong>Pages attendues</strong> - liste des écrans, ou domaines fonctionnels si la liste n'est pas figée.</li>
        <li><strong>Navigation</strong> - structure souhaitée, ou à proposer.</li>
        <li><strong>Fonctionnalités prioritaires</strong> - ce qui doit marcher en premier si le périmètre doit être réduit.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Sorties</h2>
      <ul class="doc-list">
        <li><strong>Arborescence</strong> de fichiers proposée, cohérente avec la stack cible.</li>
        <li><strong>Routes</strong> et hiérarchie de navigation (principale / secondaire).</li>
        <li><strong>Composants utilisés</strong> - par écran, avec les variantes et props retenues.</li>
        <li><strong>Patterns utilisés</strong> - quel pattern du système couvre quel écran.</li>
        <li><strong>Contenu d'exemple</strong> réaliste : labels, messages, données plausibles du métier visé.</li>
        <li>Le tout au <router-link class="doc-link" to="/agents/contract">format de sortie standard</router-link>.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Règles de décision</h2>
      <ul class="doc-list">
        <li><strong>Réutiliser avant de créer.</strong> Ordre de recherche : composant existant → composition de composants → pattern documenté → création locale justifiée.</li>
        <li>Un écran qui ressemble à un pattern documenté <strong>utilise</strong> ce pattern (formulaire, tableau, recherche, confirmation…).</li>
        <li>Les états vides, de chargement et d'erreur sont prévus dès la conception, pas ajoutés après.</li>
        <li>Si le besoin est ambigu, poser la question plutôt que de choisir arbitrairement une structure.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Règles UI</h2>
      <ul class="doc-list">
        <li>Tokens uniquement : aucune valeur de couleur, d'espacement ou de rayon en dur.</li>
        <li>Variantes du système : <code>primary</code> pour l'action principale d'un écran (une seule), <code>outline</code> pour le secondaire, <code>destructive</code> réservé aux suppressions.</li>
        <li>Grille et points de rupture de <router-link class="doc-link" to="/docs/grid">Grille &amp; layout</router-link>.</li>
        <li>Textes cohérents avec le reste de l'interface - c'est une règle UI, pas un détail de rédaction.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Critères de validation</h2>
      <ul class="doc-list">
        <li><strong>Cohérence visuelle</strong> - deux écrans du même type se ressemblent ; aucun style hors design system sans justification écrite.</li>
        <li><strong>Responsive</strong> - <router-link class="doc-link" to="/agents/contract">checklist responsive</router-link> passée sur chaque écran.</li>
        <li><strong>Accessibilité de base</strong> - checklist accessibilité passée : clavier, labels, contrastes, focus.</li>
        <li><strong>Conformité</strong> - checklist design system passée, écarts listés.</li>
        <li>Un écran qui échoue à un critère est rendu avec l'écart signalé, jamais présenté comme conforme.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Définition</h2>
      <p>Le fichier complet vit dans <code>agents/build-app-with-ds.md</code> du dépôt de documentation.</p>
      <DemoBlock :code="frontmatter" stack />
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';

const frontmatter = `---
name: build-app-with-ds
description: Construit une application neuve à partir du design system
  @tommaniglier/design-system-lib. À utiliser quand il faut créer des écrans, des routes
  ou une application entière en partant d'un besoin métier, sans code existant.
---`;
</script>
