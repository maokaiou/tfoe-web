// import Vue from "vue";
// import Vuex from "vuex";
// import actions from './action.js';
// import mutations from 
// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     info: {}
//   },
//   mutations: {
//     setInfo(state, val) {
//       state.info = val;
//     }
//   },
//   actions: {},
//   modules: {}
// });
import Vue from "vue";
import Vuex from "vuex";
import actions from './action.js';
import mutations from './mutations.js'
Vue.use(Vuex);

const state = {
  username: ' '
}
export default new Vuex.Store({
 state,
 mutations,
 actions
});
