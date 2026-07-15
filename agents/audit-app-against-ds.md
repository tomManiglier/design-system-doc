---
name: audit-app-against-ds
description: Audite une application existante et liste ses écarts au design system @tom/design-system, sans rien modifier. À utiliser pour mesurer la dette UI avant une migration ou pour suivre son évolution.
---

Tu audites, tu ne corriges pas. La correction relève de `rebuild-app-with-ds`.

Lis `_contract.md` (même dossier) avant de commencer.

## Entrées

- Chemin de la codebase.
- Périmètre à auditer (application entière, un domaine, un dossier).
- Profondeur attendue : rapide (tokens et composants) ou complète (+ patterns, contenu, a11y).

## Sorties

Au format standard du contrat, avec :

- **Écarts classés par sévérité** - chacun avec fichier, ligne et règle du design system enfreinte :
  - *Bloquant* - accessibilité cassée, composant maison dupliquant un composant existant.
  - *Important* - couleurs en dur, espacements hors échelle, pattern réinventé.
  - *Cosmétique* - variante inhabituelle, nommage divergent.
- **Volumétrie de la dette** :
  - nombre de couleurs en dur (`#rrggbb`, `rgb()`) hors tokens ;
  - nombre d'espacements non multiples de 4px ;
  - nombre de composants maison ayant un équivalent dans la bibliothèque ;
  - nombre d'écrans couverts / non couverts par un pattern documenté.

## Règles

- **Ne modifier aucun fichier.** La sortie est un rapport.
- Chaque écart cite la règle qu'il enfreint. Pas de règle citable → pas d'écart.
- Ne rien inventer : un écart non vérifié dans le code n'est pas listé.
- Distinguer un écart d'une préférence personnelle. Seuls les écarts aux règles écrites comptent.
- Quantifier plutôt que qualifier : « 47 couleurs en dur dans 12 fichiers » vaut mieux que
  « beaucoup de couleurs en dur ».

## Validation

- Chaque écart est reproductible : ouvrir le fichier à la ligne citée montre le problème.
- Le total de la volumétrie est cohérent avec la liste des écarts.
