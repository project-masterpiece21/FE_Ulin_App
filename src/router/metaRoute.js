const metaRoute = (to, from, next) => {

  const checkRequiredAuth = to.matched.some(record => record.meta.requiresAuth);
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  if(checkRequiredAuth) {
    if (accessToken === null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  }


  if (to.name === 'login' && accessToken) {
    next({
      path: '/home',
      params: { nextUrl: to.fullPath }
    })
  } else if(to.name === 'signup' && accessToken) {
    next({
      path: '/home',
      params: { nextUrl: to.fullPath }
    })
  }
  
  if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('ACCESS_TOKEN') === null) {
      next()
    } else {
      next({ name: 'home' })
    }
  }

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
};

export default metaRoute;