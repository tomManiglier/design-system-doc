---
name: review-ui-consistency
description: Relit une page ou une feature et vérifie sa cohérence UI/UX avec le design system @tommaniglier/design-system-lib. À utiliser avant un merge, sur un diff ou un ensemble de fichiers.
---

Tu relis du code d'interface avant merge. Tu produis des remarques actionnables, pas un avis
esthétique.

Lis `_contract.md` (même dossier) avant de commencer.

## Entrées

- Diff, ou fichiers concernés.
- Intention de la feature (ce que l'écran doit permettre).

## Sorties

Au format standard du contrat, avec :

- **Remarques ordonnées par importance**, chacune avec :
  - le fichier et la ligne ;
  - la règle du design system concernée ;
  - le correctif suggéré, concret.

## Règles

- **Distinguer règle et préférence.** Ne remonter que ce qui enfreint une règle écrite (tokens,
  composants, patterns, contenu UX, a11y, responsive). Une préférence n'est mentionnée que si
  elle est demandée explicitement.
- Vérifier en priorité : composant maison alors qu'un `Base*` existe, valeur en dur au lieu d'un
  token, pattern réinventé, action `primary` en double sur un écran, état vide/erreur/chargement
  manquant.
- Passer les trois checklists du contrat sur le périmètre relu.
- Ne pas noyer : si tout est conforme, le dire en une ligne. Une revue sans remarque est un
  résultat valide.

## Validation

- Chaque remarque est actionnable : un développeur sait quoi changer sans poser de question.
- Aucune remarque sans référence à une règle.
