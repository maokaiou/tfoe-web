import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import VueLazyLoad from "vue-lazyload"
// import VueCookie from "vue-cookie";
import store from "./store";
import { Message, MessageBox, Button, Dialog, Form,Input,FormItem} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;
// 接口代理拦截器
axios.interceptors.response.use(function (response) {
  let res = response;
  const path = location.pathname;
  if(res){
        if(res.status == 200)
          return res.data;  
  }else if(res.data.code === 0){
    console.log(res.msg)
    if ( path != '/index')
      window.location.href = '/login'
  }else  {
    Message.warning(res.msg);
    return Promise.reject(res);
  }
});

// require('axios');
// Vue.prototype.$axios = axios;
Vue.use(VueAxios,axios);
Vue.use(VueLazyLoad,{
  loading:"./assets/loading-svg/loading-cylon.svg"
});
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem)
// Vue.use(VueCookie);
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");