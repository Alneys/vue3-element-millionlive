import './router.d';

import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import fixedRoutes from './fixedRoutes';
import errorRoutes from './modules/error';

const routes: RouteRecordRaw[] = [...fixedRoutes, ...errorRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

export default router;
