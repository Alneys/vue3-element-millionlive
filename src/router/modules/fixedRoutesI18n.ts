import type { RouteRecordRaw } from 'vue-router';

import { useLayoutStore } from '@/store';

import Layout from '@/layout/index.vue';
import menuRoutes from './menuRoutes';

export default [
  {
    path: `/${import.meta.env.VITE_I18N_DEFAULT_LANGUAGE}/:anyPath?`,
    beforeEnter: (to) => {
      const layoutStore = useLayoutStore();
      layoutStore.preferredLang = import.meta.env.VITE_I18N_DEFAULT_LANGUAGE;
      return `/${to.params.anyPath}`;
    },
  },
  {
    path: '/:preferredLang(zh-CN|en|ja)?',
    component: Layout,
    children: [
      {
        path: 'index',
        redirect: (to) => `/${to.params.preferredLang}`,
      },
      ...menuRoutes,
    ],
  },
] as RouteRecordRaw[];
