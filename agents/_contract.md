# Contrat commun des agents du design system

Ce fichier est référencé par tous les agents de ce dossier. Il n'est pas un agent lui-même.

## Ressource de référence

Le design system `@tom/design-system` :

- **Composants** - 39 composants `Base*` (Vue) / `ds-*` (custom elements). Liste complète dans
  `lib/src/lib/registry.ts` du dépôt `design-system-lib`.
- **Tokens** - `--color-*`, `--space-*` (base 4), `--radius-*`, `--shadow-*`, `--text-*`,
  `--font-*`, `--duration-*`, `--ease-*`.
- **Patterns** - formulaire, recherche & filtres, tableau riche, états vides, états d'erreur,
  confirmation de suppression, Dialog vs Drawer, navigation, feedback.
- **Contenu UX** - règles de rédaction des labels, boutons, placeholders, erreurs, confirmations.

La documentation complète est le dépôt `design-system-doc` (site de doc).

## Format d'entrée standard

```
## Contexte
- Projet : <nom, stack, contraintes techniques>
- Cible métier : <qui utilise, pour quoi faire>
- Périmètre : <écrans / features concernés>

## Demande
- Objectif : <ce qui doit exister à la fin>
- Contraintes : <délais, existant à préserver, non-négociables>
- Priorités : <ce qui compte le plus si arbitrage>

## Ressources
- Design system : @tom/design-system
- Codebase : <chemins pertinents, ou "aucune">
- Données : <schémas, exemples, ou "à inventer">
```

Un champ inconnu est marqué `inconnu` - jamais deviné. Si un champ manquant bloque le travail,
demander avant de produire.

## Format de sortie standard

```
## Résumé
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
<ce qui reste à faire, dans l'ordre>
```

## Checklist de conformité design system

- [ ] Aucune couleur, taille de police, rayon ou durée en dur : uniquement des tokens.
- [ ] Aucun composant réécrit localement s'il existe dans la bibliothèque.
- [ ] Espacements issus de l'échelle en base 4.
- [ ] Assemblages conformes aux patterns documentés quand un pattern couvre le cas.
- [ ] Textes conformes aux règles de contenu UX.
- [ ] Toute dérogation listée dans « Manques identifiés » avec justification.

## Checklist accessibilité minimale

- [ ] Tout élément interactif atteignable au clavier, ordre logique, focus visible.
- [ ] Tout champ a un label visible et associé ; erreurs annoncées (`role="alert"`).
- [ ] Icône seule interactive : `aria-label` ; icône décorative : `aria-hidden`.
- [ ] Contrastes 4.5:1 (texte) et 3:1 (éléments d'interface).
- [ ] Surfaces modales : fermeture par Échap, focus rendu au déclencheur.
- [ ] Le sens n'est jamais porté par la seule couleur.
- [ ] Animations respectant `prefers-reduced-motion`.

## Checklist responsive minimale

- [ ] Aucun débordement horizontal de 320px à 1440px+.
- [ ] Points de rupture respectés : 560px, 820px, 900px, 1280px.
- [ ] Tableaux qui défilent dans leur conteneur.
- [ ] Cibles tactiles ≥ 36px, espacées d'au moins 8px.
- [ ] Navigation atteignable sur mobile.

## Créer un nouveau composant : cas autorisés

| Situation | Décision |
| --- | --- |
| Le composant existe | L'utiliser tel quel |
| Composition d'existants possible | Composer ; proposer un pattern si récurrent |
| Diffère par un détail visuel | Ne rien créer, signaler le manque de variante |
| Absent et local à un écran | Composant local, non présenté comme du design system |
| Absent et récurrent (≥ 2 écrans/projets) | Créer localement **et** proposer l'ajout à la bibliothèque |

## Quand remonter un manque plutôt que contourner

- Un token nécessaire n'existe pas.
- Un composant est presque adapté mais manque d'une variante ou d'un état.
- Deux règles du design system se contredisent sur le cas traité.
- Respecter le système dégraderait un comportement métier existant.
- Un besoin d'accessibilité n'est pas couvert par le composant fourni.

Format de remontée : ce qui manque, où le besoin est apparu, ce qui a été fait en attendant,
et l'impact si rien n'est ajouté.
