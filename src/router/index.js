import { createRouter, createWebHistory } from 'vue-router';
import LayoutDefault from '~layouts/LayoutDefault';

const routes = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('~views/Home.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('~views/About.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
