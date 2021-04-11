<template>
  <div class="main-header_area-2" :class="{ is_fixed: isFixed }">
    <div class="main-header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-header_nav position-relative">
              <!-- 网站logo -->
              <div class="header-logo_area">
                <a href="/">
                  <img src="/images/menu/logo/1.png" alt="Header Logo" />
                </a>
              </div>
              <!-- 头部主菜单 -->
              <div class="main-menu_area d-none d-lg-block">
                <nav class="main-nav d-flex justify-content-center">
                  <ul>
                    <!-- 首页 -->
                    <li class="dropdown-holder">
                      <a href="javascript:void(0)">首页</a>
                      <ul class="quicky-dropdown">
                        <li><a href="/index">首页一</a></li>
                      </ul>
                    </li>
                    <!-- 热卖 -->
                    <li class="mh-sticker_wrap">
                      <span class="mh-sticker">New</span>
                      <a href="/hotsale">热卖</a>
                    </li>
                    <!-- 商店 -->
                    <li class="megamenu-holder position-static">
                      <a href="shop-left-sidebar.html">商店</a>
                      <div class="quicky-megamenu_wrap">
                        <ul class="quicky-megamenu">
                          <li>
                            <span class="megamenu-title">商店页面布局</span>
                            <ul>
                              <li>
                                <a href="shop-fullwidth.html">Grid Fullwidth</a>
                              </li>
                              <li>
                                <a href="shop-left-sidebar.html"
                                  >Left Sidebar</a
                                >
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html"
                                  >Right Sidebar</a
                                >
                              </li>
                              <li>
                                <a href="shop-list-fullwidth.html"
                                  >List Fullwidth</a
                                >
                              </li>
                              <li>
                                <a href="shop-list-left-sidebar.html"
                                  >List Left Sidebar</a
                                >
                              </li>
                              <li>
                                <a href="shop-list-right-sidebar.html"
                                  >List Right Sidebar</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span class="megamenu-title"
                              >Single Product Style</span
                            >
                            <ul>
                              <li>
                                <a href="single-product-gallery-left.html"
                                  >Gallery Left</a
                                >
                              </li>
                              <li>
                                <a href="single-product-gallery-right.html"
                                  >Gallery Right</a
                                >
                              </li>
                              <li>
                                <a href="single-product-tab-style-left.html"
                                  >Tab Style Left</a
                                >
                              </li>
                              <li>
                                <a href="single-product-tab-style-right.html"
                                  >Tab Style Right</a
                                >
                              </li>
                              <li>
                                <a href="single-product-sticky-left.html"
                                  >Sticky Left</a
                                >
                              </li>
                              <li>
                                <a href="single-product-sticky-right.html"
                                  >Sticky Right</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span class="megamenu-title"
                              >Single Product Type</span
                            >
                            <ul>
                              <li>
                                <a href="single-product.html">Single Product</a>
                              </li>
                              <li>
                                <a href="single-product-sale.html"
                                  >Single Product Sale</a
                                >
                              </li>
                              <li>
                                <a href="single-product-group.html"
                                  >Single Product Group</a
                                >
                              </li>
                              <li>
                                <a href="single-product-variable.html"
                                  >Single Product Variable</a
                                >
                              </li>
                              <li>
                                <a href="single-product-affiliate.html"
                                  >Single Product Affiliate</a
                                >
                              </li>
                              <li>
                                <a href="single-product-slider.html"
                                  >Single Product Slider</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span class="megamenu-title"
                              >Shop Related Pages</span
                            >
                            <ul>
                              <li><a href="/myaccount">我的账户</a></li>
                              <li>
                                <a href="/login">登录</a>
                              </li>
                              <li><a href="wishlist.html">Wishlist</a></li>
                              <li><a href="cart.html">购物车</a></li>
                              <li><a href="checkout.html">Checkout</a></li>
                              <li><a href="compare.html">Compare</a></li>
                            </ul>
                          </li>
                        </ul>

                        <div class="main-menu_bg">
                          <img
                            src="/images/menu/bg/2.jpg"
                            alt="Main Menu Images"
                          />
                        </div>
                      </div>
                    </li>
                    <!-- 页面 -->
                    <li>
                      <a href="javascript:void(0)">页面</a>
                      <ul class="quicky-dropdown">
                        <li><a href="about-us.html">关于我们</a></li>
                        <li class="position-relative">
                          <a href="javascript:void(0)">博客</a>
                          <ul class="quicky-dropdown quicky-submenu">
                            <li>
                              <a href="blog-left-sidebar.html">Grid View</a>
                            </li>
                            <li>
                              <a href="blog-list-left-sidebar.html"
                                >List View</a
                              >
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li><a href="faq.html">FAQ</a></li>
                      </ul>
                    </li>
                    <!-- 联系 -->
                    <li><a href="contact-us.html">联系</a></li>
                  </ul>
                </nav>
              </div>
              <!-- 头部右区域 -->
              <div class="header-right_area">
                <ul>
                  <li class="mobile-menu_wrap d-inline-block d-lg-none">
                    <a
                      href="#mobileMenu"
                      class="mobile-menu_btn toolbar-btn color--white"
                    >
                      <i class="zmdi zmdi-menu"></i>
                    </a>
                  </li>
                  <!-- 搜索 -->
                  <li>
                    <a class="search-btn toolbar-btn" @click="openSearch">
                      <i class="zmdi zmdi-search"></i>
                    </a>
                  </li>
                  <!-- 购物车展示 -->
                  <li class="minicart-wrap mr-md_0">
                    <a @click="openCart" class="minicart-btn toolbar-btn">
                      <div class="minicart-count_area">
                        <i class="zmdi zmdi-mall"></i>
                        <p class="total-price"><span>(05)</span> ￥250</p>
                      </div>
                    </a>
                  </li>
                  <!-- 个人 -->
                  <li class="dropdown-holder user-setting_wrap">
                    <a href="javascript:void(0)">
                      <i class="zmdi zmdi-account-o"></i>
                    </a>
                    <ul class="quicky-dropdown">
                       <li class="position-relative"  v-if="username">
                        <a href="/message">{{username}}</a>
                      </li>
                      <li class="position-relative"  v-if="username">
                        <a href="/message">我的消息</a>
                      </li>
                      <li class="position-relative" v-if="username">
                        <a href="/myaccount">我的账户</a>
                      </li>
                      <li class="position-relative" v-if="!username">
                        <a href="/login">登录</a>
                      </li>
                      <li class="position-relative"  v-if="!username">
                        <a href="/register">注册</a>
                      </li>
                      <li class="position-relative" v-if="username">
                        <a href="javascript:void(0)" @click="logout">登出</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 购物车弹出框 -->
    <div
      :class="
        this.openCartData
          ? 'offcanvas-minicart_wrapper open'
          : 'offcanvas-minicart_wrapper'
      "
      id="miniCart"
    >
      <div class="offcanvas-menu-inner">
        <a class="btn-close" @click="openCart"
          ><i class="zmdi zmdi-close"></i
        ></a>
        <div class="minicart-content">
          <div class="minicart-heading">
            <h4>Shopping 购物车</h4>
          </div>
          <ul class="minicart-list" v-for="(item, index) in cartlist"
              v-bind:key="index">
            <li
              class="minicart-product">
              <a class="product-item_remove" href="javascript:void(0)"
                ><i class="zmdi zmdi-close"></i
              ></a>
              <div class="product-item_img">
                <!-- 图片 -->
                <img
                  src="/images/product/small-size/1.jpg"
                  alt="Quicky's Product Image"
                />
              </div>
              <!-- 产品名字 -->
              <div class="product-item_content">
                <a class="product-item_title" href="shop-left-sidebar.html"
                  ></a
                >
                <!-- 产品价格 -->
                <span class="product-item_quantity">1 x ￥145.80</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="minicart-item_total">
          <span>小计</span>
          <!-- 所有商品总价格 -->
          <span class="ammount">￥462.4‬0</span>
        </div>
        <div class="minicart-btn_area">
          <a href="/#/cart" class="quicky-btn-2 quicky-btn_fullwidth square-btn"
            >购物车</a
          >
        </div>
        <div class="minicart-btn_area">
          <a
            href="/#/orderPay"
            class="quicky-btn-2 quicky-btn_fullwidth square-btn"
            >结算</a
          >
        </div>
      </div>
    </div>
    <!-- 搜索框 -->
    <div
      :class="
        this.openSearchPage
          ? 'offcanvas-search_wrapper open'
          : 'offcanvas-search_wrapper'
      "
      id="searchBar"
    >
      <div class="offcanvas-menu-inner">
        <div class="container">
          <a class="btn-close" @click="closeSearch"
            ><i class="zmdi zmdi-close"></i
          ></a>
          <!-- Begin Offcanvas Search Area -->
          <div class="offcanvas-search">
            <form action="#" class="hm-searchbox">
              <input type="text" placeholder="Search for item..." />
              <button class="search_btn" type="submit">
                <i class="zmdi zmdi-search"></i>
              </button>
            </form>
          </div>
          <!-- Offcanvas Search Area End Here -->
        </div>
      </div>
    </div>
    <div class="global-overlay"></div>
  </div>
</template>
<script>
export default {
  name: "main-header",
  data() {
    return {
      openCartData: false,
      openSearchPage: false,
      cartlist: [], //购物车商品列表
      isFixed: false
    };
  },
  mounted() {
    this.getcartList();
    window.addEventListener("scroll", this.initHeight);

  },
  computed:{
    username(){
      return this.$store.state.username
    }
  },
  methods: {
    logout() {
      this.axios.get("/userservice/user/logout").then(val => {
        if (val.code === 1) {
          this.$message.success("登出成功");
          this.$router.push("/login");
          // this.$store.commit("setInfo",{})
          this.$store.dispatch('setUserName','')
          return;
        }
        this.$message.warning(val.msg);
        this.$router.push("/login");
      });
    },
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 300 ? true : false;
    },
    destroyed() {
      window.removeEventListener("scroll", this.initHeight, false);
    },
    openCart() {
      this.openCartData = !this.openCartData;
    },
    openSearch() {
      this.openSearchPage = !this.openSearchPage;
    },
    closeSearch() {
      this.openSearchPage = false;
    },
    getcartList() {
      this.axios.get("/userservice/cart/lookThroughCart").then(res => {
        console.log(res)
        if(res.code === 1) {
          this.cartlist = res.data;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.main-header_area-2 {
  &.is_fixed {
    position: fixed;
    width: 1380px;
    top: 0;
    background: #fff;
    z-index: 10;
    box-shadow: 0 1px 1px rgb(218, 213, 213);
  }
  .ft {
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color: #151515;
  }
}
</style>
