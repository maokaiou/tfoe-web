import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, val) {
      state.info = val;
    }
  },
  actions: {},
  modules: {}
});
