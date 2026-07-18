import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/docs',
    component: () => import('../components/DocsLayout.vue'),
    children: [
      { path: '', redirect: '/docs/introduction' },

      // Démarrer
      { path: 'introduction', component: () => import('../views/docs/IntroductionDoc.vue') },
      { path: 'getting-started', component: () => import('../views/docs/GettingStartedDoc.vue') },
      { path: 'contribution', component: () => import('../views/docs/ContributionDoc.vue') },
      { path: 'changelog', component: () => import('../views/docs/ChangelogDoc.vue') },

      // Fondations
      { path: 'fondations', component: () => import('../views/docs/FondationsDoc.vue') },
      { path: 'typography', component: () => import('../views/docs/TypographyDoc.vue') },
      { path: 'spacing', component: () => import('../views/docs/SpacingDoc.vue') },
      { path: 'grid', component: () => import('../views/docs/GridDoc.vue') },
      { path: 'borders', component: () => import('../views/docs/BordersDoc.vue') },
      { path: 'iconography', component: () => import('../views/docs/IconographyDoc.vue') },
      { path: 'motion', component: () => import('../views/docs/MotionDoc.vue') },

      // Formulaires
      { path: 'button', component: () => import('../views/docs/ButtonDoc.vue') },
      { path: 'input', component: () => import('../views/docs/InputDoc.vue') },
      { path: 'textarea', component: () => import('../views/docs/TextareaDoc.vue') },
      { path: 'checkbox', component: () => import('../views/docs/CheckboxDoc.vue') },
      { path: 'radio', component: () => import('../views/docs/RadioDoc.vue') },
      { path: 'select', component: () => import('../views/docs/SelectDoc.vue') },
      { path: 'switch', component: () => import('../views/docs/SwitchDoc.vue') },
      { path: 'slider', component: () => import('../views/docs/SliderDoc.vue') },
      { path: 'form', component: () => import('../views/docs/FormDoc.vue') },
      { path: 'field', component: () => import('../views/docs/FieldDoc.vue') },
      { path: 'fieldset', component: () => import('../views/docs/FieldsetDoc.vue') },
      { path: 'multiselect', component: () => import('../views/docs/MultiselectDoc.vue') },

      // Affichage
      { path: 'badge', component: () => import('../views/docs/BadgeDoc.vue') },
      { path: 'avatar', component: () => import('../views/docs/AvatarDoc.vue') },
      { path: 'card', component: () => import('../views/docs/CardDoc.vue') },
      { path: 'separator', component: () => import('../views/docs/SeparatorDoc.vue') },
      { path: 'skeleton', component: () => import('../views/docs/SkeletonDoc.vue') },
      { path: 'spinner', component: () => import('../views/docs/SpinnerDoc.vue') },
      { path: 'progress', component: () => import('../views/docs/ProgressDoc.vue') },

      // Feedback
      { path: 'alert', component: () => import('../views/docs/AlertDoc.vue') },
      { path: 'tooltip', component: () => import('../views/docs/TooltipDoc.vue') },
      { path: 'dialog', component: () => import('../views/docs/DialogDoc.vue') },

      // Navigation
      { path: 'tabs', component: () => import('../views/docs/TabsDoc.vue') },
      { path: 'accordion', component: () => import('../views/docs/AccordionDoc.vue') },
      { path: 'breadcrumb', component: () => import('../views/docs/BreadcrumbDoc.vue') },
      { path: 'navigation-menu', component: () => import('../views/docs/NavigationMenuDoc.vue') },
      { path: 'menu', component: () => import('../views/docs/MenuDoc.vue') },
      { path: 'sidebar', component: () => import('../views/docs/SidebarDoc.vue') },
      { path: 'pagination', component: () => import('../views/docs/PaginationDoc.vue') },
      { path: 'command', component: () => import('../views/docs/CommandDoc.vue') },

      // Données
      { path: 'table', component: () => import('../views/docs/TableDoc.vue') },
      { path: 'chart', component: () => import('../views/docs/ChartDoc.vue') },
      { path: 'carousel', component: () => import('../views/docs/CarouselDoc.vue') },
      { path: 'calendar', component: () => import('../views/docs/CalendarDoc.vue') },
      { path: 'datetime-picker', component: () => import('../views/docs/DatetimePickerDoc.vue') },
      { path: 'meter', component: () => import('../views/docs/MeterDoc.vue') },
      { path: 'scroll-area', component: () => import('../views/docs/ScrollAreaDoc.vue') },

      // Utilitaires
      { path: 'drawer', component: () => import('../views/docs/DrawerDoc.vue') },
      { path: 'item', component: () => import('../views/docs/ItemDoc.vue') },
      { path: 'kbd', component: () => import('../views/docs/KbdDoc.vue') },
    ],
  },
  {
    path: '/patterns',
    component: () => import('../components/PatternsLayout.vue'),
    children: [
      { path: '', redirect: '/patterns/form' },
      { path: 'form', component: () => import('../views/patterns/FormPattern.vue') },
      {
        path: 'search-filter',
        component: () => import('../views/patterns/SearchFilterPattern.vue'),
      },
      { path: 'table', component: () => import('../views/patterns/TablePattern.vue') },
      {
        path: 'empty-states',
        component: () => import('../views/patterns/EmptyStatesPattern.vue'),
      },
      {
        path: 'error-states',
        component: () => import('../views/patterns/ErrorStatesPattern.vue'),
      },
      { path: 'feedback', component: () => import('../views/patterns/FeedbackPattern.vue') },
    ],
  },
  {
    path: '/agents',
    component: () => import('../components/AgentsLayout.vue'),
    children: [
      { path: '', component: () => import('../views/agents/AgentsOverviewDoc.vue') },
      { path: 'contract', component: () => import('../views/agents/AgentContractDoc.vue') },
      { path: 'build-app', component: () => import('../views/agents/BuildAppAgentDoc.vue') },
      { path: 'rebuild-app', component: () => import('../views/agents/RebuildAppAgentDoc.vue') },
      { path: 'catalog', component: () => import('../views/agents/AgentCatalogDoc.vue') },
      { path: 'test-cases', component: () => import('../views/agents/AgentTestCasesDoc.vue') },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(__PUBLIC_PATH__),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// Titre d'onglet par page, dérivé du dernier segment de l'URL
// (ex. /docs/getting-started → « Getting started — Design System »).
router.afterEach((to) => {
  if (to.name === 'not-found') {
    document.title = 'Page introuvable — Design System';
    return;
  }
  const segment = to.path.split('/').filter(Boolean).pop();
  if (!segment) {
    document.title = 'Design System';
    return;
  }
  const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
  document.title = `${label} — Design System`;
});

export default router;
