import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';

import './assets/css/tailwindcss.css';
import App from './App.vue';
import router from './router';

// Global Components
import NavbarBottomMobile from './components/globalComponents/NavbarBottomMobile.vue';
import SideNavbar from './components/globalComponents/SideNavbar.vue';
import TopNavbar from './components/globalComponents/TopNavbar.vue';
import TopNavbarMobile from './components/globalComponents/TopNavbarMobile.vue';

const app = createApp(App);

app.component('NavbarBottomMobile', NavbarBottomMobile);
app.component('SideNavbar', SideNavbar);
app.component('TopNavbar', TopNavbar);
app.component('TopNavbarMobile', TopNavbarMobile);

app.use(router);
app.use(VueLazyLoad);

app.mount('#app');
