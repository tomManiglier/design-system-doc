<template>
  <Navigation />
  <router-view />
  <CommandPalette />
</template>

<script setup lang="ts">
import Navigation from './components/Navigation.vue';
import CommandPalette from './components/CommandPalette.vue';
</script>
