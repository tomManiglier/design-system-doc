<template>
  <div class="docs">
    <aside class="docs__sidebar">
      <nav class="docs__nav">
        <div v-for="group in nav" :key="group.title" class="docs__group">
          <p class="docs__group-title">{{ group.title }}</p>
          <ul>
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
import type { NavGroup } from './docs/nav';

defineProps<{ nav: NavGroup[] }>();
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
  padding: 24px 0;
}

.docs__group + .docs__group {
  margin-top: 28px;
}

.docs__group-title {
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted-foreground);
  margin: 0 0 10px;
}

.docs__link {
  display: block;
  padding: 6px 12px;
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
    padding-bottom: 8px;
  }
}
</style>
