import { createApp } from 'vue';
import Vue3TouchEvents from 'vue3-touch-events';
import App from './App.vue';
import router from './router';
import store from './store';
import FontAwesomeIcons from '~atoms/fontAwesomeIcons';

createApp(App)
  .use(router)
  .use(store)
  .use(Vue3TouchEvents, { dragFrequency: 0 })
  .use(FontAwesomeIcons)
  .mount('#app');
