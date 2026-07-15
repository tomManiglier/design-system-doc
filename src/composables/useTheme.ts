import { ref } from 'vue';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'ds-theme';

const theme = ref<Theme>('light');

function apply(value: Theme) {
  theme.value = value;
  document.documentElement.setAttribute('data-theme', value);
  localStorage.setItem(STORAGE_KEY, value);
}

// À appeler une fois au démarrage (main.ts), avant le montage de l'app,
// pour éviter un flash de thème incorrect.
export function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(stored ?? (prefersDark ? 'dark' : 'light'));
}

export function useTheme() {
  return {
    theme,
    setTheme: apply,
    toggleTheme: () => apply(theme.value === 'dark' ? 'light' : 'dark'),
  };
}
