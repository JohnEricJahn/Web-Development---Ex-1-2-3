import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import ViewHome from '@/views/ViewHome.vue';
import ViewContact from '@/views/ViewContact.vue';
import ViewOthers from '@/views/ViewOthers.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ViewHome,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ViewContact,
  },
  {
    path: '/others',
    name: 'others',
    component: ViewOthers,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
