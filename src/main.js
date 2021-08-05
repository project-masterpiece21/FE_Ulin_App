import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';

import './assets/css/tailwindcss.css';
import App from './App.vue';
import router from './router';
import stores from './stores';

// Global Components
import NavbarBottomMobile from './components/globalComponents/NavbarBottomMobile.vue';
import SideNavbar from './components/globalComponents/SideNavbar.vue';
import TopNavbar from './components/globalComponents/TopNavbar.vue';
import RecommendationDestination from './components/globalComponents/RecommendationDestination.vue';

import CardItem from './components/globalComponents/CardItem.vue';

const app = createApp(App);

app.component('NavbarBottomMobile', NavbarBottomMobile);
app.component('SideNavbar', SideNavbar);
app.component('TopNavbar', TopNavbar);
app.component('RecommendationDestination', RecommendationDestination);
app.component('CardItem', CardItem);

app.use(router);
app.use(VueLazyLoad);
app.use(stores);

app.mount('#app');
