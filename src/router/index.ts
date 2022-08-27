import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../layout/index.vue';
import fixedRoutes from './fixedRoutes';

const routes = [
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes],
});

export default router;
