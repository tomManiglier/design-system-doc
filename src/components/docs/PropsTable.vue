<template>
  <div class="props-wrap">
    <table class="props">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Défaut</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.name">
          <td><code>{{ row.name }}</code></td>
          <td><code class="props__type">{{ row.type }}</code></td>
          <td><code>{{ row.default ?? '-' }}</code></td>
          <td>{{ row.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { PropRow } from './types';

defineProps<{ rows: PropRow[] }>();
</script>

<style scoped lang="scss">
.props-wrap {
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.props {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);
}

th,
td {
  text-align: left;
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border);
  vertical-align: top;
}

th {
  font-weight: var(--weight-medium);
  color: var(--color-muted-foreground);
  background: var(--color-muted);
}

tbody tr:last-child td {
  border-bottom: none;
}

code {
  font-family: ui-monospace, 'SF Mono', 'Cascadia Code', Consolas, monospace;
  font-size: 12px;
  background: var(--color-muted);
  padding: 2px 6px;
  border-radius: 6px;
}

.props__type {
  color: var(--color-accent);
}
</style>
