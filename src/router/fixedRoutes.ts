import Layout from '@/layout/index.vue';
import Home from '@/views/home/index.vue';
import About from '@/views/about/index.vue';

export default [
  {
    path: '',
    name: 'Dashboard',
    component: Layout,
    meta: {
      title: 'dashboard',
    },
    children: [
      {
        path: '/home',
        redirect: '/',
      },
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
