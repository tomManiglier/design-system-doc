<template>
  <teleport to="body">
    <transition name="cmd">
      <div v-if="open" class="cmd" @click.self="close">
        <div class="cmd__panel" role="dialog" aria-modal="true" aria-label="Recherche">
          <div class="cmd__search">
            <svg
              class="cmd__search-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              ref="inputRef"
              v-model="query"
              class="cmd__input"
              type="text"
              placeholder="Search documentation..."
              aria-label="Rechercher dans la documentation"
              @keydown.down.prevent="move(1)"
              @keydown.up.prevent="move(-1)"
              @keydown.enter.prevent="selectActive"
            />
          </div>

          <div ref="resultsRef" class="cmd__results">
            <template v-if="flat.length">
              <div v-for="group in filteredGroups" :key="group.title" class="cmd__group">
                <p class="cmd__group-title">{{ group.title }}</p>
                <button
                  v-for="item in group.items"
                  :key="item.to"
                  type="button"
                  class="cmd__item"
                  :class="{ 'cmd__item--active': item.index === activeIndex }"
                  @click="go(item.to)"
                  @mousemove="activeIndex = item.index"
                >
                  <span class="cmd__arrow" aria-hidden="true">→</span>
                  <span v-html="highlight(item.label)" />
                </button>
              </div>
            </template>
            <p v-else class="cmd__empty">Aucun résultat.</p>
          </div>

          <div class="cmd__footer">
            <kbd class="cmd__kbd">↵</kbd>
            <span>Aller à la page</span>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { docsNav } from './docs/nav';
import { useCommandPalette } from '../composables/useCommandPalette';

const router = useRouter();
const { open, openPalette, closePalette } = useCommandPalette();

const query = ref('');
const activeIndex = ref(0);
const inputRef = ref<HTMLInputElement | null>(null);
const resultsRef = ref<HTMLElement | null>(null);

interface IndexedItem {
  label: string;
  to: string;
  index: number;
}

const filteredGroups = computed(() => {
  const q = query.value.trim().toLowerCase();
  const groups: { title: string; items: IndexedItem[] }[] = [];
  let idx = 0;

  for (const group of docsNav) {
    const items = group.items
      .filter((it) => it.label.toLowerCase().includes(q))
      .map((it) => ({ label: it.label, to: it.to, index: idx++ }));
    if (items.length) groups.push({ title: group.title, items });
  }

  return groups;
});

const flat = computed(() => filteredGroups.value.flatMap((g) => g.items));

watch(query, () => {
  activeIndex.value = 0;
});

watch(open, async (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
  if (isOpen) {
    query.value = '';
    activeIndex.value = 0;
    await nextTick();
    inputRef.value?.focus();
  }
});

function move(dir: number) {
  const n = flat.value.length;
  if (!n) return;
  activeIndex.value = (activeIndex.value + dir + n) % n;
  nextTick(() => {
    const el = resultsRef.value?.querySelector('.cmd__item--active');
    (el as HTMLElement | null)?.scrollIntoView({ block: 'nearest' });
  });
}

function selectActive() {
  const item = flat.value[activeIndex.value];
  if (item) go(item.to);
}

function go(to: string) {
  closePalette();
  router.push(to);
}

function close() {
  closePalette();
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"]/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string,
  );
}

function highlight(label: string) {
  const q = query.value.trim();
  if (!q) return escapeHtml(label);
  const i = label.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return escapeHtml(label);
  return (
    escapeHtml(label.slice(0, i)) +
    '<mark>' +
    escapeHtml(label.slice(i, i + q.length)) +
    '</mark>' +
    escapeHtml(label.slice(i + q.length))
  );
}

function onKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    open.value ? closePalette() : openPalette();
  } else if (e.key === 'Escape' && open.value) {
    closePalette();
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown));
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});
</script>

<style scoped lang="scss">
.cmd {
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 96px 24px 24px;
  background: rgba(26, 26, 26, 0.5);
}

.cmd__panel {
  width: 100%;
  max-width: 480px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.cmd__search {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 16px;
  border-bottom: 1px solid var(--color-border);
}

.cmd__search-icon {
  flex: none;
  color: var(--color-muted-foreground);
}

.cmd__input {
  flex: 1;
  width: auto;
  height: 52px;
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-foreground);
  background: transparent;
  border: none;
  padding: 0;
  border-radius: 0;

  &::placeholder {
    color: var(--color-muted-foreground);
  }
}

.cmd__results {
  max-height: 340px;
  overflow-y: auto;
  padding: 8px;
}

.cmd__group + .cmd__group {
  margin-top: 4px;
}

.cmd__group-title {
  font-size: var(--text-xs);
  color: var(--color-muted-foreground);
  padding: 8px 8px 4px;
  margin: 0;
}

.cmd__item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 9px 8px;
  font-size: var(--text-sm);
  color: var(--color-foreground);
  text-align: left;
  background: transparent;
  border-radius: var(--radius-sm);
  cursor: pointer;
}

.cmd__item--active {
  background: var(--color-muted);
}

.cmd__arrow {
  color: var(--color-muted-foreground);
  flex: none;
}

:deep(mark) {
  background: transparent;
  color: var(--color-accent);
  font-weight: var(--weight-bold);
}

.cmd__empty {
  padding: 32px 8px;
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  margin: 0;
}

.cmd__footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-top: 1px solid var(--color-border);
  font-size: var(--text-xs);
  color: var(--color-muted-foreground);
}

.cmd__kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  background: var(--color-muted);
  border: 1px solid var(--color-border);
  border-radius: 5px;
}

.cmd-enter-active,
.cmd-leave-active {
  transition: opacity 0.15s ease;
}

.cmd-enter-from,
.cmd-leave-to {
  opacity: 0;
}
</style>
