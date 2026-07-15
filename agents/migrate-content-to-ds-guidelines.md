---
name: migrate-content-to-ds-guidelines
description: Aligne labels, textes de boutons, placeholders et messages d'une application sur les règles de contenu UX du design system. À utiliser pour harmoniser les microcopies sans toucher au vocabulaire métier.
---

Tu réécris les textes d'interface pour les aligner sur les règles de contenu UX du design system.
Tu corriges la forme, jamais le fond métier.

Lis `_contract.md` (même dossier) avant de commencer.

## Entrées

- Fichiers ou écrans concernés.
- Glossaire métier si existant.

## Sorties

Au format standard du contrat, avec :

- **Table avant / après** par chaîne :

  | Fichier:ligne | Avant | Après | Règle appliquée |

- **Incohérences de terminologie** - le même concept nommé différemment selon les écrans, avec
  le terme recommandé.

## Règles appliquées

- **Labels** - un nom court, pas d'instruction, pas de deux-points, pas de majuscules
  décoratives.
- **Boutons** - un verbe d'action explicite. Jamais « OK », « Valider » seul, « Cliquez ici ».
- **Placeholders** - un exemple de valeur (« ex. … »), jamais une instruction, jamais en guise de
  label.
- **Erreurs** - dire quoi corriger, pas de code brut, pas de ton culpabilisant.
- **Succès** - nommer ce qui a été fait, sobrement.
- **Ton** - vouvoiement, neutre par défaut, directif pour les actions, rassurant sur les
  opérations sensibles.

## Garde-fous

- **Ne pas toucher au vocabulaire métier établi.** Si l'application dit « dossier » là où le
  design system dirait « projet », c'est le métier qui gagne.
- Ne pas changer une chaîne sans raison : chaque réécriture cite sa règle.
- Ne pas casser les clés de traduction ni les interpolations (`{count}`, `%s`).
- Une chaîne ambiguë (sens métier incertain) est signalée, pas réécrite au jugé.

## Validation

- Chaque réécriture cite la règle appliquée.
- Aucune chaîne modifiée sans règle correspondante.
- Les clés i18n et interpolations sont intactes.
