<template>
  <DocPage
    eyebrow="Démarrer"
    title="Command"
    description="Fonctionnalité du site de doc (pas un composant de la bibliothèque) : la palette de commandes ⌘K pour rechercher dans toute la documentation."
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <p>
        Ouvrez la palette avec <code>{{ kbdLabel }}</code> ou via la barre de recherche
        de la navigation. Les résultats sont groupés par section et navigables au clavier
        (<code>↑</code> <code>↓</code> <code>Entrée</code>, <code>Échap</code> pour fermer).
      </p>
      <DemoBlock :code="code">
        <BaseButton variant="outline" @click="openPalette">
          <template #icon>
            <BaseIcon name="search" :size="15" />
          </template>
          Ouvrir la palette
        </BaseButton>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>API</h2>
      <PropsTable :rows="rows" />
    </section>
    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>closed</code></td><td>Rien n'est rendu ; seul l'écouteur clavier global reste actif.</td></tr>
            <tr><td><code>open</code></td><td>Voile + panneau centré en haut, champ focalisé automatiquement, défilement de la page bloqué.</td></tr>
            <tr><td><code>active</code> (item)</td><td>Item sous le curseur ou atteint aux flèches : fond <code>--color-muted</code>.</td></tr>
            <tr><td><code>empty</code></td><td>« Aucun résultat. » quand la requête ne correspond à rien.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        La recherche est instantanée et filtre les groupes de la navigation ; les correspondances
        sont surlignées dans les libellés. À l'ouverture, la requête est réinitialisée.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Raccourci</strong> - <code>⌘K</code> / <code>Ctrl+K</code> ouvre et ferme ; <code>Échap</code> ferme. Le raccourci est affiché dans la barre de recherche : il n'est pas caché.</li>
        <li><strong>Clavier</strong> - <code>↑</code> / <code>↓</code> parcourent les résultats en boucle, <code>Entrée</code> ouvre le résultat actif. L'item actif est ramené dans le champ de vision au défilement.</li>
        <li><strong>Rôle</strong> - panneau en <code>role="dialog"</code> avec <code>aria-modal</code> et <code>aria-label</code> ; le champ porte son propre <code>aria-label</code>.</li>
        <li><strong>Focus</strong> - donné au champ à l'ouverture (<code>nextTick</code>), pour taper immédiatement.</li>
        <li><strong>Complément, pas substitut</strong> - la palette accélère la navigation pour les habitués ; elle ne remplace pas une navigation visible.</li>
      </ul>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import PropsTable from '../../components/docs/PropsTable.vue';
import type { PropRow } from '../../components/docs/types';
import { BaseButton, BaseIcon } from '@tommaniglier/design-system-lib/vue';
import { useCommandPalette } from '../../composables/useCommandPalette';

const { openPalette } = useCommandPalette();

const isMac =
  typeof navigator !== 'undefined' &&
  /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
const kbdLabel = isMac ? '⌘ K' : 'Ctrl K';

const code = `import { useCommandPalette } from '@/composables/useCommandPalette';

const { openPalette } = useCommandPalette();`;

const rows: PropRow[] = [
  { name: 'openPalette()', type: 'function', default: '-', description: 'Ouvre la palette de commandes.' },
  { name: 'closePalette()', type: 'function', default: '-', description: 'Ferme la palette.' },
  { name: 'toggle()', type: 'function', default: '-', description: 'Bascule ouverture/fermeture (lié à Ctrl/⌘ K).' },
];
</script>
