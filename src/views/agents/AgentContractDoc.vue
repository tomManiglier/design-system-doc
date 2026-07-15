<template>
  <DocPage
    eyebrow="Agents"
    title="Contrat commun"
    description="Le format d'entrée, le format de sortie et les checklists que tous les agents du design system partagent."
  >
    <section class="doc-section">
      <h2>Format d'entrée</h2>
      <p>
        Toute invocation d'agent se décrit avec les mêmes champs. Les champs absents sont
        explicitement marqués <code>inconnu</code> plutôt que devinés - un agent qui manque
        d'information la demande, il ne l'invente pas.
      </p>
      <DemoBlock :code="inputCode" stack />
    </section>

    <section class="doc-section">
      <h2>Format de sortie</h2>
      <p>
        Toute sortie d'agent commence par un résumé lisible, puis détaille les décisions et
        termine par les manques identifiés - jamais du code brut sans justification.
      </p>
      <DemoBlock :code="outputCode" stack />
    </section>

    <section class="doc-section">
      <h2>Checklist de conformité design system</h2>
      <p>À appliquer systématiquement avant de rendre une sortie :</p>
      <ul class="doc-list">
        <li>Aucune couleur, taille de police, rayon ou durée en dur : uniquement des tokens (<code>--color-*</code>, <code>--space-*</code>, <code>--radius-*</code>, <code>--duration-*</code>).</li>
        <li>Aucun composant réécrit localement s'il existe dans la bibliothèque (39 composants <code>Base*</code>).</li>
        <li>Les espacements sortent de l'échelle en base 4 - pas de <code>margin: 13px</code>.</li>
        <li>Les assemblages suivent les <router-link class="doc-link" to="/patterns/form">patterns</router-link> documentés quand un pattern existe pour le cas.</li>
        <li>Les textes suivent des règles simples : verbes d'action, pas de placeholder qui remplace un label, erreurs qui disent quoi corriger.</li>
        <li>Toute dérogation est listée dans « Manques identifiés » avec sa justification.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Checklist accessibilité minimale</h2>
      <ul class="doc-list">
        <li>Tout élément interactif est atteignable au clavier, dans un ordre logique, avec un focus visible (<code>--color-ring</code>).</li>
        <li>Tout champ a un label visible et associé ; les erreurs sont annoncées (<code>role="alert"</code>).</li>
        <li>Toute icône seule interactive porte un <code>aria-label</code> ; les icônes décoratives sont <code>aria-hidden</code>.</li>
        <li>Contrastes : 4.5:1 pour le texte, 3:1 pour les éléments d'interface.</li>
        <li>Les surfaces modales (Dialog, Drawer) se ferment avec Échap et rendent le focus à leur déclencheur.</li>
        <li>Le sens n'est jamais porté par la seule couleur (un statut a un libellé, pas qu'une pastille).</li>
        <li>Les animations respectent <code>prefers-reduced-motion</code>.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Checklist responsive minimale</h2>
      <ul class="doc-list">
        <li>Aucun débordement horizontal de 320px à 1440px+.</li>
        <li>Les points de rupture du système sont respectés : 560px, 820px, 900px, 1280px (voir <router-link class="doc-link" to="/docs/grid">Grille &amp; layout</router-link>).</li>
        <li>Les tableaux défilent dans leur conteneur, ils ne cassent pas la page.</li>
        <li>Cibles tactiles ≥ 36px de haut, espacées d'au moins <code>--space-2</code>.</li>
        <li>La navigation reste atteignable sur mobile.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Créer un nouveau composant : cas autorisés</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Situation</th><th>Décision attendue</th></tr>
          </thead>
          <tbody>
            <tr><td>Le composant existe dans la bibliothèque</td><td>L'utiliser tel quel.</td></tr>
            <tr><td>Le besoin est une composition de composants existants</td><td>Composer - et proposer un pattern si le cas est récurrent.</td></tr>
            <tr><td>Le besoin diffère par un détail visuel</td><td>Ne rien créer : signaler le manque de variante.</td></tr>
            <tr><td>Le besoin est vraiment absent et local à un écran</td><td>Créer un composant local, sans le présenter comme un composant du design system.</td></tr>
            <tr><td>Le besoin est absent et se répète (≥ 2 écrans ou projets)</td><td>Créer localement <strong>et</strong> remonter une proposition d'ajout à la bibliothèque.</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="doc-section">
      <h2>Quand remonter un manque</h2>
      <p>L'agent s'arrête et signale plutôt que de contourner dans ces cas :</p>
      <ul class="doc-list">
        <li>Un token nécessaire n'existe pas (une couleur sémantique, un palier d'espacement).</li>
        <li>Un composant existant est presque adapté mais manque d'une variante ou d'un état.</li>
        <li>Deux règles du design system se contredisent sur le cas traité.</li>
        <li>Le respect du système dégraderait un comportement métier existant.</li>
        <li>Un besoin d'accessibilité n'est pas couvert par le composant fourni.</li>
      </ul>
      <p>
        Format de remontée : ce qui manque, où le besoin est apparu, ce qui a été fait en
        attendant, et l'impact si rien n'est ajouté.
      </p>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';

const inputCode = `## Contexte
- Projet : <nom, stack, contraintes techniques>
- Cible métier : <qui utilise, pour quoi faire>
- Périmètre : <écrans / features concernés>

## Demande
- Objectif : <ce qui doit exister à la fin>
- Contraintes : <délais, existant à préserver, non-négociables>
- Priorités : <ce qui compte le plus si arbitrage>

## Ressources
- Design system : @tom/design-system (composants, tokens, patterns)
- Codebase : <chemins pertinents, ou "aucune">
- Données : <schémas, exemples, ou "à inventer">`;

const outputCode = `## Résumé
<3 à 5 lignes : ce qui a été fait, décisions structurantes>

## Livrables
<arborescence, fichiers créés/modifiés, routes>

## Décisions
| Choix | Alternative écartée | Raison |

## Conformité
- Design system : <checklist passée / écarts>
- Accessibilité : <checklist passée / écarts>
- Responsive : <checklist passée / écarts>

## Manques identifiés
<ce qui manque au design system, avec impact - vide si aucun>

## Suites
<ce qui reste à faire, dans l'ordre>`;
</script>
