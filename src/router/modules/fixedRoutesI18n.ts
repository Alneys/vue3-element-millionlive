import type { RouteRecordRaw } from 'vue-router';
import { useLayoutStore } from '@/store';
import { languageList } from '@/i18n';

import menuRoutes from './menuRoutes';

import Layout from '@/layout/index.vue';

const preferredLangMatchPattern = languageList
  .reduce((prev, each) => prev + each.tag + '|', '')
  .slice(0, -1);

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
    path: `/:preferredLang(${preferredLangMatchPattern})?`,
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
