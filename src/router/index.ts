import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../layout/index.vue') },
  {
    path: '/debug',
    component: () => import('../AppDefault.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes],
});

export default router;
