<template>
  <div class="color-card">
    <span class="color-card__swatch" :style="{ background: hex }" />
    <span class="color-card__name">{{ name }}</span>
    <button type="button" class="color-card__value" @click="copy(hex, 'hex')">
      <span>{{ copied === 'hex' ? 'Copié !' : hex }}</span>
      <CopyIcon />
    </button>
    <button type="button" class="color-card__value" @click="copy(rgb, 'rgb')">
      <span>{{ copied === 'rgb' ? 'Copié !' : rgb }}</span>
      <CopyIcon />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, h, ref } from 'vue';

const props = defineProps<{
  name: string;
  hex: string;
}>();

const copied = ref<'hex' | 'rgb' | null>(null);

const rgb = computed(() => {
  const value = props.hex.replace('#', '');
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
});

function copy(value: string, kind: 'hex' | 'rgb') {
  navigator.clipboard.writeText(value);
  copied.value = kind;
  setTimeout(() => {
    if (copied.value === kind) copied.value = null;
  }, 1200);
}

const CopyIcon = () =>
  h(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: 13,
      height: 13,
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': 2,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'aria-hidden': 'true',
    },
    [
      h('rect', { x: 9, y: 9, width: 13, height: 13, rx: 2 }),
      h('path', { d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' }),
    ],
  );
</script>

<style scoped lang="scss">
.color-card {
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
  width: 140px;
  padding: 9px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
}

.color-card__swatch {
  width: 120px;
  height: 120px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(74, 74, 73, 0.08);
}

.color-card__name {
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  margin: 4px 2px 0;
}

.color-card__value {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 4px 6px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-muted-foreground);
  background: transparent;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition:
    background 0.12s ease,
    color 0.12s ease;

  &:hover {
    background: var(--color-muted);
    color: var(--color-foreground);
  }

  svg {
    flex: none;
    opacity: 0.6;
  }
}
</style>
