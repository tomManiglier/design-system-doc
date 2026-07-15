<template>
  <SidebarLayout :nav="agentsNav" />
</template>

<script setup lang="ts">
import SidebarLayout from './SidebarLayout.vue';
import { agentsNav } from './docs/nav';
</script>
