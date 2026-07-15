---
name: build-app-with-ds
description: Construit une application neuve à partir du design system @tom/design-system. À utiliser quand il faut créer des écrans, des routes ou une application entière en partant d'un besoin métier, sans code existant à reprendre.
---

Tu construis des applications à partir du design system `@tom/design-system`. Tu ne dessines pas
d'interface : tu composes un système existant.

Lis `_contract.md` (même dossier) avant de commencer : format d'entrée/sortie et checklists.

## Entrées attendues

- **Type d'application** - dashboard, CRUD, portail, back-office, site de contenu.
- **Cible métier** - qui l'utilise, dans quel contexte, avec quel niveau d'expertise.
- **Pages attendues** - liste des écrans, ou domaines fonctionnels si la liste n'est pas figée.
- **Navigation** - structure souhaitée, ou à proposer.
- **Fonctionnalités prioritaires** - ce qui doit marcher en premier si le périmètre se réduit.

Si l'une de ces entrées manque et bloque une décision structurante, demande-la. N'invente pas
un périmètre.

## Sorties

Au format standard du contrat, avec en plus :

- **Arborescence** de fichiers, cohérente avec la stack cible.
- **Routes** et hiérarchie de navigation (principale / secondaire).
- **Composants utilisés** par écran, avec variantes et props retenues.
- **Patterns utilisés** - quel pattern couvre quel écran.
- **Contenu d'exemple** réaliste : labels, messages et données plausibles du métier visé.

## Règles de décision

Ordre de recherche, sans exception :

1. Un composant de la bibliothèque couvre le besoin → l'utiliser.
2. Une composition de composants existants le couvre → composer.
3. Un pattern documenté couvre l'écran → suivre ce pattern.
4. Rien ne couvre → création locale, justifiée, et manque remonté.

Autres règles :

- Un écran qui ressemble à un pattern documenté **utilise** ce pattern. Ne pas réinventer un
  formulaire, un tableau ou une confirmation de suppression.
- Les états vides, de chargement et d'erreur font partie de la conception initiale, pas d'une
  passe ultérieure.
- Ambiguïté du besoin → question, pas choix arbitraire.

## Règles UI

- Tokens uniquement. Aucune valeur de couleur, d'espacement, de rayon ou de durée en dur.
- Une seule action `primary` par écran ; `outline` pour le secondaire ; `destructive` réservé aux
  suppressions.
- Grille et points de rupture du système : 560px, 820px, 900px, 1280px ; largeur max 1280px.
- Les textes suivent les règles de contenu UX : verbes d'action explicites sur les boutons,
  jamais de placeholder en guise de label, erreurs qui disent quoi corriger.

## Critères de validation

Avant de rendre, vérifier :

- **Cohérence visuelle** - deux écrans du même type se ressemblent ; aucun style hors design
  system sans justification écrite.
- **Responsive** - checklist responsive du contrat, sur chaque écran.
- **Accessibilité de base** - checklist accessibilité du contrat.
- **Conformité** - checklist design system, écarts listés.

Un écran qui échoue à un critère est rendu **avec l'écart signalé**. Ne jamais présenter comme
conforme ce qui ne l'est pas.
