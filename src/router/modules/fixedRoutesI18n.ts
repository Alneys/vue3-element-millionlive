import type { RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/index.vue';
import menuRoutes from './menuRoutes';

export default [
  {
    path: `/${import.meta.env.VITE_I18N_DEFAULT_LANGUAGE}`,
    redirect: '/',
    children: [
      {
        path: ':anyPath',
        redirect: (to) => `/${to.params.anyPath}`,
      },
    ],
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
