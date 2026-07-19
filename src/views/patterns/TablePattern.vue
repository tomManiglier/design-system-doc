<template>
  <DocPage
    eyebrow="Patterns"
    title="Tableau riche"
    description="Un tableau de données avec recherche, tri, sélection et édition en ligne - assemblé à partir de Table, Input, Checkbox, Badge, Menu et Pagination."
  >
    <section class="doc-section">
      <h2>Exemple</h2>
      <DemoBlock :code="code" stack>
        <div class="pattern-table">
          <div class="pattern-table__toolbar">
            <BaseInput v-model="query" placeholder="Rechercher un projet…">
              <template #icon>
                <BaseIcon name="search" :size="16" />
              </template>
            </BaseInput>
            <BaseSelect v-model="statusFilter" :options="statusOptions" placeholder="Tous les statuts" />
          </div>

          <div v-if="selectedCount > 0" class="pattern-table__bulk">
            <span class="pattern-table__bulk-count">
              {{ selectedCount }} projet{{ selectedCount > 1 ? 's' : '' }} sélectionné{{ selectedCount > 1 ? 's' : '' }}
            </span>
            <div class="pattern-table__bulk-actions">
              <BaseButton variant="outline" @click="selected = new Set()">Annuler la sélection</BaseButton>
              <BaseButton variant="destructive-outline" @click="bulkDelete">Supprimer</BaseButton>
            </div>
          </div>

          <div class="pattern-table__grid">
            <table class="rich-table">
              <caption class="sr-only">Projets de l'équipe</caption>
              <thead>
                <tr>
                  <th class="rich-table__select">
                    <BaseCheckbox :model-value="allOnPageSelected" @update:model-value="toggleAllOnPage">
                      <span class="sr-only">Sélectionner tous les projets de la page</span>
                    </BaseCheckbox>
                  </th>
                  <th :aria-sort="ariaSort('name')">
                    <button type="button" class="rich-table__sort" @click="sortBy('name')">
                      Projet
                      <BaseIcon
                        name="chevron-down"
                        :size="13"
                        class="rich-table__sort-icon"
                        :class="{
                          'rich-table__sort-icon--active': sortKey === 'name',
                          'rich-table__sort-icon--desc': sortKey === 'name' && sortDir === 'desc',
                        }"
                      />
                    </button>
                  </th>
                  <th>Responsable</th>
                  <th :aria-sort="ariaSort('due')">
                    <button type="button" class="rich-table__sort" @click="sortBy('due')">
                      Échéance
                      <BaseIcon
                        name="chevron-down"
                        :size="13"
                        class="rich-table__sort-icon"
                        :class="{
                          'rich-table__sort-icon--active': sortKey === 'due',
                          'rich-table__sort-icon--desc': sortKey === 'due' && sortDir === 'desc',
                        }"
                      />
                    </button>
                  </th>
                  <th>Statut</th>
                  <th class="rich-table__actions" aria-label="Actions"></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="p in page"
                  :key="p.id"
                  class="rich-table__row"
                  :class="{ 'rich-table__row--selected': selected.has(p.id) }"
                >
                  <td>
                    <BaseCheckbox :model-value="selected.has(p.id)" @update:model-value="toggleOne(p.id)">
                      <span class="sr-only">Sélectionner {{ p.name }}</span>
                    </BaseCheckbox>
                  </td>
                  <td class="rich-table__name">
                    <input
                      v-if="editingId === p.id"
                      v-model="draftName"
                      type="text"
                      autofocus
                      class="rich-table__rename-input"
                      :aria-label="`Renommer ${p.name}`"
                      @keydown.enter="commitRename(p)"
                      @keydown.escape="cancelRename"
                      @blur="commitRename(p)"
                    />
                    <template v-else>{{ p.name }}</template>
                  </td>
                  <td>
                    <div class="rich-table__owner">
                      <BaseAvatar :initials="initials(p.owner)" variant="muted" :size="24" />
                      {{ p.owner }}
                    </div>
                  </td>
                  <td>{{ formatDue(p.due) }}</td>
                  <td>
                    <BaseBadge :variant="p.status === 'Livré' ? 'primary' : 'outline'">
                      {{ p.status }}
                    </BaseBadge>
                  </td>
                  <td class="rich-table__actions">
                    <BaseMenu :entries="actions" @select="(value) => onAction(value, p)">
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
                <tr v-if="page.length === 0">
                  <td colspan="6" class="rich-table__empty">
                    <template v-if="projects.length === 0">
                      Plus aucun projet. Voir le pattern
                      <router-link class="doc-link" to="/patterns/empty-states">États vides</router-link>.
                    </template>
                    <template v-else>
                      Aucun projet ne correspond à cette recherche. Essayez un autre terme ou retirez le filtre de statut.
                    </template>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="pattern-table__footer">
            <span class="pattern-table__count">
              {{ filteredProjects.length }} / {{ projects.length }} projets
            </span>
            <BasePagination v-model="current" :total="totalPages" />
          </div>
          <p class="pattern-table__toast" role="status" aria-live="polite">{{ toast }}</p>
        </div>
      </DemoBlock>
    </section>

    <section class="doc-section">
      <h2>Décisions UX</h2>
      <ul class="doc-list">
        <li><strong>Une colonne d'identité en premier</strong> (le nom), en graisse medium : c'est la clé de lecture de la ligne.</li>
        <li>La recherche et le filtre de statut agissent immédiatement sur la liste, <strong>avant le tri et la pagination</strong> - jamais un filtre qui ignore l'état trié en cours.</li>
        <li><strong>Le tri se limite aux colonnes où il a du sens</strong> (ici Projet et Échéance) ; la colonne triée reste visible via <code>aria-sort</code> et une flèche dans l'en-tête, pas seulement par l'ordre des lignes.</li>
        <li><strong>Une sélection fait apparaître une barre d'actions contextuelle</strong> au-dessus du tableau - jamais de boutons d'action groupée actifs en permanence sur une sélection vide.</li>
        <li>Une suppression groupée reste irréversible : dans une vraie application, elle passe par une confirmation (<router-link class="doc-link" to="/docs/dialog">Dialog</router-link>) avant d'agir - simplifiée ici pour la démonstration.</li>
        <li><strong>Renommer se fait en ligne</strong>, sans Dialog : c'est une modification rapide et réversible (<kbd>Échap</kbd> annule). Une action plus lourde ou destructive garde sa confirmation.</li>
        <li>Chaque action confirmée affiche un <strong>retour temporaire annoncé</strong> (<code>aria-live</code>), même logique que <router-link class="doc-link" to="/patterns/feedback">Notifications &amp; feedback</router-link>.</li>
        <li><strong>Les statuts passent par <router-link class="doc-link" to="/docs/badge">Badge</router-link></strong>, avec un vocabulaire fermé (Livré, En cours…) - pas de texte libre.</li>
        <li>L'avatar aide à repérer un responsable au coup d'œil sur une longue liste, mais le nom reste toujours affiché en texte à côté - jamais l'avatar seul.</li>
        <li><strong>Les actions par ligne sont regroupées dans un <router-link class="doc-link" to="/docs/menu">Menu</router-link></strong> en fin de ligne ; au-delà de deux actions, jamais une rangée de boutons.</li>
        <li><strong>Paginer au-delà de ~20 lignes</strong> avec <router-link class="doc-link" to="/docs/pagination">Pagination</router-link>, et annoncer le total filtré et le total réel.</li>
        <li>Sur mobile, le tableau défile horizontalement dans son conteneur - on ne casse pas les colonnes.</li>
      </ul>
      <p>
        Pour un tableau simple sans sélection ni tri, le composant
        <router-link class="doc-link" to="/docs/table">Table</router-link> suffit tel quel.
      </p>
    </section>
  </DocPage>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import DocPage from '../../components/docs/DocPage.vue';
import DemoBlock from '../../components/docs/DemoBlock.vue';
import {
  BaseAvatar,
  BaseBadge,
  BaseButton,
  BaseCheckbox,
  BaseIcon,
  BaseInput,
  BaseMenu,
  BaseSelect,
  BasePagination,
} from '@tommaniglier/design-system-lib/vue';
import type { MenuEntry, SelectOption } from '@tommaniglier/design-system-lib/vue';

interface ProjectRow {
  id: string;
  name: string;
  owner: string;
  status: string;
  due: string;
}

const projects = ref<ProjectRow[]>([
  { id: 'p1', name: 'Refonte site vitrine', owner: 'Marie Dupont', status: 'En cours', due: '2026-08-02' },
  { id: 'p2', name: 'App mobile SAV', owner: 'Nicolas Sy', status: 'Livré', due: '2026-07-10' },
  { id: 'p3', name: 'Portail fournisseurs', owner: 'Lina Roche', status: 'En cours', due: '2026-09-15' },
  { id: 'p4', name: 'Dashboard qualité', owner: 'Tom Maniglier', status: 'Livré', due: '2026-06-28' },
  { id: 'p5', name: 'Intranet RH', owner: 'Marie Dupont', status: 'En cours', due: '2026-08-20' },
  { id: 'p6', name: 'Catalogue produits', owner: 'Nicolas Sy', status: 'En cours', due: '2026-10-05' },
]);

// Recherche & filtre
const query = ref('');
const statusFilter = ref('');
const statusOptions: SelectOption[] = [
  { label: 'En cours', value: 'En cours' },
  { label: 'Livré', value: 'Livré' },
];

const filteredProjects = computed(() =>
  projects.value.filter(
    (p) =>
      p.name.toLowerCase().includes(query.value.trim().toLowerCase()) &&
      (!statusFilter.value || p.status === statusFilter.value),
  ),
);

// Tri
type SortKey = 'name' | 'due';
const sortKey = ref<SortKey | null>(null);
const sortDir = ref<'asc' | 'desc'>('asc');

function sortBy(key: SortKey) {
  if (sortKey.value === key) {
    sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortDir.value = 'asc';
  }
  current.value = 1;
}

function ariaSort(key: SortKey): 'ascending' | 'descending' | 'none' {
  if (sortKey.value !== key) return 'none';
  return sortDir.value === 'asc' ? 'ascending' : 'descending';
}

const sortedProjects = computed(() => {
  if (!sortKey.value) return filteredProjects.value;
  const dir = sortDir.value === 'asc' ? 1 : -1;
  const key = sortKey.value;
  return [...filteredProjects.value].sort((a, b) => a[key].localeCompare(b[key]) * dir);
});

// Pagination
const pageSize = 4;
const current = ref(1);
const totalPages = computed(() => Math.max(1, Math.ceil(sortedProjects.value.length / pageSize)));
const page = computed(() => {
  const safePage = Math.min(current.value, totalPages.value);
  const start = (safePage - 1) * pageSize;
  return sortedProjects.value.slice(start, start + pageSize);
});

watch([query, statusFilter], () => {
  current.value = 1;
});

// Sélection
const selected = ref<Set<string>>(new Set());
const selectedCount = computed(() => selected.value.size);
const allOnPageSelected = computed(
  () => page.value.length > 0 && page.value.every((p) => selected.value.has(p.id)),
);

function toggleAllOnPage() {
  const next = new Set(selected.value);
  if (allOnPageSelected.value) {
    page.value.forEach((p) => next.delete(p.id));
  } else {
    page.value.forEach((p) => next.add(p.id));
  }
  selected.value = next;
}

function toggleOne(id: string) {
  const next = new Set(selected.value);
  if (next.has(id)) next.delete(id);
  else next.add(id);
  selected.value = next;
}

// Retour temporaire annoncé
const toast = ref('');
let toastTimer: ReturnType<typeof setTimeout> | undefined;
function showToast(message: string) {
  toast.value = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (toast.value = ''), 2200);
}
onBeforeUnmount(() => clearTimeout(toastTimer));

function bulkDelete() {
  const count = selectedCount.value;
  projects.value = projects.value.filter((p) => !selected.value.has(p.id));
  selected.value = new Set();
  showToast(`${count} projet${count > 1 ? 's' : ''} supprimé${count > 1 ? 's' : ''}.`);
}

function deleteOne(row: ProjectRow) {
  projects.value = projects.value.filter((p) => p.id !== row.id);
  const next = new Set(selected.value);
  next.delete(row.id);
  selected.value = next;
  showToast(`« ${row.name} » supprimé.`);
}

// Renommer en ligne
const editingId = ref<string | null>(null);
const draftName = ref('');

function startRename(row: ProjectRow) {
  editingId.value = row.id;
  draftName.value = row.name;
}

function commitRename(row: ProjectRow) {
  if (editingId.value !== row.id) return;
  const trimmed = draftName.value.trim();
  if (trimmed && trimmed !== row.name) {
    row.name = trimmed;
    showToast(`Projet renommé « ${trimmed} ».`);
  }
  editingId.value = null;
}

function cancelRename() {
  editingId.value = null;
}

function onAction(value: string, row: ProjectRow) {
  if (value === 'delete') deleteOne(row);
  else if (value === 'rename') startRename(row);
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function formatDue(iso: string) {
  return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(
    new Date(`${iso}T00:00:00`),
  );
}

const actions: MenuEntry[] = [
  { label: 'Ouvrir', value: 'open', icon: 'folder' },
  { label: 'Renommer', value: 'rename', icon: 'edit' },
  { separator: true },
  { label: 'Supprimer', value: 'delete', icon: 'trash', danger: true },
];

const code = `<BaseInput v-model="query" placeholder="Rechercher un projet…">
  <template #icon><BaseIcon name="search" :size="16" /></template>
</BaseInput>
<BaseSelect v-model="statusFilter" :options="statusOptions" placeholder="Tous les statuts" />

<table>
  <thead>
    <tr>
      <th><BaseCheckbox :model-value="allOnPageSelected" @update:model-value="toggleAllOnPage" /></th>
      <th :aria-sort="ariaSort('name')">
        <button @click="sortBy('name')">Projet <BaseIcon name="chevron-down" /></button>
      </th>
      <th>Responsable</th>
      <th>Échéance</th>
      <th>Statut</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="p in page" :key="p.id">
      <td><BaseCheckbox :model-value="selected.has(p.id)" @update:model-value="toggleOne(p.id)" /></td>
      <td>
        <input v-if="editingId === p.id" v-model="draftName"
               @keydown.enter="commitRename(p)" @keydown.escape="cancelRename" @blur="commitRename(p)" />
        <template v-else>{{ p.name }}</template>
      </td>
      <td><BaseAvatar :initials="initials(p.owner)" variant="muted" :size="24" /> {{ p.owner }}</td>
      <td>{{ formatDue(p.due) }}</td>
      <td><BaseBadge>{{ p.status }}</BaseBadge></td>
      <td>
        <BaseMenu :entries="actions" @select="(value) => onAction(value, p)">
          <template #trigger><BaseButton variant="outline" icon-only aria-label="Actions">…</BaseButton></template>
        </BaseMenu>
      </td>
    </tr>
  </tbody>
</table>

<!-- barre contextuelle si selectedCount > 0 -->
<BaseButton variant="destructive-outline" @click="bulkDelete">Supprimer</BaseButton>

<BasePagination v-model="current" :total="totalPages" />

<!-- retour temporaire après une action -->
<p role="status" aria-live="polite">{{ toast }}</p>`;
</script>

<style scoped lang="scss">
.pattern-table {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
}

.pattern-table__toolbar {
  display: grid;
  grid-template-columns: 1fr 180px;
  gap: 10px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
}

.pattern-table__bulk {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 10px 14px;
  background: var(--color-muted);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.pattern-table__bulk-count {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
}

.pattern-table__bulk-actions {
  display: flex;
  gap: 8px;
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

.rich-table__select {
  width: 1%;
}

.rich-table__row--selected {
  background: color-mix(in srgb, var(--color-brand-primary) 12%, transparent);
}

.rich-table__sort {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  font: inherit;
  font-weight: var(--weight-medium);
  color: inherit;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--color-foreground);
  }
}

.rich-table__sort-icon {
  opacity: 0.35;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;
}

.rich-table__sort-icon--active {
  opacity: 1;
}

.rich-table__sort-icon--desc {
  transform: rotate(180deg);
}

.rich-table__name {
  font-weight: var(--weight-medium);
}

.rich-table__rename-input {
  width: 100%;
  max-width: 220px;
  padding: 5px 8px;
  font: inherit;
  font-weight: var(--weight-medium);
  color: var(--color-foreground);
  background: var(--color-surface);
  border: 1px solid var(--color-ring);
  border-radius: var(--radius-sm);

  &:focus-visible {
    outline: 2px solid var(--color-ring);
    outline-offset: 1px;
  }
}

.rich-table__owner {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rich-table__actions {
  width: 1%;
  white-space: nowrap;
  text-align: right;
}

.rich-table__empty {
  padding: 24px 14px;
  text-align: center;
  color: var(--color-muted-foreground);
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

.pattern-table__toast {
  min-height: 18px;
  font-size: var(--text-xs);
  color: var(--color-muted-foreground);
  margin: 0;
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
