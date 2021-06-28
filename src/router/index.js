import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../components/layout/MainComponent.vue'),
    children: [
      {
        path: 'home',
        alias: '/',
        component: () => import('../components/layout/HomeComponent.vue'),
      },
      {
        path: 'moment',
        component: () => import('../components/layout/MomentComponent.vue'),
      },
      {
        path: 'category',
        component: () => import('../components/layout/CategoryComponent.vue'),
      },
      {
        path: 'rank',
        component: () => import('../components/layout/RankComponent.vue'),
      },
    ],
  },
  {
    path: '/detail',
    component: () => import('../components/layout/DetailMenuComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
