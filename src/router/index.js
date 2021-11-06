import { createWebHistory, createRouter } from 'vue-router';
import metaRoute from './metaRoute'

const routes = [
  {
    path: '/',
    component: () => import('../components/layout/mainLayout/MainComponent.vue'),
    children: [
      {
        path: 'home',
        alias: '/',
        component: () => import('../components/layout/HomePage.vue'),
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
        path: '/user/:id',
        name: 'profile-user',
        component: () => import('../components/layout/UserProfile.vue'),
        meta: {
          requiresAuth: true,
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
        path: 'moment',
        component: () => import('../components/layout/MomentPage.vue'),
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
        path: 'places',
        component: () => import('../components/layout/SearchPlaces.vue'),
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
        path: 'destination/:id',
        name: 'detail-destination',
        component: () => import('../components/layout/DetailPlace.vue'),
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
        path: 'rank',
        component: () => import('../components/layout/RankPage.vue'),
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
        component: () => import('../components/layout/InformationPage.vue'),
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
    path: '/about-us',
    component: () => import('../components/layout/AboutUs.vue'),
    meta: {
      title: 'About Us - Ulin Apps',
      metaTags: [
        {
          name: 'description',
          content: "It's all about us",
        },
        {
          property: 'og:description',
          content: "It's all about us",
        },
      ],
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/layout/SignupPage.vue'),
    meta: {
      title: 'Signup - Ulin Apps'
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/layout/LoginPage.vue'),
    meta: {
      title: 'Login - Ulin Apps'
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(metaRoute);

export default router;
