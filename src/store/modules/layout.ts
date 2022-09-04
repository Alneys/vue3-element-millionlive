import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => ({
    isMenuCollapse: false,
    isLayoutCompact: false,
    preferredLang: useLocalStorage(
      'language',
      import.meta.env.VITE_I18N_DEFAULT_LANGUAGE
    ),
  }),
  getters: {
    isMasked: (state) => state.isLayoutCompact && !state.isMenuCollapse,
  },
  actions: {
    toggleMenuCollapse() {
      this.isMenuCollapse = !this.isMenuCollapse;
    },
  },
});
