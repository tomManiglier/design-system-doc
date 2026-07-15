<template>
  <DocPage
    eyebrow="Agents"
    title="Agents du design system"
    description="Des instructions prêtes à l'emploi pour Claude Code, pour qu'il utilise ce design system au lieu d'inventer son propre style."
  >
    <section class="doc-section">
      <h2>En bref</h2>
      <p>
        Un agent est un fichier d'instructions pour <strong>Claude Code</strong> (l'outil en ligne
        de commande d'Anthropic). Une fois installé dans un projet, il apprend à l'IA à se servir
        de ce design system - ses composants, ses tokens, ses règles - plutôt que d'improviser sa
        propre mise en page à chaque demande.
      </p>
      <p>
        <strong>Exemple concret :</strong> vous demandez « crée une page de connexion ». Sans
        agent, Claude Code invente sa propre mise en page et son propre CSS. Avec l'agent
        <code>build-app-with-ds</code>, il compose l'écran avec
        <router-link class="doc-link" to="/docs/field">Field</router-link>,
        <router-link class="doc-link" to="/docs/input">Input</router-link> et
        <router-link class="doc-link" to="/docs/button">Button</router-link> - les vrais
        composants de ce site - en respectant les <router-link class="doc-link" to="/docs/fondations">fondations</router-link>.
      </p>
      <p>
        Chaque agent a un rôle précis : certains construisent, d'autres auditent une application
        existante ou relisent une page avant sa mise en ligne. Ce qu'ils ne font jamais : inventer
        une solution locale quand le design system a un manque - ils le signalent à la place.
      </p>
    </section>

    <section class="doc-section">
      <h2>Les deux agents principaux</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead>
            <tr><th>Agent</th><th>Point de départ</th><th>Produit</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><router-link class="doc-link" to="/agents/build-app"><code>build-app-with-ds</code></router-link></td>
              <td>Un besoin métier, pas de code existant</td>
              <td>Une application neuve : arborescence, routes, écrans composés</td>
            </tr>
            <tr>
              <td><router-link class="doc-link" to="/agents/rebuild-app"><code>rebuild-app-with-ds</code></router-link></td>
              <td>Une codebase existante hétérogène</td>
              <td>Un audit des écarts et un plan de migration incrémental</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="doc-section">
      <h2>Agents complémentaires</h2>
      <p>
        Six agents plus ciblés couvrent l'audit, la revue, la documentation et l'alignement du
        contenu - détaillés dans le <router-link class="doc-link" to="/agents/catalog">catalogue</router-link> :
      </p>
      <ul class="doc-list">
        <li><code>audit-app-against-ds</code> - lister les écarts d'une application au design system.</li>
        <li><code>review-ui-consistency</code> - relire une page ou une feature avant merge.</li>
        <li><code>write-ds-docs</code> - rédiger ou compléter la doc d'un composant ou d'un pattern.</li>
        <li><code>extract-patterns-from-app</code> - repérer les patterns récurrents à intégrer au système.</li>
        <li><code>propose-missing-components</code> - identifier les manques à partir d'un besoin métier.</li>
        <li><code>migrate-content-to-ds-guidelines</code> - aligner labels, boutons et messages sur les règles de contenu.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Installer les agents</h2>
      <p>
        Il faut <strong>Claude Code</strong> (l'outil en ligne de commande d'Anthropic) installé
        sur le projet où vous voulez les utiliser. Les fichiers d'instructions vivent dans
        <code>agents/</code> à la racine de ce dépôt de documentation ; il suffit de copier le
        dossier dans <code>.claude/agents/</code> du projet cible :
      </p>
      <DemoBlock :code="installCode" stack />
      <p>
        Une fois copiés, demandez simplement à Claude Code d'utiliser l'agent voulu, en langage
        naturel - comme dans l'exemple de commande ci-dessus. Leur qualité se mesure avec les
        <router-link class="doc-link" to="/agents/test-cases">cas de test</router-link> et la
        grille d'évaluation associée.
      </p>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';

const installCode = `# depuis le dépôt design-system-doc
cp -r agents/. /chemin/vers/mon-projet/.claude/agents/

# puis, dans le projet :
# « Utilise l'agent build-app-with-ds pour créer un dashboard de suivi qualité »`;
</script>
