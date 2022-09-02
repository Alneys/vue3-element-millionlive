import type { RouteMeta, RouteRecordRaw } from 'vue-router';

import Home from '@/views/home/index.vue';
import About from '@/views/about/index.vue';
import Test from '@/views/test/index.vue';

type MenuRouteType = RouteRecordRaw & {
  meta: RouteMeta;
  children?: MenuRouteType[];
};

const menuRoutes: MenuRouteType[] = [
  {
    path: 'home',
    name: 'Home',
    component: Home,
    alias: '',
    meta: {
      title: 'Home',
    },
  },
  {
    path: 'about',
    name: 'About',
    component: About,
    meta: {
      title: 'About',
    },
  },
  {
    path: 'test',
    name: 'Test',
    component: Test,
    meta: {
      title: 'Test',
    },
  },
];

export default menuRoutes;
