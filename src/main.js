import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';

import './assets/css/tailwindcss.css';
import App from './App.vue';
import router from './router';

// Global Components
import NavbarMobile from './components/globalComponents/NavMobileComponent.vue';
import SideNavbar from './components/globalComponents/SideNavComponent.vue';
import TopNavbar from './components/globalComponents/TopNavComponent.vue';

const app = createApp(App);

app.component('NavbarMobile', NavbarMobile);
app.component('SideNavbar', SideNavbar);
app.component('TopNavbar', TopNavbar);

app.use(router);
app.use(VueLazyLoad);

app.mount('#app');
