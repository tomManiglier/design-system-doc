<template>
  <article class="doc">
    <header class="doc__header">
      <p v-if="eyebrow" class="doc__eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="doc__desc">{{ description }}</p>
    </header>
    <slot />
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  eyebrow?: string;
}>();
</script>
