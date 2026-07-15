import { ref } from 'vue';

// État global partagé entre la barre de recherche (Navigation) et la palette.
const open = ref(false);

export function useCommandPalette() {
  return {
    open,
    openPalette: () => {
      open.value = true;
    },
    closePalette: () => {
      open.value = false;
    },
    toggle: () => {
      open.value = !open.value;
    },
  };
}
