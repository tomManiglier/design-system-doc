# design-system-docs

Site de documentation du design system `@tom/design-system`, avec recherche (⌘K) et bascule thème clair/sombre.

- **Démarrer** — introduction, getting started, contribution, changelog.
- **Fondations** — couleurs, typographie, espacement, grille & layout, bordures & ombres, iconographie, motion, contenu UX.
- **Composants** — une page par composant : variantes, démos live, états, accessibilité, table de props, statut (`draft` / `beta` / `stable` / `deprecated`).
- **Patterns** — 9 assemblages réels : formulaire, recherche & filtres, tableau riche, états vides, états d'erreur, confirmation de suppression, Dialog ou Drawer, navigation, feedback.
- **Agents** — contrat commun, agents de construction et de migration, catalogue et cas de test (définitions dans [`agents/`](agents/)).

Ce projet consomme la bibliothèque comme un client externe, en important les composants Vue bruts :

```ts
import { BaseButton } from '@tom/design-system/vue';
import '@tom/design-system/styles.css';
```

## Stack

- Vue 3 (Composition API, `<script setup>`)
- Vue Router 4 (mode `history`)
- Webpack 5 (config `common` / `dev` / `prod`)
- SCSS (Dart Sass)

## Développement local avec le dépôt de la lib à côté

Le `package.json` de ce dépôt pointe vers un tarball local du package :

```json
"@tom/design-system": "file:./tom-design-system-0.1.0.tgz"
```

Pour régénérer ce tarball depuis `../lib` (nécessaire à chaque changement de composant ou de token) :

```bash
cd ../lib
npm run build
npm pack --pack-destination ../doc
```

Puis, côté `doc` :

```bash
npm install
```

Dans un vrai dépôt séparé (sans `../lib` à côté), remplace cette dépendance par :

- une version publiée du registre privé, ou
- un tarball généré par `npm pack` et commité tel quel (comme actuellement)

## Scripts

```bash
npm install
npm run dev        # http://localhost:5181 avec hot reload-
npm run build       # build de production dans dist/
npm run typecheck   # vue-tsc --noEmit
npm run serve       # sert dist/ (utilisé par l'image Docker)
```

> Le mode `history` de vue-router nécessite qu'en production, le serveur redirige toutes les routes inconnues vers `index.html` (réécriture d'URL côté serveur) — `server.js` le fait déjà, comme `devServer.historyApiFallback` en dev.

## Image Docker

```bash
docker build -t tom-design-system-doc .
docker run --rm -p 5181:5181 tom-design-system-doc
```

L'image construit le site puis sert `dist/` sur le port `5181`.
Elle est pensée pour être construite et exécutée indépendamment du reste du dépôt.

## Ajouter une page

1. Créer la vue dans `src/views/docs/` (composants et fondations) ou `src/views/docs/patterns/`.
2. Déclarer la route dans `src/router/index.ts`.
3. Ajouter l'entrée dans `src/components/docs/nav.ts` — source unique de la sidebar **et** de la recherche ⌘K.

La structure attendue d'une page composant (description, exemples, États, Accessibilité, Props) et les conventions de nommage sont décrites sur la page `Contribution` du site.

## Agents

Le dossier [`agents/`](agents/) contient les définitions des agents du design system, au format des sous-agents Claude Code. Pour les utiliser dans un projet :

```bash
cp -r agents/. /chemin/vers/mon-projet/.claude/agents/
```

`agents/_contract.md` porte le contrat commun (formats d'échange et checklists) référencé par tous les autres.
