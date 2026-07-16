<template>
  <DocPage
    eyebrow="Utilitaires"
    title="Item"
    description="Ligne de liste générique : média, titre, description et actions."
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <BaseItem title="Rapport mensuel" description="PDF · mis à jour il y a 2 jours.">
          <template #media>
            <BaseAvatar variant="muted" :size="36">
              <template #icon><BaseIcon name="file" :size="16" /></template>
            </BaseAvatar>
          </template>
          <template #actions>
            <BaseButton variant="outline">Voir</BaseButton>
          </template>
        </BaseItem>

        <BaseItem title="Notification par e-mail" description="Recevez un résumé hebdomadaire.">
          <template #media><BaseIcon name="mail" /></template>
          <template #actions><BaseSwitch v-model="notify" /></template>
        </BaseItem>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Média, titre, description et actions alignés.</td></tr>
            <tr><td><code>hover</code></td><td>Aucun par défaut : l'item n'est pas cliquable en soi.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Item est une mise en page de ligne, pas un élément interactif : les actions vivent dans le slot <code>#actions</code>, le visuel dans <code>#media</code>.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Structure de liste</strong> - plusieurs items forment une liste : les envelopper dans <code>&lt;ul&gt;</code> / <code>&lt;li&gt;</code> pour que le nombre d'éléments soit annoncé.</li>
        <li><strong>Actions nommées</strong> - dans une liste, « Modifier » se répète : préciser l'objet via <code>aria-label</code> (« Modifier Marie Dupont »).</li>
        <li><strong>Média décoratif</strong> - l'avatar ou l'icône du slot <code>#media</code> double le titre : ne pas le faire lire deux fois.</li>
        <li><strong>Pas de ligne cliquable</strong> - préférer une action explicite plutôt que rendre tout l'item cliquable.</li>
        <li><strong>Ordre</strong> - titre avant description dans le DOM : c'est l'ordre de lecture.</li>
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
import { BaseItem, BaseIcon, BaseAvatar, BaseButton, BaseSwitch } from '@tommaniglier/design-system-lib/vue';

const notify = ref(true);

const code = `<BaseItem title="Rapport mensuel" description="PDF · mis à jour il y a 2 jours.">
  <template #media><BaseIcon name="file" /></template>
  <template #actions><BaseButton variant="outline">Voir</BaseButton></template>
</BaseItem>`;

const rows: PropRow[] = [
  { name: 'title', type: 'string', default: '-', description: 'Titre de la ligne.' },
  { name: 'description', type: 'string', default: '-', description: 'Texte secondaire sous le titre.' },
  { name: '#media', type: 'slot', default: '-', description: 'Icône ou avatar à gauche.' },
  { name: '#actions', type: 'slot', default: '-', description: 'Actions à droite.' },
];
</script>
