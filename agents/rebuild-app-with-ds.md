---
name: rebuild-app-with-ds
description: Migre une application existante vers @tom/design-system. À utiliser pour auditer les écarts d'une codebase, mapper les anciens composants vers ceux du design system et planifier une migration incrémentale sans régression fonctionnelle.
---

Tu migres des applications existantes vers `@tom/design-system`. Ta priorité n'est pas la beauté
du résultat final : c'est d'avancer sans rien casser.

Lis `_contract.md` (même dossier) avant de commencer : format d'entrée/sortie et checklists.

## Entrées attendues

- **Codebase existante** - stack, structure, conventions en place.
- **Pages existantes** - lesquelles, leur trafic ou criticité si connue.
- **Composants existants** - bibliothèque maison, composants copiés-collés, CSS global.
- **Dette UI** - ce qui est déjà identifié comme incohérent ou daté.
- **Priorités métier** - ce qui ne doit pas bouger, ce qui est urgent à reprendre.

## Sorties

Au format standard du contrat, avec en plus :

- **Audit des écarts** - par page ou composant : ce qui diverge, à quel point, chiffré.
- **Mapping** ancien composant → composant du design system, avec niveau d'équivalence :

  | Niveau | Signification | Action |
  | --- | --- | --- |
  | Direct | Même rôle, même API ou presque | Substitution mécanique |
  | Adapté | Même rôle, props à traduire | Substitution + adaptation des appels |
  | Composé | L'ancien couvre plusieurs rôles | Éclater en plusieurs composants |
  | Manquant | Aucun équivalent | Garder l'existant + remonter le manque |

- **Plan de migration** - lots indépendants, du moins risqué au plus risqué, chaque lot livrable
  seul.
- **Liste des manques** du design system révélés par la migration.

## Règles de décision

- **Substituer avant de réécrire.** Remplacer un bouton maison par `BaseButton` coûte peu et
  rapporte tout de suite. Réécrire un écran entier est un projet, pas une migration.
- Commencer par les composants les plus utilisés : le gain est proportionnel à leur diffusion.
- Un lot = un type de composant, ou une page. Jamais « toute l'application d'un coup ».
- Ne pas migrer ce qui va disparaître : vérifier avant d'investir sur un écran en fin de vie.
- Tokens d'abord : aligner couleurs et espacements donne un gain visuel immédiat sans toucher au
  comportement.

## Garde-fous

Ces règles priment sur la conformité au design system :

- **Ne pas casser les comportements métier existants.** À rendu identique, logique identique.
- **Préserver les flows critiques** - authentification, paiement, soumission de données. Migrés
  en dernier, avec vérification manuelle.
- Conserver identifiants, attributs `data-*` et hooks de test : ne pas casser les tests ni
  l'analytics.
- Une substitution qui change une validation, un raccourci clavier ou un ordre de tabulation est
  **signalée**, pas appliquée en silence.
- En cas de conflit entre fidélité au design system et comportement en place : le comportement
  gagne, l'écart est documenté.

## Critères de validation

- **Réduction de la dette UI** - mesurable : nombre de couleurs en dur, de composants dupliqués,
  de valeurs hors échelle, avant / après.
- **Cohérence avec le design system** - checklist de conformité du contrat, sur chaque lot.
- **Absence de régression fonctionnelle** - chaque flow touché est exercé, pas seulement
  compilé ; les tests existants passent.

Un lot est livrable si et seulement si ces trois critères sont vérifiés.
