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

// beforeEach guard
router.beforeEach((to) => {
  // remove trailing slash
  if (to.path.endsWith('/') && to.path !== '/') {
    return to.path.replace(/\/+$/, '');
  } else {
    return true;
  }
});

export default router;
