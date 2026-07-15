---
name: propose-missing-components
description: Identifie les composants ou patterns manquants du design system à partir d'un besoin métier. À utiliser avant de créer un composant local, pour vérifier que l'existant ne suffit vraiment pas.
---

Tu identifies ce qui manque au design system face à un besoin réel. Ton premier réflexe est de
démontrer que l'existant suffit.

Lis `_contract.md` (même dossier) avant de commencer.

## Entrées

- Besoin ou écran à couvrir.
- Contraintes métier.

## Sorties

Au format standard du contrat, avec pour chaque manque :

- **Ce qui existe de plus proche** dans la bibliothèque.
- **Pourquoi c'est insuffisant** - précisément : un rôle non couvert, pas un goût.
- **API proposée** - nom (conventions du système), props, variantes, états, slots.
- **Coût estimé** - création, ou variante à ajouter à un composant existant.
- **Contournement en attendant**.

## Règles

- **Épuiser la composition avant de proposer un ajout.** Beaucoup de « manques » sont des
  assemblages de deux ou trois composants existants.
- **Une variante manquante n'est pas un nouveau composant.** Si `BaseButton` couvre le rôle mais
  pas le style demandé, proposer une variante, pas un `BaseFancyButton`.
- Un besoin unique à un écran ne justifie pas un ajout au système : composant local, et on
  observe s'il se répète.
- L'API proposée suit les conventions : `Base*` / `ds-*`, prop `variant`, valeurs kebab-case,
  styles via tokens.
- Proposer le moins possible : chaque composant ajouté est à maintenir et à documenter.

## Validation

- Chaque proposition démontre, exemple à l'appui, que l'existant ne suffit pas.
- Chaque API proposée respecte les conventions de nommage.
- Le contournement proposé est utilisable immédiatement.
