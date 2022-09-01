import type { RouteRecordRaw } from 'vue-router';

import Layout from '@/layout/index.vue';
import Error from '@/views/error/index.vue';

export default [
  {
    path: '/:pathMatch(.*)*',
    component: Layout,
    children: [
      {
        path: '',
        name: 'error',
        component: Error,
        meta: { title: 'error' },
      },
    ],
  },
] as RouteRecordRaw[];
