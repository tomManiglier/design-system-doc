<template>
  <article class="doc">
    <header class="doc__header">
      <p v-if="eyebrow" class="doc__eyebrow">{{ eyebrow }}</p>
      <div class="doc__title">
        <h1>{{ title }}</h1>
        <span v-if="status" class="doc__status" :class="`doc__status--${status}`">
          {{ statusLabels[status] }}
        </span>
      </div>
      <p class="doc__desc">{{ description }}</p>
    </header>
    <slot />
  </article>
</template>

<script setup lang="ts">
export type DocStatus = 'draft' | 'beta' | 'stable' | 'deprecated';

defineProps<{
  title: string;
  description: string;
  eyebrow?: string;
  status?: DocStatus;
}>();

const statusLabels: Record<DocStatus, string> = {
  draft: 'Draft',
  beta: 'Beta',
  stable: 'Stable',
  deprecated: 'Deprecated',
};
</script>

<style scoped lang="scss">
.doc__title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.doc__status {
  display: inline-flex;
  align-items: center;
  height: 22px;
  padding: 0 10px;
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  border-radius: 999px;
  border: 1px solid var(--color-border);
  color: var(--color-muted-foreground);
}

.doc__status--stable {
  color: #2e7d32;
  border-color: rgba(46, 125, 50, 0.35);
  background: rgba(46, 125, 50, 0.08);
}

.doc__status--beta {
  color: var(--color-accent);
  border-color: rgba(0, 154, 223, 0.35);
  background: rgba(0, 154, 223, 0.08);
}

.doc__status--draft {
  color: var(--color-muted-foreground);
  background: var(--color-muted);
}

.doc__status--deprecated {
  color: #b3261e;
  border-color: rgba(179, 38, 30, 0.35);
  background: rgba(179, 38, 30, 0.08);
}
</style>
