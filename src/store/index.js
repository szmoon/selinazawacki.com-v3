import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentZIndex: 1
  },
  mutations: {
    incrementZIndex(state) {
      state.currentZIndex++;
    }
  },
  actions: {},
  modules: {}
});
