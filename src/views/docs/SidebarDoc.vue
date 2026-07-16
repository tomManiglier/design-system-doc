<template>
  <DocPage
    eyebrow="Navigation"
    title="Sidebar"
    description="Navigation latérale par groupes, avec entrée active mise en avant."
    status="beta"
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <BaseSidebar v-model="active" :groups="groups" />
        <p class="hint">Section active : {{ active }}</p>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Variante application</h2>
      <p>
        Avec la prop <code>full</code> et les slots <code>#header</code> et <code>#footer</code>,
        la sidebar occupe 100 % de la hauteur, comme dans une vraie application.
      </p>
      <DemoBlock :code="fullCode" stack>
        <div class="app-frame">
          <BaseSidebar v-model="activeFull" :groups="groups" full>
            <template #header>
              <span class="app-logo">Acme Inc.</span>
            </template>
            <template #footer>
              <div class="app-user">
                <BaseAvatar variant="muted" initials="JD" :size="30" />
                <span class="app-user__name">Jean Dupont</span>
              </div>
            </template>
          </BaseSidebar>
          <div class="app-content">
            <p class="app-content__hint">Contenu : {{ activeFull }}</p>
          </div>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>États</h2>
      <div class="doc-table-wrap">
        <table class="doc-table">
          <thead><tr><th>État</th><th>Rendu</th></tr></thead>
          <tbody>
            <tr><td><code>default</code></td><td>Groupes titrés, items en <code>--color-muted-foreground</code>.</td></tr>
            <tr><td><code>selected</code></td><td>Item actif : fond <code>--color-muted</code>, texte <code>--color-foreground</code>.</td></tr>
            <tr><td><code>hover</code></td><td>Fond <code>--color-muted</code>.</td></tr>
          </tbody>
        </table>
      </div>
      <p>La sidebar organise des <code>SidebarGroup</code> : chaque groupe a un titre et ses items. Sur mobile, elle passe au-dessus du contenu (voir <router-link class="doc-link" to="/docs/grid">Grille &amp; layout</router-link>).</p>
    </section>

    <section class="doc-section">
      <h2>Accessibilité</h2>
      <ul class="doc-list">
        <li><strong>Repère</strong> - envelopper dans <code>&lt;nav aria-label&gt;</code> quand elle sert de navigation : c'est ce qui permet d'y sauter directement.</li>
        <li><strong>Item actif</strong> - marquer <code>aria-current="page"</code>, pas seulement un fond différent.</li>
        <li><strong>Groupes</strong> - les titres de groupe structurent la liste : ils ne sont pas décoratifs.</li>
        <li><strong>Clavier</strong> - items atteignables au <code>Tab</code> dans l'ordre visuel.</li>
        <li><strong>Longueur</strong> - au-delà d'une vingtaine d'items, les groupes deviennent indispensables (cf. la sidebar de cette doc).</li>
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
import { BaseSidebar, BaseAvatar } from '@tommaniglier/design-system-lib/vue';
import type { SidebarGroup } from '@tommaniglier/design-system-lib/vue';

const active = ref('overview');
const activeFull = ref('overview');

const groups: SidebarGroup[] = [
  {
    title: 'Général',
    items: [
      { label: 'Vue d’ensemble', value: 'overview' },
      { label: 'Statistiques', value: 'stats' },
    ],
  },
  {
    title: 'Paramètres',
    items: [
      { label: 'Profil', value: 'profile' },
      { label: 'Équipe', value: 'team' },
      { label: 'Facturation', value: 'billing' },
    ],
  },
];

const code = `<BaseSidebar v-model="active" :groups="groups" />

const groups: SidebarGroup[] = [
  {
    title: 'Général',
    items: [
      { label: 'Vue d’ensemble', value: 'overview' },
      { label: 'Statistiques', value: 'stats' },
    ],
  },
];`;

const fullCode = `<BaseSidebar v-model="active" :groups="groups" full>
  <template #header><span>Acme Inc.</span></template>
  <template #footer>
    <BaseAvatar variant="muted" initials="JD" :size="30" /> Jean Dupont
  </template>
</BaseSidebar>`;

const rows: PropRow[] = [
  { name: 'modelValue', type: 'string', default: '-', description: 'Value de l’entrée active (v-model).' },
  { name: 'groups', type: 'SidebarGroup[]', default: '-', description: 'Groupes { title, items: { label, value }[] }.' },
  { name: 'full', type: 'boolean', default: 'false', description: 'Occupe 100 % de la hauteur du conteneur, sans arrondis.' },
  { name: '#header / #footer', type: 'slot', default: '-', description: 'Zones fixes en haut et en bas de la sidebar.' },
];
</script>

<style scoped lang="scss">
.hint {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}

.app-frame {
  display: flex;
  width: 100%;
  height: 420px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-background);
}

.app-logo {
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: var(--text-base);
}

.app-user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.app-user__name {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
}

.app-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-content__hint {
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}
</style>
