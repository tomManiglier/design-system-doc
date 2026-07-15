<template>
  <DocPage
    eyebrow="Agents"
    title="rebuild-app-with-ds"
    description="Migrer une application existante vers le design system : auditer les écarts, mapper l'ancien vers le nouveau, et planifier une reprise incrémentale sans casser le métier."
  >
    <section class="doc-section">
      <h2>Rôle</h2>
      <p>
        Part d'une codebase hétérogène et produit un chemin de migration réaliste. La priorité
        n'est pas la beauté du résultat final : c'est de ne rien casser en avançant.
      </p>
    </section>

    <section class="doc-section">
      <h2>Entrées</h2>
      <ul class="doc-list">
        <li><strong>Codebase existante</strong> - stack, structure, conventions en place.</li>
        <li><strong>Pages existantes</strong> - lesquelles, leur trafic ou leur criticité si connue.</li>
        <li><strong>Composants existants</strong> - bibliothèque maison, composants copiés-collés, CSS global.</li>
        <li><strong>Dette UI</strong> - ce qui est déjà identifié comme incohérent ou daté.</li>
        <li><strong>Priorités métier</strong> - ce qui ne doit pas bouger, ce qui est urgent à reprendre.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Sorties</h2>
      <ul class="doc-list">
        <li><strong>Audit des écarts</strong> - par page ou par composant : ce qui diverge du design system et à quel point.</li>
        <li><strong>Mapping</strong> ancien composant → composant du design system, avec le niveau d'équivalence :</li>
      </ul>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Niveau</th><th>Signification</th><th>Action</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Direct</strong></td><td>Même rôle, même API ou presque</td><td>Substitution mécanique</td></tr>
            <tr><td><strong>Adapté</strong></td><td>Même rôle, props à traduire</td><td>Substitution + adaptation des appels</td></tr>
            <tr><td><strong>Composé</strong></td><td>L'ancien couvre plusieurs rôles</td><td>Éclater en plusieurs composants du système</td></tr>
            <tr><td><strong>Manquant</strong></td><td>Aucun équivalent</td><td>Garder l'existant + remonter le manque</td></tr>
          </tbody>
        </table>
      </div>
      <ul class="doc-list">
        <li><strong>Plan de migration</strong> - par lots indépendants, du moins risqué au plus risqué, chaque lot livrable seul.</li>
        <li><strong>Liste des manques</strong> du design system révélés par la migration.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Règles de décision</h2>
      <ul class="doc-list">
        <li><strong>Substituer avant de réécrire.</strong> Remplacer un bouton maison par <code>BaseButton</code> coûte peu et rapporte tout de suite ; réécrire un écran entier est un projet.</li>
        <li>Commencer par les composants les plus utilisés : le gain de cohérence est proportionnel à leur diffusion.</li>
        <li>Un lot = un type de composant ou une page, jamais « toute l'application d'un coup ».</li>
        <li>Ne pas migrer ce qui va disparaître : vérifier avant d'investir sur un écran en fin de vie.</li>
        <li>Tokens d'abord : aligner couleurs et espacements donne un gain visuel immédiat, sans toucher au comportement.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Garde-fous</h2>
      <ul class="doc-list">
        <li><strong>Ne pas casser les comportements métier existants.</strong> À rendu identique, la logique reste identique.</li>
        <li><strong>Préserver les flows critiques</strong> - authentification, paiement, soumission de données : migrés en dernier, avec vérification manuelle.</li>
        <li>Les identifiants, <code>data-*</code> et hooks de test existants sont conservés : ne pas casser les tests ni l'analytics.</li>
        <li>Une substitution qui change une validation, un raccourci clavier ou un ordre de tabulation est signalée, pas appliquée en silence.</li>
        <li>En cas de doute entre fidélité au design system et comportement en place, le comportement gagne et l'écart est documenté.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Critères de validation</h2>
      <ul class="doc-list">
        <li><strong>Réduction de la dette UI</strong> - mesurable : nombre de couleurs en dur, de composants dupliqués, de valeurs hors échelle, avant / après.</li>
        <li><strong>Cohérence avec le design system</strong> - <router-link class="doc-link" to="/agents/contract">checklist de conformité</router-link> passée sur chaque lot.</li>
        <li><strong>Absence de régression fonctionnelle</strong> - chaque flow touché est exercé, pas seulement compilé ; les tests existants passent.</li>
        <li>Un lot est livrable si et seulement si ces trois critères sont vérifiés.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Définition</h2>
      <p>Le fichier complet vit dans <code>agents/rebuild-app-with-ds.md</code> du dépôt de documentation.</p>
      <DemoBlock :code="frontmatter" stack />
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';

const frontmatter = `---
name: rebuild-app-with-ds
description: Migre une application existante vers @tom/design-system. À utiliser
  pour auditer les écarts d'une codebase, mapper les anciens composants vers ceux
  du design system et planifier une migration incrémentale sans régression.
---`;
</script>
