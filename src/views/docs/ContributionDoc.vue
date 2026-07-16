<template>
  <DocPage
    eyebrow="Démarrer"
    title="Contribution"
    description="Comment enrichir la bibliothèque et sa documentation : conventions de nommage, statuts, structure d'une page composant."
  >
    <section class="doc-section">
      <h2>Deux dépôts</h2>
      <ul class="doc-list">
        <li><code>design-system-lib</code> - la bibliothèque : composants Vue, custom elements, tokens.</li>
        <li><code>design-system-doc</code> - ce site : une page par composant, les fondations, les patterns.</li>
        <li>La doc consomme <code>@tommaniglier/design-system-lib</code> depuis npm, comme n'importe quel projet externe. Après un changement dans la lib : monter la version, <code>npm publish</code>, puis côté doc mettre à jour la dépendance (<code>npm install @tommaniglier/design-system-lib@dernière-version</code>).</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Conventions de nommage</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Objet</th><th>Convention</th><th>Exemple</th></tr>
          </thead>
          <tbody>
            <tr><td>Composant Vue</td><td><code>Base*</code>, PascalCase</td><td><code>BaseDatetimePicker.vue</code></td></tr>
            <tr><td>Custom element</td><td><code>ds-*</code>, kebab-case</td><td><code>&lt;ds-datetime-picker&gt;</code></td></tr>
            <tr><td>Token</td><td><code>--famille-nom</code>, kebab-case</td><td><code>--color-muted-foreground</code>, <code>--space-4</code></td></tr>
            <tr><td>Page de doc</td><td><code>*Doc.vue</code></td><td><code>DatetimePickerDoc.vue</code></td></tr>
            <tr><td>Route de doc</td><td>kebab-case, nom du composant</td><td><code>/docs/datetime-picker</code></td></tr>
            <tr><td>Pattern</td><td>kebab-case sous <code>/patterns/</code></td><td><code>/patterns/empty-states</code></td></tr>
            <tr><td>Prop de variante</td><td><code>variant</code>, valeurs kebab-case</td><td><code>variant="destructive-outline"</code></td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="doc-section">
      <h2>Statuts de composants</h2>
      <p>Chaque page composant affiche un statut à côté de son titre :</p>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Statut</th><th>Signification</th><th>Engagement</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Draft</strong></td><td>En cours de conception, API instable.</td><td>Ne pas utiliser en production.</td></tr>
            <tr><td><strong>Beta</strong></td><td>Utilisable, API susceptible d'évoluer.</td><td>Changements signalés dans le changelog.</td></tr>
            <tr><td><strong>Stable</strong></td><td>API garantie.</td><td>Toute rupture passe par une dépréciation.</td></tr>
            <tr><td><strong>Deprecated</strong></td><td>Remplacé ou abandonné.</td><td>Alternative indiquée sur la page.</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="doc-section">
      <h2>Ajouter un composant</h2>
      <ul class="doc-list">
        <li>1. Créer <code>BaseX.vue</code> dans <code>lib/src/components/ui/</code>, avec seulement des styles à base de tokens, un focus visible et les bons rôles ARIA.</li>
        <li>2. L'ajouter dans <code>registry.ts</code> (custom element) et <code>vue.ts</code> (export Vue), par ordre alphabétique.</li>
        <li>3. Reconstruire la lib, puis créer la page <code>XDoc.vue</code> côté doc.</li>
        <li>4. Ajouter la route dans <code>router/index.ts</code> et l'entrée dans <code>components/docs/nav.ts</code>.</li>
        <li>5. Commencer en statut <code>draft</code> ou <code>beta</code>, jamais <code>stable</code> dès le départ.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Structure d'une page composant</h2>
      <p>Toujours dans le même ordre, pour que les pages se ressemblent :</p>
      <ul class="doc-list">
        <li>1. <strong>Description</strong> - le rôle du composant en une phrase.</li>
        <li>2. <strong>Variantes / exemples</strong> - des démos avec le code à côté.</li>
        <li>3. <strong>États</strong> - ce que le composant peut montrer (survol, désactivé, chargement...).</li>
        <li>4. <strong>Accessibilité</strong> - clavier, rôles ARIA, règles de label.</li>
        <li>5. <strong>Props</strong> - la liste des propriétés.</li>
      </ul>
      <p>
        Le texte reste en français, orienté usage, avec des exemples réalistes plutôt que
        « Lorem ipsum ».
      </p>
    </section>

    <section class="doc-section">
      <h2>Quand créer un nouveau composant ?</h2>
      <ul class="doc-list">
        <li>D'abord vérifier qu'assembler des composants existants ne suffit pas (voir les <router-link class="doc-link" to="/patterns/form">patterns</router-link>).</li>
        <li>Un besoin qui revient sur au moins deux écrans ou deux projets justifie un composant ; un besoin unique reste local.</li>
        <li>Un manque se signale (issue sur <code>design-system-lib</code>) plutôt que d'être contourné par du style ad hoc.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
</script>
