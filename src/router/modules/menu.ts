import type { RouteMeta, RouteRecordRaw } from 'vue-router';

import Home from '@/views/home/index.vue';
import About from '@/views/about/index.vue';
import Test from '@/views/test/index.vue';

type menuRoutesType = RouteRecordRaw & { meta: RouteMeta };

const menuRoutes: Array<menuRoutesType> = [
  {
    path: '',
    name: 'Home',
    component: Home,
    alias: '/home',
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About',
    },
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      title: 'Test',
    },
  },
];

export default menuRoutes as Array<menuRoutesType>;
