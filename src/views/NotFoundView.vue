<template>
  <div class="notfound">
    <p class="notfound__code" aria-hidden="true">404</p>
    <h1 class="notfound__title">Page introuvable</h1>
    <p class="notfound__desc">Cette page n'existe pas ou a été déplacée.</p>
    <BaseButton variant="brand" @click="router.push('/')">Retour à l'accueil</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { BaseButton } from '@tommaniglier/design-system-lib/vue';

const router = useRouter();
</script>

<style scoped lang="scss">
.notfound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 60vh;
  padding: 48px 24px;
  text-align: center;
}

.notfound__code {
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: 72px;
  line-height: 1;
  background: var(--gradient-brand);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 0;
}

.notfound__title {
  font-family: var(--font-title);
  font-weight: var(--weight-bold);
  font-size: var(--text-2xl, 28px);
  margin: 0;
}

.notfound__desc {
  color: var(--color-muted-foreground);
  margin: 0 0 12px;
}
</style>
