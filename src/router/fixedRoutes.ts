import Layout from '@/layout/index.vue';
import Home from '@/views/home/index.vue';
import About from '@/views/about/index.vue';

export default [
  {
    path: '/home',
    name: 'Dashboard',
    component: Layout,
    meta: {
      title: 'dashboard',
    },
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          title: 'home',
        },
      },
      {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
          title: 'about',
        },
      },
    ],
  },
];
