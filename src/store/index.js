import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windowOrder: [],
    timeSinceLastClick: undefined
  },
  mutations: {
    addWindow(state, windowName) {
      let order = state.windowOrder;
      // if window is already at end of list, do nothing
      if (order[order.length - 1] == windowName) {
        return;
      }

      // remove window id if it exists
      order = order.filter(id => {
        return id != windowName;
      });

      //   add window to top of array
      order.push(windowName);

      state.windowOrder = order;
    },
    removeWindow(state, windowName) {
      let order = state.windowOrder;

      // remove window id if it exists
      order = order.filter(id => id != windowName);

      state.windowOrder = order;
    }
  },
  getters: {
    getWindowIndex: state => windowName => {
      let index = state.windowOrder.indexOf(windowName);

      if (windowName == -1) {
        return undefined;
      }

      return index + 1;
    }
  },
  actions: {},
  modules: {}
});
