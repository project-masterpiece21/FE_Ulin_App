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
import PopupLogin from './components/globalComponents/PopupLogin.vue';
import TopSideNavbar from './components/globalComponents/assetsTopNavbar/TopSideNavbar.vue';
import SearchForm from './components/globalComponents/assetsTopNavbar/SearchForm.vue';
import PopularSearch from './components/globalComponents/assetsTopNavbar/PopularSearch.vue';
import ModalAlert from './components/globalComponents/ModalAlert.vue';
import ModalForm from './components/globalComponents/ModalForm.vue';

const app = createApp(App);

// Initial Global Components
app.component('NavbarBottomMobile', NavbarBottomMobile);
app.component('SideNavbar', SideNavbar);
app.component('TopNavbar', TopNavbar);
app.component('TopSideNavbar', TopSideNavbar);
app.component('RecommendationDestination', RecommendationDestination);
app.component('CardItem', CardItem);
app.component('PopupLogin', PopupLogin);
app.component('SearchForm', SearchForm);
app.component('PopularSearch', PopularSearch);
app.component('ModalAlert', ModalAlert);
app.component('ModalForm', ModalForm);

app.use(router);
app.use(VueLazyLoad);
app.use(stores);

app.mount('#app');
