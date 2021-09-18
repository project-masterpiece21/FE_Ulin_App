import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../components/layout/mainLayout/MainComponent.vue'),
    children: [
      {
        path: 'home',
        alias: '/',
        component: () => import('../components/layout/mainLayout/HomePage.vue'),
        meta: {
          title: 'Home Page - Ulin Apps',
          metaTags: [
            {
              name: 'description',
              content: 'The home page of our Ulin app.',
            },
            {
              property: 'og:description',
              content: 'The home page of our Ulin app.',
            },
          ],
        },
      },
      {
        path: 'moment',
        component: () => import('../components/layout/mainLayout/MomentPage.vue'),
        meta: {
          title: 'Moment Page - Ulin Apps',
          metaTags: [
            {
              name: 'description',
              content: 'The moment page of our Ulin app.',
            },
            {
              property: 'og:description',
              content: 'The moment page of our Ulin app.',
            },
          ],
        },
      },
      {
        path: 'destination',
        component: () => import('../components/layout/mainLayout/SearchDestinationPage.vue'),
        meta: {
          title: 'Search Destination - Ulin Apps',
          metaTags: [
            {
              name: 'description',
              content: 'The search destination of our Ulin app.',
            },
            {
              property: 'og:description',
              content: 'The search destination of our Ulin app.',
            },
          ],
        },
      },
      {
        path: 'rank',
        component: () => import('../components/layout/mainLayout/RankPage.vue'),
        meta: {
          title: 'Rank Page - Ulin Apps',
          metaTags: [
            {
              name: 'description',
              content: 'The Ranked destination of our Ulin app.',
            },
            {
              property: 'og:description',
              content: 'The rangked destination of our Ulin app.',
            },
          ],
        },
      },
      {
        path: 'information',
        component: () => import('../components/layout/mainLayout/InformationPage.vue'),
        meta: {
          title: 'News Page - Ulin Apps',
          metaTags: [
            {
              name: 'description',
              content: 'The news destination of our Ulin app.',
            },
            {
              property: 'og:description',
              content: 'The news destination of our Ulin app.',
            },
          ],
        },
      },
      {
        path: 'coming-soon',
        component: () => import('../components/pages/comingSoonComponents/ComingSoonMain.vue'),
        meta: {
          title: 'Comming Soon - Ulin Apps',
          metaTags: [
            {
              name: 'description',
              content: 'The new fitur Ulin app.',
            },
            {
              property: 'og:description',
              content: 'The new fitur of our Ulin app.',
            },
          ],
        },
      },
    ],
  },
  {
    path: '/user/:id',
    name: 'profile-user',
    component: () => import('../components/layout/UserProfile.vue'),
    meta: {
      title: 'Profile user - Ulin Apps',
      metaTags: [
        {
          name: 'description',
          content: 'Profile user Ulin app.',
        },
        {
          property: 'og:description',
          content: 'Profile user Ulin app.',
        },
      ],
    },
  },
  {
    path: '/destination/:id',
    name: 'detail-destination',
    component: () => import('../components/layout/DetailMenu.vue'),
    meta: {
      title: 'Detail Page - Ulin Apps',
      metaTags: [
        {
          name: 'description',
          content: 'The detail destination of our Ulin app.',
        },
        {
          property: 'og:description',
          content: 'The detail destination of our Ulin app.',
        },
      ],
    },
  },
  {
    path: '/signup',
    component: () => import('../components/layout/SignupPage.vue'),
  },
  {
    path: '/login',
    component: () => import('../components/layout/LoginPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find((r) => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags);

  // eslint-disable-next-line max-len
  const previousNearestWithMeta = from.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags);

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) => el.parentNode.removeChild(el));

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map((tagDef) => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach((key) => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
