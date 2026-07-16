<template>
  <DocPage
    eyebrow="Patterns"
    title="Tableau riche"
    description="Un tableau de données avec statuts, actions par ligne et pagination - assemblé à partir de Table, Badge, Menu et Pagination."
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <div class="pattern-table">
          <div class="pattern-table__grid">
            <table class="rich-table">
              <caption class="sr-only">Projets de l'équipe</caption>
              <thead>
                <tr>
                  <th>Projet</th>
                  <th>Responsable</th>
                  <th>Statut</th>
                  <th class="rich-table__actions" aria-label="Actions"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="p in page" :key="p.name">
                  <td class="rich-table__name">{{ p.name }}</td>
                  <td>{{ p.owner }}</td>
                  <td>
                    <BaseBadge :variant="p.status === 'Livré' ? 'primary' : 'outline'">
                      {{ p.status }}
                    </BaseBadge>
                  </td>
                  <td class="rich-table__actions">
                    <BaseMenu :entries="actions">
                      <template #trigger>
                        <BaseButton variant="outline" icon-only aria-label="Actions">
                          <template #icon>
                            <BaseIcon name="settings" :size="15" />
                          </template>
                        </BaseButton>
                      </template>
                    </BaseMenu>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="pattern-table__footer">
            <span class="pattern-table__count">{{ projects.length }} projets</span>
            <BasePagination v-model="current" :total="totalPages" />
          </div>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Décisions UX</h2>
      <ul class="doc-list">
        <li><strong>Une colonne d'identité en premier</strong> (le nom), en graisse medium : c'est la clé de lecture de la ligne.</li>
        <li><strong>Les statuts passent par <router-link class="doc-link" to="/docs/badge">Badge</router-link></strong>, avec un vocabulaire fermé (Livré, En cours…) - pas de texte libre.</li>
        <li><strong>Les actions par ligne sont regroupées dans un <router-link class="doc-link" to="/docs/menu">Menu</router-link></strong> en fin de ligne ; au-delà de deux actions, jamais une rangée de boutons.</li>
        <li><strong>Paginer au-delà de ~20 lignes</strong> avec <router-link class="doc-link" to="/docs/pagination">Pagination</router-link>, et annoncer le total.</li>
        <li>Le tri se limite aux colonnes où il a du sens ; l'état trié doit rester visible dans l'en-tête.</li>
        <li>Sur mobile, le tableau défile horizontalement dans son conteneur - on ne casse pas les colonnes.</li>
      </ul>
      <p>
        Pour un tableau simple sans actions, le composant
        <router-link class="doc-link" to="/docs/table">Table</router-link> suffit tel quel.
      </p>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import {
  BaseBadge,
  BaseButton,
  BaseIcon,
  BaseMenu,
  BasePagination,
} from '@tommaniglier/design-system-lib/vue';
import type { MenuEntry } from '@tommaniglier/design-system-lib/vue';

const projects = [
  { name: 'Refonte site vitrine', owner: 'Marie Dupont', status: 'En cours' },
  { name: 'App mobile SAV', owner: 'Nicolas Sy', status: 'Livré' },
  { name: 'Portail fournisseurs', owner: 'Lina Roche', status: 'En cours' },
  { name: 'Dashboard qualité', owner: 'Tom Maniglier', status: 'Livré' },
  { name: 'Intranet RH', owner: 'Marie Dupont', status: 'En cours' },
  { name: 'Catalogue produits', owner: 'Nicolas Sy', status: 'En cours' },
];

const pageSize = 4;
const current = ref(1);
const totalPages = Math.ceil(projects.length / pageSize);
const page = computed(() => projects.slice((current.value - 1) * pageSize, current.value * pageSize));

const actions: MenuEntry[] = [
  { label: 'Ouvrir', value: 'open', icon: 'folder' },
  { label: 'Renommer', value: 'rename', icon: 'edit' },
  { separator: true },
  { label: 'Supprimer', value: 'delete', icon: 'trash', danger: true },
];

const code = `<table>
  <thead>
    <tr><th>Projet</th><th>Responsable</th><th>Statut</th><th></th></tr>
  </thead>
  <tbody>
    <tr v-for="p in page" :key="p.name">
      <td>{{ p.name }}</td>
      <td>{{ p.owner }}</td>
      <td><BaseBadge>{{ p.status }}</BaseBadge></td>
      <td>
        <BaseMenu :entries="actions" @select="onAction">
          <template #trigger>
            <BaseButton variant="outline" icon-only aria-label="Actions">…</BaseButton>
          </template>
        </BaseMenu>
      </td>
    </tr>
  </tbody>
</table>

<BasePagination v-model="current" :total="totalPages" />`;
</script>

<style scoped lang="scss">
.pattern-table {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
}

.pattern-table__grid {
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.rich-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);

  th,
  td {
    text-align: left;
    padding: 10px 14px;
    border-bottom: 1px solid var(--color-border);
    vertical-align: middle;
  }

  th {
    font-weight: var(--weight-medium);
    color: var(--color-muted-foreground);
    background: var(--color-muted);
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover {
    background: var(--color-muted);
  }
}

.rich-table__name {
  font-weight: var(--weight-medium);
}

.rich-table__actions {
  width: 1%;
  white-space: nowrap;
  text-align: right;
}

.pattern-table__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
}

.pattern-table__count {
  font-size: var(--text-xs);
  color: var(--color-muted-foreground);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
