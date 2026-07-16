# design-system-docs

Site de documentation du design system `@tommaniglier/design-system-lib`, avec recherche (⌘K) et bascule thème clair/sombre.

- **Démarrer** — introduction, getting started, contribution, changelog.
- **Fondations** — couleurs, typographie, espacement, grille & layout, bordures & ombres, iconographie, motion.
- **Composants** — une page par composant : variantes, démos live, états, accessibilité, table de props, statut (`draft` / `beta` / `stable` / `deprecated`).
- **Patterns** (`/patterns`) — 6 assemblages réels : formulaire, recherche & filtres, tableau riche, états vides, états d'erreur, notifications & feedback.
- **Agents** (`/agents`) — contrat commun, agents de construction et de migration, catalogue et cas de test (définitions dans [`agents/`](agents/)).

Ce projet consomme la bibliothèque comme un client externe, en important les composants Vue bruts :

```ts
import { BaseButton } from '@tommaniglier/design-system-lib/vue';
import '@tommaniglier/design-system-lib/styles.css';
```

## Stack

- Vue 3 (Composition API, `<script setup>`)
- Vue Router 4 (mode `history`)
- Webpack 5 (config `common` / `dev` / `prod`)
- SCSS (Dart Sass)

## Installer la bibliothèque (GitHub Packages)

`@tommaniglier/design-system-lib` est publié sur GitHub Packages, qui exige une authentification
pour installer un paquet même public. Configurer npm une fois, globalement :

```
# ~/.npmrc
@tommaniglier:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<token GitHub avec le scope read:packages>
```

Puis, dans ce dépôt :

```bash
npm install
```

Après un changement dans la lib : monter sa version, `npm publish` depuis `design-system-lib`,
puis ici `npm install @tommaniglier/design-system-lib@dernière-version`.

## Scripts

```bash
npm install
npm run dev        # http://localhost:5181 avec hot reload
npm run build       # build de production dans dist/
npm run typecheck   # vue-tsc --noEmit
npm run serve       # sert dist/ (utilisé par l'image Docker)
```

> Le mode `history` de vue-router nécessite qu'en production, le serveur redirige toutes les routes inconnues vers `index.html` (réécriture d'URL côté serveur) — `server.js` le fait déjà, comme `devServer.historyApiFallback` en dev.

## Image Docker

Le build a besoin du même token GitHub Packages que l'installation locale, monté comme secret
BuildKit (jamais copié dans une couche de l'image) :

```bash
DOCKER_BUILDKIT=1 docker build --secret id=npmrc,src=$HOME/.npmrc -t design-system-doc .
docker run --rm -p 5181:5181 design-system-doc
```

L'image construit le site puis sert `dist/` sur le port `5181`.
Elle est pensée pour être construite et exécutée indépendamment du reste du dépôt.

## Ajouter une page

1. Créer la vue dans `src/views/docs/` (composants et fondations), `src/views/patterns/` ou `src/views/agents/`.
2. Déclarer la route dans `src/router/index.ts`.
3. Ajouter l'entrée dans `src/components/docs/nav.ts` — source unique de la sidebar **et** de la recherche ⌘K (`docsNav`, `patternsNav` ou `agentsNav` selon la section).

La structure attendue d'une page composant (description, exemples, États, Accessibilité, Props) et les conventions de nommage sont décrites sur la page `Contribution` du site.

## Agents

Le dossier [`agents/`](agents/) contient les définitions des agents du design system, au format des sous-agents Claude Code. Pour les utiliser dans un projet :

```bash
cp -r agents/. /chemin/vers/mon-projet/.claude/agents/
```

`agents/_contract.md` porte le contrat commun (formats d'échange et checklists) référencé par tous les autres.
