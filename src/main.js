import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vue2TouchEvents from 'vue2-touch-events';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// library.add(faTimes);

// Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(Vue2TouchEvents);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
