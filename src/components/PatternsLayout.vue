<template>
  <SidebarLayout :nav="patternsNav" />
</template>

<script setup lang="ts">
import SidebarLayout from './SidebarLayout.vue';
import { patternsNav } from './docs/nav';
</script>
