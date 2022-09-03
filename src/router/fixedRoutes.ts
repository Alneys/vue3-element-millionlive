import type { RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/index.vue';
import menuRoutes from './modules/menuRoutes';

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
        path: 'index',
        redirect: '/',
      },
      ...menuRoutes,
    ],
  },
] as RouteRecordRaw[];
