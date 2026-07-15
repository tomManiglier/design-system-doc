<template>
  <SidebarLayout :nav="docsNav" />
</template>

<script setup lang="ts">
import SidebarLayout from './SidebarLayout.vue';
import { docsNav } from './docs/nav';
</script>
