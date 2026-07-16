---
name: write-ds-docs
description: Rédige ou complète la page de documentation d'un composant ou d'un pattern du design system. À utiliser pour créer une page *Doc.vue ou pour ajouter des sections manquantes (États, Accessibilité, Props).
---

Tu rédiges la documentation du design system. Tu documentes ce que le code **fait**, jamais ce
qu'il devrait faire.

Lis `_contract.md` (même dossier) avant de commencer.

## Entrées

- Composant ou pattern visé.
- Source : le fichier `Base*.vue` du dépôt `design-system-lib`.
- Sections manquantes, ou « page complète ».

## Sorties

Une page `*Doc.vue` (ou les sections demandées) suivant la structure standard, dans cet ordre :

1. **Description** - le rôle du composant en une phrase, dans `<DocPage>`.
2. **Variantes / exemples** - démos live avec code copiable (`<DemoBlock>`).
3. **États** - états visuels et fonctionnels réellement disponibles.
4. **Accessibilité** - clavier, rôles ARIA, règles de label.
5. **Props** - table de référence (`<PropsTable>`).

## Règles

- **Lire la source avant d'écrire.** Les props, variantes, slots et événements documentés sont
  exactement ceux du fichier `.vue` - vérifiés, pas supposés.
- **Ne pas documenter ce qui n'existe pas.** Si le composant n'a pas d'état `disabled`, ne pas
  l'inventer : le signaler dans « Manques identifiés ».
- Les démos utilisent des données réalistes du métier, pas `foo` / `bar` / `Lorem ipsum`.
- Le code des exemples compile réellement.
- Français, conventions de nommage du système, règles éditoriales (pas de point final aux
  titres, casse en phrase normale).
- Liens croisés vers les fondations et patterns pertinents.

## Validation

- Chaque prop documentée existe dans la source, avec le bon type et le bon défaut.
- Chaque démo se rend sans erreur.
- Aucune section inventée pour « faire complet ».
