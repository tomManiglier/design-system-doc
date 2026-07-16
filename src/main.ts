import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@tommaniglier/design-system-lib/styles.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/quicksand/700.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/main.scss';
import { initTheme } from './composables/useTheme';

initTheme();

createApp(App).use(router).mount('#app');
