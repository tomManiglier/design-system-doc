<template>
  <DocPage
    eyebrow="Feedback"
    title="Dialog"
    description="Fenêtre modale superposée pour une action ou une information nécessitant l'attention. Fermeture au clic sur le fond ou via Échap."
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code">
        <BaseButton variant="primary" @click="openDialog = true">Ouvrir la fenêtre</BaseButton>
        <BaseDialog
          v-model="openDialog"
          title="Confirmer la publication"
          description="Cette version sera visible par toute l'équipe."
        >
          <div class="actions">
            <BaseButton variant="primary" @click="openDialog = false">Publier</BaseButton>
            <BaseButton variant="outline" @click="openDialog = false">Annuler</BaseButton>
          </div>
        </BaseDialog>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Destructive</h2>
      <p>La variante <code>danger</code> confirme une suppression : icône d'alerte et action irréversible mise en évidence.</p>
      <DemoBlock :code="dangerCode">
        <BaseButton variant="destructive-outline" @click="openDanger = true">Supprimer le projet</BaseButton>
        <BaseDialog
          v-model="openDanger"
          variant="danger"
          title="Supprimer ce projet ?"
          description="Cette action est irréversible. Toutes les données du projet seront définitivement supprimées."
        >
          <div class="actions">
            <BaseButton variant="destructive" @click="openDanger = false">Supprimer définitivement</BaseButton>
            <BaseButton variant="outline" @click="openDanger = false">Annuler</BaseButton>
          </div>
        </BaseDialog>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>closed</code></td><td>Rien n'est rendu dans le DOM (<code>v-if</code> sur <code>modelValue</code>).</td></tr>
            <tr><td><code>open</code></td><td>Voile sombre + panneau centré, ombre <code>--shadow-md</code>. Le défilement de la page est bloqué.</td></tr>
            <tr><td><code>danger</code></td><td>Variante d'accentuation pour les actions destructrices.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Trois façons de fermer : le bouton de fermeture, <code>Échap</code>, ou un clic sur le
        voile. Les trois émettent <code>update:modelValue</code> à <code>false</code>.
      </p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Rôle</strong> - <code>role="dialog"</code> avec <code>aria-modal="true"</code> : le contenu derrière est considéré comme inerte.</li>
        <li><strong>Clavier</strong> - <code>Échap</code> ferme (écouteur global posé à l'ouverture, retiré à la fermeture).</li>
        <li><strong>Libellé</strong> - le <code>title</code> nomme le dialog ; le bouton de fermeture porte un <code>aria-label</code>.</li>
        <li><strong>Focus</strong> - le piège de focus n'est pas implémenté : penser à donner le focus à un élément du dialog à l'ouverture, et à le rendre au déclencheur à la fermeture. À signaler comme manque si le besoin est structurant.</li>
        <li><strong>Défilement</strong> - bloqué sur <code>body</code> tant que le dialog est ouvert : l'utilisateur ne perd pas le contexte.</li>
        <li><strong>Contenu</strong> - court : une question, une ou deux actions. Au-delà, préférer un <router-link class="doc-link" to="/docs/drawer">Drawer</router-link> ou une page dédiée.</li>
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
import { BaseDialog, BaseButton } from '@tommaniglier/design-system-lib/vue';

const openDialog = ref(false);
const code = `<BaseButton @click="open = true">Ouvrir la fenêtre</BaseButton>

<BaseDialog
  v-model="open"
  title="Confirmer la publication"
  description="Cette version sera visible par toute l'équipe."
>
  <BaseButton @click="open = false">Publier</BaseButton>
</BaseDialog>`;

const openDanger = ref(false);
const dangerCode = `<BaseDialog
  v-model="open"
  variant="danger"
  title="Supprimer ce projet ?"
  description="Cette action est irréversible."
>
  <BaseButton variant="destructive" @click="confirm">Supprimer définitivement</BaseButton>
  <BaseButton variant="outline" @click="open = false">Annuler</BaseButton>
</BaseDialog>`;

const rows: PropRow[] = [
  { name: 'modelValue', type: 'boolean', default: 'false', description: 'Ouverture de la modale (v-model).' },
  { name: 'title', type: 'string', default: '-', description: "Titre de l'en-tête." },
  { name: 'description', type: 'string', default: '-', description: "Sous-titre de l'en-tête." },
  { name: 'variant', type: "'default' | 'danger'", default: "'default'", description: 'Le mode danger ajoute une icône d’alerte pour les confirmations destructives.' },
];
</script>

<style scoped lang="scss">
.actions {
  display: flex;
  gap: 8px;
}
</style>
