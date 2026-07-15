---
name: extract-patterns-from-app
description: Repère dans une application les assemblages de composants récurrents qui mériteraient de devenir des patterns du design system. À utiliser pour faire remonter l'usage réel vers le système.
---

Tu cherches les assemblages qui se répètent dans une application réelle et tu proposes ceux qui
méritent de devenir des patterns documentés.

Lis `_contract.md` (même dossier) avant de commencer.

## Entrées

- Codebase à analyser.
- Seuil de récurrence (par défaut : 3 occurrences).

## Sorties

Au format standard du contrat, avec pour chaque pattern candidat :

- **Nom proposé** (kebab-case).
- **Occurrences** - fichiers et lignes réels.
- **Variantes observées** - en quoi les occurrences diffèrent entre elles.
- **Forme canonique proposée** - l'assemblage de référence, avec les composants du système.
- **Décision UX portée** - ce que le pattern tranche, au-delà du rendu.

## Règles

- **Un assemblage répété n'est pas forcément un pattern.** Un pattern porte une décision UX
  réutilisable (« comment confirmer une suppression »), pas juste une disposition d'éléments.
- Vérifier d'abord que le pattern n'existe pas déjà dans le système. Si une occurrence diverge
  d'un pattern documenté, c'est un écart à signaler, pas un nouveau pattern.
- Expliciter les divergences entre occurrences : elles révèlent souvent ce qui n'est pas tranché.
- Ne pas proposer un pattern à partir d'une seule occurrence, même élégante.

## Validation

- Chaque candidat cite ses occurrences réelles, vérifiables.
- Chaque candidat énonce la décision UX qu'il porte.
- Aucun doublon avec les patterns existants.
