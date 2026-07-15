<template>
  <div class="card">
    <span v-if="label" class="card__label">{{ label }}</span>
    <div class="card__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label?: string }>();
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.card__label {
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted-foreground);
}

.card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}
</style>
