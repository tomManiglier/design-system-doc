<template>
  <DocPage
    eyebrow="Agents"
    title="Catalogue"
    description="Six agents complémentaires pour auditer, relire, documenter et faire évoluer le design system au contact des applications réelles."
  >
    <section class="doc-section">
      <h2>audit-app-against-ds</h2>
      <p>Auditer une application existante et lister ses écarts au design system, sans rien modifier.</p>
      <ul class="doc-list">
        <li><strong>Entrées</strong> - chemin de la codebase, périmètre à auditer, profondeur attendue.</li>
        <li><strong>Sorties</strong> - écarts classés par sévérité (bloquant / important / cosmétique), avec fichier, ligne et règle enfreinte ; volumétrie de la dette.</li>
        <li><strong>Décision</strong> - mesurer, jamais corriger : la correction relève de <code>rebuild-app-with-ds</code>.</li>
        <li><strong>Validation</strong> - chaque écart cite la règle du design system qu'il enfreint ; aucun écart inventé.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>review-ui-consistency</h2>
      <p>Relire une page ou une feature avant merge et vérifier sa cohérence UI/UX avec le système.</p>
      <ul class="doc-list">
        <li><strong>Entrées</strong> - diff ou fichiers concernés, intention de la feature.</li>
        <li><strong>Sorties</strong> - remarques ordonnées par importance, chacune actionnable, avec le correctif suggéré.</li>
        <li><strong>Décision</strong> - distinguer ce qui enfreint une règle de ce qui est une préférence ; ne remonter que le premier, sauf demande explicite.</li>
        <li><strong>Validation</strong> - les trois checklists du <router-link class="doc-link" to="/agents/contract">contrat</router-link> ; pas de remarque sans référence à une règle.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>write-ds-docs</h2>
      <p>Rédiger ou compléter la page de documentation d'un composant ou d'un pattern.</p>
      <ul class="doc-list">
        <li><strong>Entrées</strong> - composant ou pattern visé, source (code du composant), sections manquantes.</li>
        <li><strong>Sorties</strong> - une page <code>*Doc.vue</code> suivant la structure standard : description, exemples, États, Accessibilité, Props.</li>
        <li><strong>Décision</strong> - documenter ce que le code fait réellement, jamais ce qu'il devrait faire ; un manque constaté est signalé, pas documenté comme existant.</li>
        <li><strong>Validation</strong> - props exactes vérifiées dans la source, démos qui compilent, français, conventions de <router-link class="doc-link" to="/docs/contribution">Contribution</router-link>.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>extract-patterns-from-app</h2>
      <p>Repérer dans une application les assemblages récurrents qui mériteraient de devenir des patterns.</p>
      <ul class="doc-list">
        <li><strong>Entrées</strong> - codebase, seuil de récurrence (par défaut : 3 occurrences).</li>
        <li><strong>Sorties</strong> - patterns candidats avec occurrences, variantes observées et proposition de forme canonique.</li>
        <li><strong>Décision</strong> - un assemblage n'est un pattern que s'il porte une décision UX réutilisable, pas s'il est juste répété.</li>
        <li><strong>Validation</strong> - chaque candidat cite ses occurrences réelles ; les divergences entre occurrences sont explicitées.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>propose-missing-components</h2>
      <p>Identifier les composants ou patterns manquants à partir d'un besoin métier.</p>
      <ul class="doc-list">
        <li><strong>Entrées</strong> - besoin ou écran à couvrir, contraintes métier.</li>
        <li><strong>Sorties</strong> - pour chaque manque : ce qui existe de plus proche, pourquoi c'est insuffisant, API proposée, coût estimé.</li>
        <li><strong>Décision</strong> - épuiser la composition avant de proposer un ajout ; une variante manquante n'est pas un nouveau composant.</li>
        <li><strong>Validation</strong> - chaque proposition démontre que l'existant ne suffit pas, et respecte les conventions de nommage.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>migrate-content-to-ds-guidelines</h2>
      <p>Aligner labels, boutons, placeholders et messages sur les règles de contenu UX.</p>
      <ul class="doc-list">
        <li><strong>Entrées</strong> - fichiers ou écrans concernés, glossaire métier si existant.</li>
        <li><strong>Sorties</strong> - table avant / après par chaîne, avec la règle appliquée ; incohérences de terminologie signalées.</li>
        <li><strong>Décision</strong> - ne pas toucher au vocabulaire métier établi ; corriger la forme, pas le fond.</li>
        <li><strong>Validation</strong> - chaque réécriture cite la règle qui la justifie ; aucune chaîne changée sans raison.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Points communs</h2>
      <p>
        Tous suivent le <router-link class="doc-link" to="/agents/contract">contrat commun</router-link> :
        format d'entrée et de sortie standard, checklists de conformité, et remontée des manques
        plutôt que contournement local. Leurs définitions vivent dans <code>agents/</code>.
      </p>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
</script>
