import { defineStore } from 'pinia';

export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => ({
    isMenuCollapse: false,
    isLayoutCompact: false,
  }),
  getters: {},
  actions: {
    toggleMenuCollapse() {
      this.isMenuCollapse = !this.isMenuCollapse;
    },
    toggleLayoutCompact() {
      this.isLayoutCompact = !this.isLayoutCompact;
    },
  },
});
