<template>
  <nav class="navigation">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/docs">Docs</router-link></li>
      <li><router-link to="/docs/button">Components</router-link></li>
      <li><router-link to="/patterns">Patterns</router-link></li>
      <li><router-link to="/agents">Agents</router-link></li>
    </ul>

    <div class="nav-infos">
      <button type="button" class="nav-search" @click="openPalette">
        <svg
          class="nav-search__icon"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span class="nav-search__label">Search...</span>
        <kbd class="nav-search__kbd">{{ kbdLabel }}</kbd>
      </button>
      <BaseSeparator orientation="vertical" />
      <button
        type="button"
        class="dark-light"
        :aria-label="theme === 'dark' ? 'Passer en thème clair' : 'Passer en thème sombre'"
        @click="toggleTheme"
      >
        <svg
          class="dark-light__icon dark-light__icon--sun"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
        <svg
          class="dark-light__icon dark-light__icon--moon"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useCommandPalette } from '../composables/useCommandPalette';
import { useTheme } from '../composables/useTheme';
import { BaseSeparator } from '@tom/design-system/vue';

const { openPalette } = useCommandPalette();
const { theme, toggleTheme } = useTheme();

const isMac =
  typeof navigator !== 'undefined' &&
  /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
const kbdLabel = isMac ? '⌘ K' : 'Ctrl K';
</script>

<style scoped lang="scss">
nav {
  height: 64px;
  width: 100%;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    gap: 20px;
    font-size: 14px;
    font-weight: 500;
  }

  .nav-infos {
    display: flex;
    align-items: center;
    gap: 16px;

    .nav-search {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      height: 36px;
      width: 240px;
      padding: 0 8px 0 12px;
      font-size: 14px;
      color: var(--color-muted-foreground);
      background: var(--color-muted);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: border-color 0.15s ease;

      &:hover {
        border-color: var(--color-muted-foreground);
      }
    }

    .nav-search__icon {
      flex: none;
    }

    .nav-search__label {
      flex: 1;
      text-align: left;
    }

    .nav-search__kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      padding: 0 6px;
      font-family: var(--font-body);
      font-size: 11px;
      color: var(--color-muted-foreground);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 5px;
    }

    .dark-light {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      width: 36px;
      background: transparent;
      border: 1px solid var(--color-border);
      border-radius: 50%;
      color: var(--color-foreground);
      cursor: pointer;
      overflow: hidden;
      transition:
        background 0.2s ease,
        border-color 0.2s ease;

      &:hover {
        background: var(--color-muted);
      }
    }

    .dark-light__icon {
      position: absolute;
      transition:
        transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.3s ease;
    }

    // Thème clair : soleil visible, lune cachée en dessous
    .dark-light__icon--sun {
      transform: rotate(0deg) scale(1);
      opacity: 1;
    }

    .dark-light__icon--moon {
      transform: rotate(90deg) scale(0.4);
      opacity: 0;
    }

    // Thème sombre : bascule inverse
    :root[data-theme='dark'] & .dark-light__icon--sun,
    [data-theme='dark'] & .dark-light__icon--sun {
      transform: rotate(-90deg) scale(0.4);
      opacity: 0;
    }

    :root[data-theme='dark'] & .dark-light__icon--moon,
    [data-theme='dark'] & .dark-light__icon--moon {
      transform: rotate(0deg) scale(1);
      opacity: 1;
    }
  }


}
</style>
