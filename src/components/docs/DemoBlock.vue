<template>
  <div class="demo">
    <div v-if="$slots.default" class="demo__preview" :class="{ 'demo__preview--stack': stack }">
      <slot />
    </div>
    <div v-if="code" class="demo__code">
      <button class="demo__copy" type="button" @click="copy">
        {{ copied ? 'Copié' : 'Copier' }}
      </button>
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots } from 'vue';

const props = defineProps<{
  code?: string;
  stack?: boolean;
}>();

const $slots = useSlots();
const copied = ref(false);

function copy() {
  if (!props.code) return;
  navigator.clipboard.writeText(props.code);
  copied.value = true;
  setTimeout(() => (copied.value = false), 1500);
}
</script>

<style scoped lang="scss">
.demo {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.demo__preview {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding: 40px;
  min-height: 120px;
}

.demo__preview--stack {
  flex-direction: column;
  align-items: flex-start;
}

.demo__code {
  position: relative;
  border-top: 1px solid var(--color-border);
  background: var(--color-muted);
  overflow: hidden;
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}

.demo__code pre {
  margin: 0;
  padding: 18px 20px;
  overflow-x: auto;
}

.demo__code code {
  font-family: ui-monospace, 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-foreground);
  white-space: pre;
}

.demo__copy {
  position: absolute;
  top: 12px;
  right: 12px;
  height: 28px;
  padding: 0 12px;
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  color: var(--color-muted-foreground);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  cursor: pointer;

  &:hover {
    color: var(--color-foreground);
  }
}
</style>
