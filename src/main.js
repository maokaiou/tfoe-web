import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
// import VueCookie from "vue-cookie";
import store from "./store";
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;
// 接口代理拦截器
axios.interceptors.response.use(function (response) {
  let res = response;
  if(res.status==200){
    return res.data;
  }else{
    Message.warning(res.msg);
    return Promise.reject(res);
  }
});

// require('axios');
// Vue.prototype.$axios = axios;
Vue.use(VueAxios,axios);
// Vue.use(VueCookie);
Vue.prototype.$message = Message;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");