<template>
  <DocPage
    eyebrow="Utilitaires"
    title="Drawer"
    description="Panneau latéral coulissant depuis la droite, avec voile et fermeture au clavier."
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code">
        <BaseButton variant="outline" @click="open = true">Ouvrir le drawer</BaseButton>
        <BaseDrawer v-model="open" title="Détails de la commande">
          <p>
            Commande <strong>#4218</strong> - 12 articles.
            Expédition prévue sous 48 h depuis l'entrepôt principal.
          </p>
        </BaseDrawer>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>closed</code></td><td>Rien n'est rendu dans le DOM.</td></tr>
            <tr><td><code>open</code></td><td>Voile + panneau glissant depuis le bord, <code>--shadow-md</code>. Défilement de la page bloqué.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Trois façons de fermer : le bouton de fermeture, <code>Échap</code>, ou un clic sur le voile. Le drawer garde le contexte de la page visible - c'est ce qui le distingue du <router-link class="doc-link" to="/docs/dialog">Dialog</router-link>.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Rôle</strong> - <code>role="dialog"</code> avec <code>aria-modal="true"</code>.</li>
        <li><strong>Clavier</strong> - <code>Échap</code> ferme ; l'écouteur est retiré à la fermeture.</li>
        <li><strong>Libellé</strong> - le <code>title</code> nomme le panneau ; le bouton de fermeture porte un <code>aria-label</code>.</li>
        <li><strong>Focus</strong> - piège de focus non implémenté : donner le focus au premier champ à l'ouverture, le rendre au déclencheur à la fermeture.</li>
        <li><strong>Saisie en cours</strong> - le drawer accueille des formulaires : prévenir avant de fermer si des modifications sont en attente.</li>
        <li><strong>Choix</strong> - le Drawer accompagne une tâche riche sans quitter la page ; le <router-link class="doc-link" to="/docs/dialog">Dialog</router-link> interrompt pour une décision courte.</li>
      </ul>
    </section>

    <section class="doc-section">
      <h2>Props</h2>
      <PropsTable :rows="rows" />
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import PropsTable from '../../components/docs/PropsTable.vue';
import type { PropRow } from '../../components/docs/types';
import { BaseDrawer, BaseButton } from '@tommaniglier/design-system-lib/vue';

const open = ref(false);

const code = `<BaseButton variant="outline" @click="open = true">Ouvrir le drawer</BaseButton>

<BaseDrawer v-model="open" title="Détails de la commande">
  <p>Contenu du panneau…</p>
</BaseDrawer>`;

const rows: PropRow[] = [
  { name: 'modelValue', type: 'boolean', default: '-', description: 'Ouverture du panneau (v-model).' },
  { name: 'title', type: 'string', default: '-', description: 'Titre affiché dans l’en-tête.' },
  { name: 'default', type: 'slot', default: '-', description: 'Contenu du panneau.' },
];
</script>
