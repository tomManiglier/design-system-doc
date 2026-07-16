export interface NavItem {
  label: string;
  to: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

// Source unique de vérité pour la sidebar de docs et le routeur.
export const docsNav: NavGroup[] = [
  {
    title: 'Démarrer',
    items: [
      { label: 'Introduction', to: '/docs/introduction' },
      { label: 'Getting Started', to: '/docs/getting-started' },
      { label: 'Contribution', to: '/docs/contribution' },
      { label: 'Changelog', to: '/docs/changelog' },
      { label: 'Command (⌘K)', to: '/docs/command' },
    ],
  },
  {
    title: 'Fondations',
    items: [
      { label: 'Couleurs', to: '/docs/fondations' },
      { label: 'Typographie', to: '/docs/typography' },
      { label: 'Espacement', to: '/docs/spacing' },
      { label: 'Grille & layout', to: '/docs/grid' },
      { label: 'Bordures & ombres', to: '/docs/borders' },
      { label: 'Iconographie', to: '/docs/iconography' },
      { label: 'Motion', to: '/docs/motion' },
    ],
  },
  {
    title: 'Formulaires',
    items: [
      { label: 'Button', to: '/docs/button' },
      { label: 'Input', to: '/docs/input' },
      { label: 'Textarea', to: '/docs/textarea' },
      { label: 'Checkbox', to: '/docs/checkbox' },
      { label: 'Radio Group', to: '/docs/radio' },
      { label: 'Select', to: '/docs/select' },
      { label: 'Switch', to: '/docs/switch' },
      { label: 'Slider', to: '/docs/slider' },
      { label: 'Form', to: '/docs/form' },
      { label: 'Field', to: '/docs/field' },
      { label: 'Fieldset', to: '/docs/fieldset' },
      { label: 'Multiselect', to: '/docs/multiselect' },
    ],
  },
  {
    title: 'Affichage',
    items: [
      { label: 'Badge', to: '/docs/badge' },
      { label: 'Avatar', to: '/docs/avatar' },
      { label: 'Card', to: '/docs/card' },
      { label: 'Separator', to: '/docs/separator' },
      { label: 'Skeleton', to: '/docs/skeleton' },
      { label: 'Spinner', to: '/docs/spinner' },
      { label: 'Progress', to: '/docs/progress' },
    ],
  },
  {
    title: 'Feedback',
    items: [
      { label: 'Alert', to: '/docs/alert' },
      { label: 'Tooltip', to: '/docs/tooltip' },
      { label: 'Dialog', to: '/docs/dialog' },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { label: 'Tabs', to: '/docs/tabs' },
      { label: 'Accordion', to: '/docs/accordion' },
      { label: 'Breadcrumb', to: '/docs/breadcrumb' },
      { label: 'Navigation Menu', to: '/docs/navigation-menu' },
      { label: 'Menu', to: '/docs/menu' },
      { label: 'Sidebar', to: '/docs/sidebar' },
      { label: 'Pagination', to: '/docs/pagination' },
    ],
  },
  {
    title: 'Données',
    items: [
      { label: 'Table', to: '/docs/table' },
      { label: 'Chart', to: '/docs/chart' },
      { label: 'Carousel', to: '/docs/carousel' },
      { label: 'Calendar', to: '/docs/calendar' },
      { label: 'DateTime Picker', to: '/docs/datetime-picker' },
      { label: 'Meter', to: '/docs/meter' },
      { label: 'Scroll Area', to: '/docs/scroll-area' },
    ],
  },
  {
    title: 'Utilitaires',
    items: [
      { label: 'Drawer', to: '/docs/drawer' },
      { label: 'Item', to: '/docs/item' },
      { label: 'Kbd', to: '/docs/kbd' },
    ],
  },
];

// Sidebar de la section Patterns (/patterns/*), séparée de docsNav.
export const patternsNav: NavGroup[] = [
  {
    title: 'Patterns',
    items: [
      { label: 'Formulaire', to: '/patterns/form' },
      { label: 'Recherche & filtres', to: '/patterns/search-filter' },
      { label: 'Tableau riche', to: '/patterns/table' },
      { label: 'États vides', to: '/patterns/empty-states' },
      { label: "États d'erreur", to: '/patterns/error-states' },
      { label: 'Notifications & feedback', to: '/patterns/feedback' },
    ],
  },
];

// Sidebar de la section Agents (/agents/*), séparée de docsNav.
export const agentsNav: NavGroup[] = [
  {
    title: 'Agents',
    items: [
      { label: 'Vue d’ensemble', to: '/agents' },
      { label: 'Contrat commun', to: '/agents/contract' },
      { label: 'build-app-with-ds', to: '/agents/build-app' },
      { label: 'rebuild-app-with-ds', to: '/agents/rebuild-app' },
      { label: 'Catalogue', to: '/agents/catalog' },
      { label: 'Cas de test', to: '/agents/test-cases' },
    ],
  },
];
