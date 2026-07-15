import '@tom/design-system/styles.css';
import '@tom/design-system/register';
import './styles/main.scss';

type TabsElement = HTMLElement & {
  modelValue: string;
  tabs: Array<{ label: string; value: string }>;
};

type AccordionElement = HTMLElement & {
  items: Array<{ title: string; content: string }>;
};

type ChartElement = HTMLElement & {
  type: 'bar' | 'line';
  data: number[];
  labels: string[];
  ariaLabel: string;
};

type TableElement = HTMLElement & {
  caption?: string;
  columns: Array<{ key: string; label: string }>;
  rows: Array<Record<string, string | number>>;
};

const tabs = document.querySelector('#tabs-demo') as TabsElement | null;
const accordion = document.querySelector('#accordion-demo') as AccordionElement | null;
const chart = document.querySelector('#chart-demo') as ChartElement | null;
const table = document.querySelector('#table-demo') as TableElement | null;

if (tabs) {
  tabs.modelValue = 'overview';
  tabs.tabs = [
    { label: 'Aperçu', value: 'overview' },
    { label: 'Tokens', value: 'tokens' },
    { label: 'Composants', value: 'components' },
  ];
}

if (accordion) {
  accordion.items = [
    {
      title: 'Pourquoi un package séparé ?',
      content: 'La documentation consomme la même API publique que les autres sites.',
    },
    {
      title: 'Comment brancher un site Symfony ?',
      content: 'Le site importe le CSS et le registre des custom elements depuis le package npm.',
    },
    {
      title: 'Comment injecter des données complexes ?',
      content: 'Les éléments sont récupérés puis alimentés en TypeScript via leurs propriétés.',
    },
  ];
}

if (chart) {
  chart.type = 'line';
  chart.ariaLabel = 'Adoption par semaine';
  chart.labels = ['S1', 'S2', 'S3', 'S4', 'S5'];
  chart.data = [18, 26, 34, 49, 62];
}

if (table) {
  table.caption = 'Version de démonstration';
  table.columns = [
    { key: 'component', label: 'Composant' },
    { key: 'delivery', label: 'Livraison' },
    { key: 'status', label: 'Statut' },
  ];
  table.rows = [
    { component: 'Button', delivery: 'Custom element', status: 'OK' },
    { component: 'Accordion', delivery: 'Props TS', status: 'OK' },
    { component: 'Chart', delivery: 'Props TS', status: 'OK' },
  ];
}
