const Layout = () => import('@/layout/index.vue');
const Home = () => import('@/views/home/index.vue');

export default [
  {
    path: '/home',
    component: Layout,
    name: 'Dashboard',
    meta: {
      title: 'dashboard',
    },
    icon: 'home',
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          title: 'home',
          affix: true,
        },
      },
    ],
  },
];
