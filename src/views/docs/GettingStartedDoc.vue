<template>
  <DocPage
    eyebrow="Démarrer"
    title="Getting Started"
    description="Installer @tommaniglier/design-system-lib et l'utiliser dans une appli Vue, un site Twig/HTML ou du SCSS."
  >
    <section class="doc-section">
      <h2>Installation</h2>
      <p>
        Le package est publié sur <strong>GitHub Packages</strong> sous
        <code>@tommaniglier/design-system-lib</code>. GitHub Packages demande une authentification
        pour installer un paquet, même public : créer un token d'accès personnel avec le scope
        <code>read:packages</code> (<code>github.com/settings/tokens</code>), puis indiquer à npm
        où trouver ce scope avant d'installer.
      </p>
      <DemoBlock :code="installCode" stack />
      <p>
        Placer le <code>.npmrc</code> dans <code>~/.npmrc</code> (global) plutôt qu'à la racine du
        projet évite de committer le token par erreur.
      </p>
    </section>

    <section class="doc-section">
      <h2>Dans une appli Vue 3</h2>
      <p>
        Importer les styles globaux une fois (tokens + reset), puis les composants à l'unité
        depuis l'export <code>/vue</code> :
      </p>
      <DemoBlock :code="vueCode" stack />
      <p>
        <code>vue</code> est une peer dependency : c'est votre application qui fournit Vue,
        le package ne l'embarque pas.
      </p>
    </section>

    <section class="doc-section">
      <h2>Dans un site Twig / HTML</h2>
      <p>
        L'export <code>/register</code> enregistre tous les composants comme custom elements
        <code>&lt;ds-*&gt;</code>, utilisables dans n'importe quel HTML sans Vue :
      </p>
      <DemoBlock :code="twigCode" stack />
      <p>
        Les custom elements sont enregistrés sans shadow DOM : leurs styles ne sont pas
        encapsulés et doivent être présents dans le document. <code>register.css</code> est
        donc obligatoire — sans lui, les <code>&lt;ds-*&gt;</code> s'affichent sans style.
      </p>
      <p>
        Les composants à données structurées (tabs, table, chart…) se pilotent en assignant
        leurs propriétés depuis TypeScript sur l'élément récupéré au <code>querySelector</code>.
      </p>
    </section>

    <section class="doc-section">
      <h2>Tokens en SCSS</h2>
      <DemoBlock :code="scssCode" stack />
      <p>
        Tous les tokens sont aussi disponibles comme variables CSS (<code>--color-*</code>,
        <code>--space-*</code>, <code>--radius-*</code>, <code>--duration-*</code>) une fois
        <code>styles.css</code> chargé - voir
        <router-link class="doc-link" to="/docs/fondations">Couleurs</router-link> et
        <router-link class="doc-link" to="/docs/spacing">Espacement</router-link>.
      </p>
    </section>

    <section class="doc-section">
      <h2>Thème clair / sombre</h2>
      <p>
        Le thème se pilote par l'attribut <code>data-theme</code> sur <code>&lt;html&gt;</code>.
        Sans attribut, le thème clair s'applique ; <code>data-theme="dark"</code> bascule
        tous les tokens sémantiques :
      </p>
      <DemoBlock :code="themeCode" stack />
    </section>

    <section class="doc-section">
      <h2>Polices</h2>
      <p>
        Le design system attend <strong>Quicksand</strong> (titres) et
        <strong>Roboto</strong> (complémentaire) ; Helvetica vient du système. Le plus simple
        est de passer par Fontsource dans votre application :
      </p>
      <DemoBlock :code="fontsCode" stack />
    </section>

    <section class="doc-section">
      <h2>Et ensuite</h2>
      <ul class="doc-list">
        <li>Parcourir les <router-link class="doc-link" to="/docs/fondations">fondations</router-link> pour comprendre tokens et règles d'usage.</li>
        <li>Composer des écrans avec les <router-link class="doc-link" to="/patterns/form">patterns</router-link> plutôt qu'en partant de zéro.</li>
        <li>Contribuer ? Voir la page <router-link class="doc-link" to="/docs/contribution">Contribution</router-link>.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';

const installCode = `# ~/.npmrc
@tommaniglier:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=VOTRE_TOKEN_GITHUB

# puis, dans le projet
npm install @tommaniglier/design-system-lib`;

const vueCode = `// main.ts
import '@tommaniglier/design-system-lib/styles.css';

// dans un composant
import { BaseButton, BaseField, BaseInput } from '@tommaniglier/design-system-lib/vue';`;

const twigCode = `import '@tommaniglier/design-system-lib/styles.css';   // tokens + reset
import '@tommaniglier/design-system-lib/register.css'; // styles des composants
import '@tommaniglier/design-system-lib/register';     // enregistre les <ds-*>

// puis, dans le template Twig :
// <ds-button variant="primary">Valider</ds-button>
// <ds-alert variant="info" title="Mise à jour">Contenu</ds-alert>`;

const scssCode = `@use '@tommaniglier/design-system-lib/scss/tokens.scss' as *;`;

const themeCode = `// à l'initialisation, avant le montage de l'app
const stored = localStorage.getItem('ds-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.setAttribute(
  'data-theme',
  stored ?? (prefersDark ? 'dark' : 'light'),
);`;

const fontsCode = `npm install @fontsource/quicksand @fontsource/roboto

// main.ts
import '@fontsource/quicksand/700.css';
import '@fontsource/roboto/400.css';`;
</script>
