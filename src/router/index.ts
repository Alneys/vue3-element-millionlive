import './router.d';

import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

import { useLayoutStore } from '@/store';

import fixedRoutes from './fixedRoutes';
import errorRoutes from './modules/error';

const routes: RouteRecordRaw[] = [...fixedRoutes, ...errorRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

// beforeEach guard
router.beforeEach((to) => {
  // remove trailing slash
  if (to.path.endsWith('/') && to.path !== '/') {
    return {
      path: to.path.replace(/\/+$/, ''),
      replace: true,
    };
  } else {
    // i18n support - check route.params.preferredLang
    const preferredLang = to.params.preferredLang as string | undefined;
    if (typeof preferredLang === 'string') {
      // preferredLang exists
      const layoutStore = useLayoutStore();
      if (preferredLang) {
        // not empty string (/en/test): set layoutStore.preferredLang = en
        layoutStore.preferredLang = preferredLang;
        return true;
      } else if (
        layoutStore.preferredLang != import.meta.env.VITE_I18N_DEFAULT_LANGUAGE
      ) {
        // empty string (/test): redirect to /${layoutStore.preferredLang}/test
        if (to.name) {
          // use name to redirect
          return {
            name: to.name,
            params: { preferredLang: layoutStore.preferredLang },
            replace: true,
          };
        }
        // return {
        //   path: `/${layoutStore.preferredLang}${to.path}`,
        //   replace: true,
        // };
      }
    } else {
      return true;
    }
  }
});

export default router;
