import type { RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/index.vue';
import menuRoutes from './modules/menu';

export default [
  {
    path: '',
    name: 'Dashboard',
    component: Layout,
    meta: {
      title: 'dashboard',
    },
    children: [
      {
        path: 'home',
        redirect: '/',
      },
      ...menuRoutes,
    ],
  },
] as RouteRecordRaw[];
