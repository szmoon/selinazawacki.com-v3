import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vue3TouchEvents from 'vue3-touch-events';
import App from './App.vue';
import router from './router';
import FontAwesomeIcons from '~atoms/fontAwesomeIcons';

createApp(App)
  .use(router)
  .use(createPinia())
  .use(Vue3TouchEvents, { dragFrequency: 0 })
  .use(FontAwesomeIcons)
  .mount('#app');
