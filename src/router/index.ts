import './router.d';

import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import fixedRoutes from './fixedRoutes';
import errorRoutes from './modules/error';

import Layout from '@/layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  { path: '/', component: () => Layout },
  {
    path: '/debug',
    component: () => import('../AppDefault.vue'),
  },
  ...fixedRoutes,
  ...errorRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

export default router;
