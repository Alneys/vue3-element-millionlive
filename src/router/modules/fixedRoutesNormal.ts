import type { RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/index.vue';
import menuRoutes from './menuRoutes';

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'index',
        redirect: '/',
      },
      ...menuRoutes,
    ],
  },
] as RouteRecordRaw[];
