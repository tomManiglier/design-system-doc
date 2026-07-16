<template>
  <DocPage
    eyebrow="Démarrer"
    title="Introduction"
    description="Un ensemble de composants cohérents, accessibles et fidèles à une charte graphique unifiée."
  >
    <section class="doc-section">
      <h2>Philosophie</h2>
      <p>
        Ce design system regroupe les composants et les règles nécessaires pour construire des
        écrans cohérents, sans repartir de zéro à chaque fois. Les couleurs, tailles de texte,
        espacements et rayons sont des <code>tokens</code> : des valeurs partagées, réutilisées
        partout de la même façon.
      </p>
      <p>
        Le style reste sobre : des composants simples et lisibles, avec deux touches de marque -
        le dégradé rose&nbsp;→&nbsp;violet et le cercle dégradé.
      </p>
    </section>

    <section class="doc-section">
      <h2>Principes</h2>
      <p>
        <strong>Cohérence</strong> - tous les composants utilisent les mêmes tokens.<br />
        <strong>Accessibilité</strong> - clavier, lecteurs d'écran et contrastes fonctionnent par défaut.<br />
        <strong>Simplicité</strong> - peu de props, un usage prévisible.
      </p>
    </section>

    <section class="doc-section">
      <h2>Stack technique</h2>
      <p>
        Vue&nbsp;3 et TypeScript. La bibliothèque s'installe en npm et fonctionne aussi bien dans
        une application Vue que dans un site Twig/HTML classique — voir
        <router-link class="doc-link" to="/docs/getting-started">Getting Started</router-link>.
      </p>
    </section>

    <section class="doc-section">
      <h2>Comment est organisée cette documentation</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Section</th><th>Ce qu'on y trouve</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Démarrer</strong></td>
              <td>
                <router-link class="doc-link" to="/docs/getting-started">Installation</router-link>,
                <router-link class="doc-link" to="/docs/contribution">contribution</router-link>,
                <router-link class="doc-link" to="/docs/changelog">changelog</router-link>.
              </td>
            </tr>
            <tr>
              <td><strong>Fondations</strong></td>
              <td>
                Les règles de base : <router-link class="doc-link" to="/docs/fondations">couleurs</router-link>,
                <router-link class="doc-link" to="/docs/typography">typographie</router-link>,
                <router-link class="doc-link" to="/docs/spacing">espacement</router-link>,
                <router-link class="doc-link" to="/docs/grid">grille</router-link>,
                <router-link class="doc-link" to="/docs/borders">bordures &amp; ombres</router-link>,
                <router-link class="doc-link" to="/docs/iconography">iconographie</router-link>,
                <router-link class="doc-link" to="/docs/motion">motion</router-link>.
              </td>
            </tr>
            <tr>
              <td><strong>Composants</strong></td>
              <td>Une page par composant : variantes, états, accessibilité, props.</td>
            </tr>
            <tr>
              <td><strong><router-link class="doc-link" to="/patterns">Patterns</router-link></strong></td>
              <td>
                Comment assembler plusieurs composants pour un cas concret : formulaire, tableau,
                états vides…
              </td>
            </tr>
            <tr>
              <td><strong><router-link class="doc-link" to="/agents">Agents</router-link></strong></td>
              <td>Des agents qui construisent et migrent des applications avec ce système.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="doc-section">
      <h2>Par où commencer</h2>
      <ul class="doc-list">
        <li><strong>Vous intégrez la lib</strong> — <router-link class="doc-link" to="/docs/getting-started">Getting Started</router-link>, puis la page du composant qui vous intéresse.</li>
        <li><strong>Vous concevez un écran</strong> — les <router-link class="doc-link" to="/docs/fondations">fondations</router-link>, puis les <router-link class="doc-link" to="/patterns">patterns</router-link>.</li>
        <li><strong>Vous cherchez quelque chose de précis</strong> — <kbd>⌘K</kbd> / <kbd>Ctrl K</kbd>.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
</script>
