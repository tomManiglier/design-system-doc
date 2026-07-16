<template>
  <DocPage
    eyebrow="Affichage"
    title="Avatar"
    description="Représente un utilisateur par une image ou ses initiales, avec un repli en dégradé de marque."
    status="stable"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code">
        <BaseAvatar initials="TM" :size="48" />
        <BaseAvatar initials="NS" :size="40" />
        <BaseAvatar initials="AB" :size="32" />
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Muted</h2>
      <p>La variante <code>muted</code> utilise un fond gris clair et la police Roboto.</p>
      <DemoBlock :code="mutedCode">
        <BaseAvatar variant="muted" initials="TM" :size="48" />
        <BaseAvatar variant="muted" initials="NS" :size="40" />
        <BaseAvatar variant="muted" initials="AB" :size="32" />
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Icône</h2>
      <p>Le slot <code>#icon</code> remplace les initiales par une icône, en gris ou en noir.</p>
      <DemoBlock :code="iconCode">
        <BaseAvatar variant="muted" :size="40">
          <template #icon><BaseIcon name="user" :size="18" /></template>
        </BaseAvatar>
        <BaseAvatar variant="dark" :size="40">
          <template #icon><BaseIcon name="user" :size="18" /></template>
        </BaseAvatar>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Statut</h2>
      <p>La prop <code>status</code> affiche une pastille en bas à droite.</p>
      <DemoBlock :code="statusCode">
        <BaseAvatar initials="TM" :size="40" status="online" />
        <BaseAvatar variant="muted" initials="NS" :size="40" status="busy" />
        <BaseAvatar variant="muted" initials="AB" :size="40" status="offline" />
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Image, ou initiales sur le dégradé de marque en repli.</td></tr>
            <tr><td><code>hover</code></td><td>Le dégradé pivote lentement - décoratif uniquement.</td></tr>
            <tr><td><code>empty</code></td><td>Sans <code>src</code>, les initiales s'affichent : jamais de trou visuel.</td></tr>
          </tbody>
        </table>
      </div>
      <p>L'avatar est un élément de présentation : il n'est pas interactif par lui-même. Pour un menu utilisateur, l'envelopper dans le déclencheur d'un <router-link class="doc-link" to="/docs/menu">Menu</router-link>.</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Image</strong> - renseigner <code>alt</code> avec le nom de la personne, ou une chaîne vide si le nom est déjà écrit à côté (éviter la double lecture).</li>
        <li><strong>Initiales</strong> - décoratives : elles doublent un nom qui doit être présent dans le contexte.</li>
        <li><strong>Jamais seul porteur d'identité</strong> - dans une liste, le nom en texte accompagne l'avatar (voir <router-link class="doc-link" to="/docs/item">Item</router-link>).</li>
        <li><strong>Contraste</strong> - les initiales sont en blanc sur le dégradé de marque : ne pas remplacer ce fond par une couleur claire.</li>
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
import { BaseAvatar, BaseIcon } from '@tommaniglier/design-system-lib/vue';

const code = `<BaseAvatar initials="TM" :size="48" />
<BaseAvatar initials="NS" :size="40" />
<BaseAvatar initials="AB" :size="32" />`;

const mutedCode = `<BaseAvatar variant="muted" initials="TM" :size="48" />
<BaseAvatar variant="muted" initials="NS" :size="40" />
<BaseAvatar variant="muted" initials="AB" :size="32" />`;

const iconCode = `<BaseAvatar variant="muted" :size="40">
  <template #icon><BaseIcon name="user" :size="18" /></template>
</BaseAvatar>

<BaseAvatar variant="dark" :size="40">
  <template #icon><BaseIcon name="user" :size="18" /></template>
</BaseAvatar>`;

const statusCode = `<BaseAvatar initials="TM" :size="40" status="online" />
<BaseAvatar variant="muted" initials="NS" :size="40" status="busy" />
<BaseAvatar variant="muted" initials="AB" :size="40" status="offline" />`;

const rows: PropRow[] = [
  { name: 'src', type: 'string', default: '-', description: "URL de l'image." },
  { name: 'alt', type: 'string', default: "''", description: 'Texte alternatif.' },
  { name: 'initials', type: 'string', default: "'?'", description: 'Repli affiché sans image.' },
  { name: 'size', type: 'number', default: '40', description: 'Diamètre en pixels.' },
  { name: 'variant', type: "'gradient' | 'muted' | 'dark'", default: "'gradient'", description: 'Style du fond.' },
  { name: 'status', type: "'online' | 'busy' | 'offline'", default: '-', description: 'Pastille de statut en bas à droite.' },
];
</script>
