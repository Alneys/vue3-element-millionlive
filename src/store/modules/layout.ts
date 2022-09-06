import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import type { RouteLocationNormalizedLoaded, Router } from 'vue-router';

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
    setPreferredLang(
      lang: string,
      router: Router,
      route: RouteLocationNormalizedLoaded
    ) {
      this.preferredLang = lang;
      if (route.params.preferredLang !== undefined && route.name) {
        router.push({
          name: route.name,
          params: {
            preferredLang:
              lang === import.meta.env.VITE_I18N_DEFAULT_LANGUAGE ? '' : lang,
          },
        });
      }
      // if (route.params.preferredLang !== undefined) {
      //   const rawPath = route.params.preferredLang
      //     ? route.path.replace(
      //         new RegExp(`^/${route.params.preferredLang}`),
      //         ''
      //       )
      //     : route.path;
      //   router.replace(`/${lang}${rawPath}`);
      // }
    },
  },
});
