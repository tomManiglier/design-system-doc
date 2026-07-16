<template>
  <DocPage
    eyebrow="Affichage"
    title="Progress"
    description="Barre de progression déterminée, remplie du dégradé de marque."
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <div class="w">
          <BaseProgress :value="value" />
        </div>
        <div class="controls">
          <BaseButton variant="outline" @click="value = Math.max(0, value - 10)">-10</BaseButton>
          <BaseButton variant="outline" @click="value = Math.min(100, value + 10)">+10</BaseButton>
          <span class="hint">{{ value }}%</span>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Barre remplie à <code>value</code> %, dégradé <code>--gradient-brand-cool</code>.</td></tr>
            <tr><td><code>empty</code></td><td><code>value</code> à 0 : piste visible, barre vide.</td></tr>
            <tr><td><code>complete</code></td><td><code>value</code> à 100 : accompagner d'un message, la barre pleine seule ne dit pas « terminé ».</td></tr>
            <tr><td><code>indéterminé</code></td><td>Non fourni : utiliser <router-link class="doc-link" to="/docs/spinner">Spinner</router-link> quand la durée est inconnue.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Progress mesure l'<strong>avancement d'une tâche</strong>. Pour une quantité dans un intervalle, voir <router-link class="doc-link" to="/docs/meter">Meter</router-link>.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Rôle</strong> - <code>role="progressbar"</code> avec <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>.</li>
        <li><strong>Libellé</strong> - la barre seule ne dit pas ce qui progresse : ajouter un texte à côté (« Import en cours - 64 % »).</li>
        <li><strong>Annonces</strong> - ne pas annoncer chaque pourcentage : mettre à jour le texte par paliers, ou seulement à la fin.</li>
        <li><strong>Fin</strong> - annoncer l'achèvement explicitement plutôt que de laisser une barre pleine muette.</li>
        <li><strong>Couleur</strong> - le dégradé est décoratif : la longueur de la barre porte l'information.</li>
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
import { BaseProgress, BaseButton } from '@tommaniglier/design-system-lib/vue';

const value = ref(60);
const code = `<BaseProgress :value="60" />`;

const rows: PropRow[] = [
  {
    name: 'value',
    type: 'number',
    default: '0',
    description: 'Progression de 0 à 100 (bornée automatiquement).',
  },
];
</script>

<style scoped lang="scss">
.w {
  width: 320px;
  max-width: 100%;
}
.controls {
  display: flex;
  align-items: center;
  gap: 10px;
}
.hint {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
}
</style>
