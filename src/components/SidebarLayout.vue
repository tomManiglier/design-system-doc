<template>
  <div class="docs">
    <aside class="docs__sidebar">
      <nav class="docs__nav">
        <div v-for="group in nav" :key="group.title" class="docs__group">
          <button
            type="button"
            class="docs__group-title"
            :class="{ 'docs__group-title--open': isOpen(group.title) }"
            :aria-expanded="isOpen(group.title)"
            @click="toggle(group.title)"
          >
            {{ group.title }}
            <svg
              class="docs__group-chevron"
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <ul v-show="isOpen(group.title)" class="docs__list">
            <li v-for="item in group.items" :key="item.to">
              <router-link class="docs__link" :to="item.to">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>

    <main class="docs__content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { NavGroup } from './docs/nav';

const props = defineProps<{ nav: NavGroup[] }>();
const route = useRoute();

function groupTitleForPath(path: string) {
  return props.nav.find((group) => group.items.some((item) => item.to === path))?.title;
}

const openGroups = reactive(new Set<string>());
const initialGroup = groupTitleForPath(route.path);
if (initialGroup) openGroups.add(initialGroup);

watch(
  () => route.path,
  (path) => {
    const title = groupTitleForPath(path);
    if (title) openGroups.add(title);
  },
);

function isOpen(title: string) {
  return openGroups.has(title);
}

function toggle(title: string) {
  if (openGroups.has(title)) openGroups.delete(title);
  else openGroups.add(title);
}
</script>

<style scoped lang="scss">
.docs {
  display: flex;
  align-items: flex-start;
  gap: 48px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.docs__sidebar {
  flex: 0 0 220px;
  position: sticky;
  top: 24px;
  align-self: flex-start;
  padding: 16px 12px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.docs__nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.docs__group-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted-foreground);
  background: transparent;
  border-radius: var(--radius-sm);
  margin: 0;
  padding: 7px 10px;
  cursor: pointer;
  transition: color 0.12s ease;

  &:hover {
    color: var(--color-foreground);
  }
}

.docs__group-chevron {
  flex: none;
  transition: transform 0.2s ease;
}

.docs__group-title--open .docs__group-chevron {
  transform: rotate(180deg);
}

.docs__list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 4px;
}

.docs__link {
  display: block;
  padding: 7px 10px;
  font-size: var(--text-sm);
  color: var(--color-muted-foreground);
  border-radius: var(--radius-sm);
  transition:
    background 0.12s ease,
    color 0.12s ease;

  &:hover {
    color: var(--color-foreground);
    background: var(--color-muted);
  }

  &.router-link-active {
    color: var(--color-foreground);
    background: var(--color-muted);
    font-weight: var(--weight-medium);
  }
}

.docs__content {
  flex: 1;
  min-width: 0;
  padding: 24px 0 80px;
}

@media (max-width: 820px) {
  .docs {
    flex-direction: column;
    gap: 0;
  }

  .docs__sidebar {
    position: static;
    flex: none;
    width: 100%;
    margin-bottom: 16px;
  }
}
</style>
