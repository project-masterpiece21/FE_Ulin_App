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
        meta: {
          title: 'Home Page - Ulin Apps',
          metaTags: [
            {
              name: 'description',
              content: 'The home page of our Ulin app.'
            },
            {
              property: 'og:description',
              content: 'The home page of our Ulin app.'
            }
          ]
        }
      },
      {
        path: 'moment',
        component: () => import('../components/layout/MomentComponent.vue'),
        meta: {
          title: 'Moment Page - Ulin Apps',
          metaTags: [
            {
              name: 'description',
              content: 'The moment page of our Ulin app.'
            },
            {
              property: 'og:description',
              content: 'The moment page of our Ulin app.'
            }
          ]
        }
      },
      {
        path: 'category',
        component: () => import('../components/layout/CategoryComponent.vue'),
        meta: {
          title: 'Category Page - Ulin Apps',
          metaTags: [
            {
              name: 'description',
              content: 'The category destination of our Ulin app.'
            },
            {
              property: 'og:description',
              content: 'The category destination of our Ulin app.'
            }
          ]
        }
      },
      {
        path: 'rank',
        component: () => import('../components/layout/RankComponent.vue'),
        meta: {
          title: 'Rank Page - Ulin Apps',
          metaTags: [
            {
              name: 'description',
              content: 'The Ranked destination of our Ulin app.'
            },
            {
              property: 'og:description',
              content: 'The rangked destination of our Ulin app.'
            }
          ]
        }
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


router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
