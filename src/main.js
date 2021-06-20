import { createApp } from 'vue';

import './assets/css/tailwindcss.css';
import App from './App.vue';
import router from './router';

// Global component
import NavMobileComponent from './components/globalComponents/NavMobileComponent.vue';

const app = createApp(App);
app.component('NavMobileComponent', NavMobileComponent);
app.use(router);

app.mount('#app');
