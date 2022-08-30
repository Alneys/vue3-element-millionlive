import type { RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/index.vue';
import Error from '@/views/error/index.vue';

export default [
  {
    path: '',
    component: Layout,
    children: [
      // {
      //   path: '/error',
      //   name: 'error',
      //   component: Error,
      //   meta: { title: 'error' },
      // },
      {
        path: '/:pathMatch(.*)',
        name: 'error',
        component: Error,
        meta: { title: 'error' },
      },
    ],
  },
] as RouteRecordRaw[];
