# design-system-docs

Squelette de dépôt séparé pour la documentation de `@tom/design-system`.

Ce projet consomme la bibliothèque comme un client externe :

```ts
import '@tom/design-system/styles.css';
import '@tom/design-system/register';
```

## Développement local avec le dépôt de la lib à côté

Le `package.json` de ce template pointe vers un tarball local du package :

```json
"@tom/design-system": "file:./tom-design-system-0.1.0.tgz"
```

Pour régénérer ce tarball depuis `../lib` :

```bash
cd ../lib
npm pack --pack-destination ../doc
```

Pour utiliser ce tarball sans relancer `npm install`, il suffit de l'extraire dans `node_modules` :

```bash
mkdir -p node_modules/@tom/design-system
tar -xzf tom-design-system-0.1.0.tgz -C node_modules/@tom/design-system --strip-components=1 package
```

Dans un vrai dépôt séparé, remplace ensuite cette dépendance par :

- une version publiée du registre privé, ou
- un `file:` adapté à ton arborescence locale, ou
- un tarball généré par `npm pack`

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Image Docker

```bash
docker build -t tom-design-system-doc .
docker run --rm -p 5181:5181 tom-design-system-doc
```

L'image construit le site puis sert `dist/` sur le port `5181`.

## Objectif

- documenter la lib avec ses vrais points d'entrée publics
- vérifier l'intégration réelle hors Vue
- montrer l'usage HTML simple et l'injection de props complexes via TypeScript
