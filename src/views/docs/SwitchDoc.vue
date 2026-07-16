<template>
  <DocPage
    eyebrow="Formulaires"
    title="Switch"
    description="Bascule un réglage entre deux états. Accessible au clavier et compatible v-model."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="basicCode">
        <div class="switch-row">
          <div class="switch-row__item">
            <BaseSwitch v-model="on" />
            <span class="state">{{ on ? 'Activé' : 'Désactivé' }}</span>
          </div>
          <BaseSwitch v-model="onBlack" color="black" />
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code> (off)</td><td>Piste grise, pastille à gauche.</td></tr>
            <tr><td><code>checked</code> (on)</td><td>Piste colorée selon <code>color</code> (<code>brand</code> ou <code>black</code>), pastille à droite. Transition de 200 ms.</td></tr>
            <tr><td><code>hover</code></td><td>Piste légèrement assombrie.</td></tr>
            <tr><td><code>focus</code></td><td>Anneau <code>--color-ring</code> (<code>:focus-visible</code>).</td></tr>
            <tr><td><code>disabled</code></td><td>Non fourni : le composant est un <code>&lt;button&gt;</code>, ajouter <code>disabled</code> à l'appel si nécessaire.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Le switch applique son effet <strong>immédiatement</strong> : pas de bouton « Enregistrer »
        associé. Si le réglage doit être validé avec le reste d'un formulaire, utiliser une
        <router-link class="doc-link" to="/docs/checkbox">Checkbox</router-link>.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Clavier</strong> - <code>Tab</code> pour l'atteindre, <code>Entrée</code> ou <code>Espace</code> pour basculer (c'est un <code>&lt;button&gt;</code> natif).</li>
        <li><strong>Rôle</strong> - <code>role="switch"</code> avec <code>aria-checked</code> reflétant l'état : les lecteurs d'écran annoncent « activé / désactivé ».</li>
        <li><strong>Label</strong> - le switch n'a pas de texte propre : il doit être accompagné d'un libellé visible à côté, ou porter un <code>aria-label</code>.</li>
        <li><strong>Libellé stable</strong> - le texte décrit le réglage (« Notifications »), il ne change pas selon l'état : c'est <code>aria-checked</code> qui porte l'état.</li>
        <li><strong>Couleur</strong> - la position de la pastille, pas seulement la couleur, distingue on de off.</li>
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
import { BaseSwitch } from '@tommaniglier/design-system-lib/vue';

const on = ref(true);
const onBlack = ref(true);

const basicCode = `<BaseSwitch v-model="on" />
<BaseSwitch v-model="onBlack" color="black" />`;

const rows: PropRow[] = [
  {
    name: 'modelValue',
    type: 'boolean',
    default: 'false',
    description: 'État de la bascule (v-model).',
  },
  {
    name: 'color',
    type: "'brand' | 'black'",
    default: "'brand'",
    description: 'Couleur de la bascule activée.',
  },
];
</script>

<style scoped lang="scss">
.switch-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.switch-row__item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.state {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
}
</style>
