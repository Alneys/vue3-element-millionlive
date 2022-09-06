import type { RouteMeta, RouteRecordRaw } from 'vue-router';

import Home from '@/views/home/index.vue';
import About from '@/views/about/index.vue';
import Test from '@/views/test/index.vue';

type MenuRouteType = RouteRecordRaw & {
  name: string;
  meta: RouteMeta;
  children?: MenuRouteType[];
};

const menuRoutes: MenuRouteType[] = [
  {
    path: '',
    name: 'home',
    component: Home,
    alias: 'home',
    meta: {
      title: 'Home',
    },
  },
  {
    path: 'about',
    name: 'about',
    component: About,
    meta: {
      title: 'About',
    },
  },
  {
    path: 'test',
    name: 'test',
    component: Test,
    meta: {
      title: 'Test',
    },
  },
];

export default menuRoutes;
