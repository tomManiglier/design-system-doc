<template>
  <DocPage
    eyebrow="Affichage"
    title="Spinner"
    description="Indicateur de chargement circulaire pour les actions en cours."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code">
        <BaseSpinner :size="16" />
        <BaseSpinner :size="24" />
        <BaseSpinner :size="32" />
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>loading</code></td><td>Cercle en rotation continue, taille <code>size</code>, couleur héritée.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Le spinner n'a qu'un état : il tourne. Il indique une attente de <strong>durée inconnue</strong> ; dès que l'avancement est mesurable, utiliser <router-link class="doc-link" to="/docs/progress">Progress</router-link>.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Rôle</strong> - <code>role="status"</code> avec <code>aria-label</code> : l'attente est annoncée poliment, sans interrompre.</li>
        <li><strong>Libellé utile</strong> - « Chargement des projets » plutôt que « Chargement » : dire ce qu'on attend.</li>
        <li><strong>Un seul par zone</strong> - plusieurs spinners simultanés créent autant d'annonces concurrentes.</li>
        <li><strong>Attente longue</strong> - au-delà de quelques secondes, préférer <router-link class="doc-link" to="/docs/skeleton">Skeleton</router-link> ou Progress : un spinner qui tourne longtemps ressemble à un blocage.</li>
        <li><strong>Mouvement</strong> - la rotation est continue et lente : elle ne pose pas de problème vestibulaire, mais ne pas l'accélérer.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Props</h2>
      <PropsTable :rows="rows" />
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import PropsTable from '../../components/docs/PropsTable.vue';
import type { PropRow } from '../../components/docs/types';
import { BaseSpinner } from '@tom/design-system/vue';

const code = `<BaseSpinner :size="16" />
<BaseSpinner :size="24" />
<BaseSpinner :size="32" />`;

const rows: PropRow[] = [
  { name: 'size', type: 'number', default: '20', description: 'Diamètre en pixels.' },
];
</script>
