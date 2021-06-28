import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';

import './assets/css/tailwindcss.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(VueLazyLoad);

app.mount('#app');
