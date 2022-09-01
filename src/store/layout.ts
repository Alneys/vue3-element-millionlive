import { defineStore } from 'pinia';

export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => ({
    isMenuCollapse: false,
    isLayoutCompact: false,
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
