<template>
<div>
 <div class="breadcrumb-area">
    <div class="container">
        <div class="breadcrumb-content">
            <h2>车联网</h2>
            <ul>
                <li><a href="/index" >首页</a></li>
                <li class="active">热卖</li>
            </ul>
        </div>
    </div>
  </div>
  <div class="quicky-content_wrapper pt-90 pb-100">
    <div class="container">
      <div class="row">
        <!-- 左侧 产品目录-->
        <div class="col-lg-3 order-2 order-lg-1">
          <div class="quicky-sidebar-catagories_area">
            <div class="quicky-sidebar_categories category-module">
              <div class="quicky-categories_title">
                <h5>产品目录</h5>
              </div>
              <div class="sidebar-categories_menu">
                <ul v-for="(item, index) in categroyList" :key="index">
                  <li :class="categoryData[index] ? 'has-sub open' : 'has-sub'">
                    <a href="javascript:void(0)" @click="showCategory(index)"
                      >{{ item.name }}<i class="zmdi zmdi-plus"></i
                    ></a>
                    <ul
                      :class="categoryData[index] ? 'showcate' : 'closecate'"
                      v-for="(sub, index1) in item.childType"
                      :key="index1"
                    >
                      <li>
                        <a href="javascript:void(0)">{{ sub.name }}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="col-lg-9 order-1 order-lg-2">
         <!--俩种展示效果的图标容器 -->
          <div class="shop-toolbar">
             <!-- 图标 -->
            <div class="product-view-mode">
              <!-- 第一个图标 -->
              <a
                class="active grid-3"
                data-target="gridview-3"
                data-toggle="tooltip"
                data-placement="top"
                title="Grid View"
                @click="distribute1"
                ><i class="zmdi zmdi-grid"></i
              ></a>
              <!-- 第二个图标 -->
              <a
                class="list"
                data-target="listview"
                data-toggle="tooltip"
                data-placement="top"
                title="List View"
                @click="distribute2"
                ><i class="zmdi zmdi-view-list-alt"></i
              ></a>
            </div>
            <!-- 随机显示 -->
            <div class="product-page_count">
              <p>随机显示</p>
            </div>
            <!-- 排序 -->
            <div class="product-item-selection_area">
              <div class="product-short">
                <label class="select-label">排序:</label>
                <select class="nice-select">
                  <option value="1">产品名</option>
                  <option value="2">价格(低到高)</option>
                  <option value="3">价格（高到低）</option>
                </select>
              </div>
            </div>
          </div>
          <!-- 俩种展示效果的商品容器 -->
          <div
            :class="
              dis
                ? 'shop-product-wrap grid gridview-3 row'
                : 'shop-product-wrap row listview'
            "
          >
          <!-- 商品框 -->
            <div class="col-12" v-for="(item, index) in goodsList" :key="index">
              <!-- 第一种情况 -->
              <div class="product-item">
                 <!-- 单个商品介绍框 -->
                <div class="single-product">
                  <div class="product-img">
                     <!-- 商品图片 -->
                    <a :href="item?'/detail':''" >
                      <img
                        :src="'api/goodservice/' + item.image"
                        alt="Product Image"
                      />
                    </a>
                    <div class="add-actions">
                      <ul>
                        <!-- 展示商品 -->
                        <li
                          class="quick-view-btn"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          @click="showGood"
                        >
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Quick View"
                            ><i class="icon-magnifier"></i
                          ></a>
                        </li>
                        <li>
                          <!-- 收藏 -->
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add To Wishlist"
                            ><i class="icon-heart"></i
                          ></a>
                        </li>
                        <li>
                          <!-- 刷新 -->
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add To Compare"
                            ><i class="icon-refresh"></i
                          ></a>
                        </li>
                        <!-- 加入购物车 -->
                        <li>
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="购物车"
                            @click="addCart(1,item.goodsId)"
                            ><i class="icon-bag"></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="product-content bg-snow">
                    <div class="product-desc_info">
                      <div class="manufacture-product_top">
                        <span>Clock</span>
                      </div>
                      <h3 class="product-name">
                        <a href="javascript:void(0)">{{ item.goodsName }}</a>
                      </h3>
                      <div class="price-box">
                        <span class="new-price ml-0"
                          >￥{{ item.goodsPrice }}</span
                        >
                      </div>
                      <div
                        class="review-area d-flex justify-content-between align-items-center"
                      >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 第二种情况 -->
              <div class="list-product_item">
                <div class="single-product">
                  <div class="product-img">
                    <a :href="item?'/detail':''">
                      <img
                        :src="'api/goodservice/' + item.image"
                        alt="Product Image"
                      />
                    </a>
                  </div>
                  <div class="quicky-product-content">
                    <div class="product-desc_info">
                      <!-- 产品名字 -->
                      <h6 class="product-name">
                        <a href="javascript:void(0)">Abstract Design Clock</a>
                      </h6>
                      <!-- 价格 -->
                      <div class="price-box">
                        <span class="old-price">￥75.00</span>
                        <span class="new-price">￥70.00</span>
                      </div>
                      <!-- 评分 -->
                      <div class="rating-box gamboge-color">
                        <ul>
                          <li><i class="icon-star"></i></li>
                          <li><i class="icon-star"></i></li>
                          <li><i class="icon-star"></i></li>
                          <li><i class="icon-star"></i></li>
                          <li><i class="icon-star"></i></li>
                        </ul>
                      </div>
                      <div class="product-short_desc">
                        <p>
                          {{ item.description }}
                        </p>
                      </div>
                    </div>
                    <div class="add-actions">
                      <ul>
                        <!-- 查询 -->
                        <li
                          class="quick-view-btn"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="View"
                            ><i class="icon-magnifier"></i
                          ></a>
                        </li>
                        <!-- 收藏 -->
                        <li>
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add To Wishlist"
                            ><i class="icon-heart"></i
                          ></a>
                        </li>
                        <!-- 刷新 -->
                        <li>
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add To Compare"
                            ><i class="icon-refresh"></i
                          ></a>
                        </li>
                        <!-- 加入购物车 -->
                        <li>
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add To cart"
                            ><i class="icon-bag"></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!-- 点击QuickView 触发商品具体信息展示 -->
    <div
      :class="
        show.enable
          ? 'modal fade modal-wrapper show'
          : 'modal fade modal-wrapper'
      "
      id="exampleModalCenter"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-hotsale"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-body">
            <!-- 关闭按钮 -->
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="show.enable = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-inner-area sp-area row">
              <div class="col-xl-5 col-lg-6">
                <div class="sp-img_area">
                  <div
                    class="quicky-element-carousel sp-img_slider slick-img-slider"
                    data-slick-options='{
                                    "slidesToShow": 1,
                                    "arrows": false,
                                    "fade": true,
                                    "draggable": false,
                                    "swipe": false,
                                    "asNavFor": ".sp-img_slider-nav"
                                    }'
                  >
                    <div class="single-slide red">
                      <img
                        src="/images/product/large-size/1.jpg"
                        alt="Quicky's Product Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-7 col-lg-6">
                <div class="sp-content">
                  <div class="sp-heading">
                    <h5><a href="#">Moonstar</a></h5>
                  </div>
                  <div class="rating-box">
                    <ul>
                      <li><i class="zmdi zmdi-star"></i></li>
                      <li><i class="zmdi zmdi-star"></i></li>
                      <li><i class="zmdi zmdi-star"></i></li>
                      <li class="silver-color">
                        <i class="zmdi zmdi-star"></i>
                      </li>
                      <li class="silver-color">
                        <i class="zmdi zmdi-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="price-box">
                    <span class="new-price new-price-2 ml-0">￥194.00</span>
                    <span class="old-price">￥241.00</span>
                  </div>
                  <div class="sp-essential_stuff">
                    <ul>
                      <li>品牌 <a href="javascript:void(0)">Buxton</a></li>
                      <li>
                        产品代码: <a href="javascript:void(0)">产品 16</a>
                      </li>
                      <li>奖励分数: <a href="javascript:void(0)">100</a></li>
                      <li>库存量: <a href="javascript:void(0)">In Stock</a></li>
                      <li>
                        价格:
                        <a href="javascript:void(0)"><span>￥453.35</span></a>
                      </li>
                      <li>
                        积分兑换价格: <a href="javascript:void(0)">400</a>
                      </li>
                    </ul>
                  </div>
                  <div class="color-list_area">
                    <div class="color-list_heading">
                      <h4>Available Options</h4>
                    </div>
                    <span class="sub-title">颜色</span>
                    <div class="color-list">
                      <a
                        href="javascript:void(0)"
                        class="single-color active"
                        data-swatch-color="red"
                      >
                        <span class="bg-red_color"></span>
                        <span class="color-text">Red (+￥150)</span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="single-color"
                        data-swatch-color="orange"
                      >
                        <span class="burnt-orange_color"></span>
                        <span class="color-text">Orange (+￥170)</span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="single-color"
                        data-swatch-color="brown"
                      >
                        <span class="brown_color"></span>
                        <span class="color-text">Brown (+￥120)</span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="single-color"
                        data-swatch-color="umber"
                      >
                        <span class="raw-umber_color"></span>
                        <span class="color-text">Umber (+￥125)</span>
                      </a>
                    </div>
                  </div>
                  <div class="quantity">
                    <label>数量</label>
                    <div class="cart-plus-minus">
                      <input
                        class="cart-plus-minus-box"
                        value="1"
                        type="text"
                      />
                      <div class="dec qtybutton">
                        <i class="zmdi zmdi-chevron-down"></i>
                      </div>
                      <div class="inc qtybutton">
                        <i class="zmdi zmdi-chevron-up"></i>
                      </div>
                    </div>
                  </div>
                  <div class="quicky-group_btn">
                    <ul>
                      <li>
                        <a href="cart.html" class="add-to_cart">添加到购物车</a>
                      </li>
                      <li>
                        <a href="wishlist.html"
                          ><i class="zmdi zmdi-favorite-outline"></i
                        ></a>
                      </li>
                      <li>
                        <a href="compare.html"
                          ><i class="zmdi zmdi-shuffle"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                  <div class="quicky-social_link">
                    <ul>
                      <li class="facebook">
                        <a
                          href="https://www.facebook.com"
                          data-toggle="tooltip"
                          target="_blank"
                          title="Facebook"
                        >
                          <i class="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li class="twitter">
                        <a
                          href="https://twitter.com"
                          data-toggle="tooltip"
                          target="_blank"
                          title="Twitter"
                        >
                          <i class="fab fa-twitter-square"></i>
                        </a>
                      </li>
                      <li class="youtube">
                        <a
                          href="https://www.youtube.com"
                          data-toggle="tooltip"
                          target="_blank"
                          title="Youtube"
                        >
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li class="google-plus">
                        <a
                          href="https://www.plus.google.com/discover"
                          data-toggle="tooltip"
                          target="_blank"
                          title="Google Plus"
                        >
                          <i class="fab fa-google-plus"></i>
                        </a>
                      </li>
                      <li class="instagram">
                        <a
                          href="https://www.instagram.com/"
                          data-toggle="tooltip"
                          target="_blank"
                          title="Instagram"
                        >
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Vue from 'vue'
export default {
  data() {
    return {
      dis: true,
      goodsList: [],
      categroyList: [], // 目录类型
      show: {
        data: {},
        enable: false
      },
      categoryData: []
    };
  },
   created() {
    this.getAllGoods();
    this.getCategory();
  },
  methods: {
    distribute1() {
      this.dis = true;
    },
    distribute2() {
      this.dis = false;
    },
    getAllGoods() {
      this.axios.get("goodservice/goods/findUpAll").then(value => {
        if (value.code === 1) {
          this.goodsList = value.data.slice(0,6);

          console.log(this.goodsList)
        }
      });
    },
    showGood() {
      this.show.enable = true;
      //todo fetch single good data
    },
    getCategory() {
      this.axios.get("goodservice/goodsType/findAllType").then(value => {
          //  console.log(value)
          // console.log("shuzu")
        if (value.code === 1) {
       
          this.categroyList = value.data;
          console.log(value.data)
          console.log("nihao")
          // this.categoryData
          this.categroyList.every((value1, index) => {
            this.categoryData[index] = false;
            return true;
          });
          return;
        }
      });
    },
    showCategory(index) {
      // console.log(index);
      Vue.set(this.categoryData,index,!this.categoryData[index])
      // this.categoryData[index] = ;
    },
    // 跳转商品详情页
   skipToDetail(e){
      // console.log(e)
      this.axios.get('goodservice/goods/findOne',{
        params:{
          goodsId:e
        }
      }).then((res)=>{
        console.log(res)
        console.log("商品详情")
      })
    },
    // 加入购物车
    // addCart(goodsCount,goodsId){
    //   console.log(goodsId)
    //   this.axios.post("goodservice/cart/addCart",{
    //     goodsCount,
    //     goodsId
    //   }).then((res)=>{
    //       console.log(res)
    //       console.log("成功")
    //   })
    // }
  }
 
};
</script>
<style lang="scss" scoped>
.breadcrumb-area {
  background-image: url("../assets/slider/4.jpg");
  ul {
    a {
      color:#ffff;
    }
  }
}
.product-item{
  // height:450px;
  .product-img{
    // height:286px;
    a {
      img{
        height:200px;
      }
    }
  }
}
.modal-dialog-hotsale {
  top: 0 !important;
  left: 8% !important;
  width: 80% !important;
}
.showcate {
  display: block !important;
}
.closecate {
  display: none !important;
}
</style>
