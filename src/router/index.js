import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
import Index from "../views/index.vue";
import Detail from "../views/detail.vue";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import Cart from "../views/cart.vue";
import MyAccount from "../views/myaccount.vue";
import HotSale from "../views/hotsale.vue";
import Message from "../views/message.vue";
import OrderConfirm from "../views/orderConfirm.vue";
import OrderPay from "../views/orderPay.vue";
import OrderList from "../views/orderList.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: Index
      },
      {
        path: "/login",
        name: "login",
        component: Login
      },
      {
        path: "/register",
        name: "register",
        component: Register
      },
      {
        path: "/detail",
        name: "detail",
        component: Detail
      },
      {
        name: "cart",
        path: "/cart",
        component: Cart
      },
      {
        name: "myaccount",
        path: "/myaccount",
        component: MyAccount
      },
      {
        name: "hotsale",
        path: "/hotsale",
        component: HotSale
      },
      {
        name: "orderList",
        path: "/orderList",
        component: OrderList
      },
      {
        name: "orderConfirm",
        path: "/orderConfirm",
        component: OrderConfirm
      },
      {
        name: "orderPay",
        path: "/orderPay",
        component: OrderPay
      },
      {
        path: "/message",
        name: "message",
        component: Message
      }
    ]
  }
];

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
