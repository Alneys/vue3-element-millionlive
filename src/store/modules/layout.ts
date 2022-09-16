import { useDark, useLocalStorage, useToggle } from '@vueuse/core';
import { defineStore } from 'pinia';
import type { RouteLocationNormalizedLoaded, Router } from 'vue-router';

import { getDefaultPreferredLang } from '@/i18n';

export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    return {
      isMenuCollapse: false,
      isLayoutCompact: false,
      isDark,
      toggleDark,
      preferredLang: useLocalStorage('language', getDefaultPreferredLang()),
    };
  },
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
