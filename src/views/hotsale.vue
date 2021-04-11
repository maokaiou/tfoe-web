<template>
  <div class="quicky-content_wrapper pt-90 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 order-2 order-lg-1">
          <div class="quicky-sidebar-catagories_area">
            <!--            <div class="quicky-sidebar_categories">-->
            <!--              <div class="quicky-categories_title first-child">-->
            <!--                <h5>通过价格过滤</h5>-->
            <!--              </div>-->
            <!--              <div class="price-filter">-->
            <!--                <div id="slider-range"></div>-->
            <!--                <div class="price-slider-amount">-->
            <!--                  <div class="label-input">-->
            <!--                    <label>price : </label>-->
            <!--                    <input-->
            <!--                      type="text"-->
            <!--                      id="amount"-->
            <!--                      name="price"-->
            <!--                      placeholder="Add Your Price"-->
            <!--                    />-->
            <!--                    <button class="filter-btn">过滤</button>-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
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
            <!-- 颜色 -->
            <!--            <div class="quicky-sidebar_categories">-->
            <!--              <div class="quicky-categories_title">-->
            <!--                <h5>颜色</h5>-->
            <!--              </div>-->
            <!--              <ul class="sidebar-checkbox_list">-->
            <!--                <li>-->
            <!--                  <a href="javascript:void(0)">Black (1)</a>-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                  <a href="javascript:void(0)">Blue (1)</a>-->
            <!--                </li>-->
            <!--                <li>-->
            <!--                  <a href="javascript:void(0)">Gold (3)</a>-->
            <!--                </li>-->
            <!--              </ul>-->
            <!--            </div>-->
            <!-- 产品标签 -->
            <!--            <div class="quicky-sidebar_categories">-->
            <!--              <div class="quicky-categories_title quicky-tags_title">-->
            <!--                <h5>产品标签</h5>-->
            <!--              </div>-->
            <!--              <ul class="quicky-tags_list">-->
            <!--                <li><a href="javascript:void(0)">Car</a></li>-->
            <!--                <li><a href="javascript:void(0)">Toy</a></li>-->
            <!--                <li><a href="javascript:void(0)">Watch</a></li>-->
            <!--                <li><a href="javascript:void(0)">Bag</a></li>-->
            <!--                <li><a href="javascript:void(0)">Shoes</a></li>-->
            <!--                <li><a href="javascript:void(0)">Shirt</a></li>-->
            <!--                <li><a href="javascript:void(0)">Pen Stand</a></li>-->
            <!--              </ul>-->
            <!--            </div>-->
            <!-- <div class="quicky-sidebar_categories quicky-banner_area sidebar-banner_area">
                            <div class="banner-item img-hover_effect">
                                <div class="banner-img">
                                    <a href="javascript:void(0)">
                                        <img class="img-full" src="assets/images/banner/3-1.jpg" alt="Quicky's Banner">
                                    </a>
                                </div>
                            </div>
                        </div> -->
          </div>
        </div>
        <div class="col-lg-9 order-1 order-lg-2">
          <div class="shop-toolbar">
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
            <div class="product-page_count">
              <p>随机显示</p>
            </div>
            <div class="product-item-selection_area">
              <div class="product-short">
                <label class="select-label">排序:</label>
                <select class="nice-select">
                  <option value="1">Default sorting</option>
                  <option value="2">Name, A to Z</option>
                  <option value="3">Name, Z to A</option>
                  <option value="4">Price, low to high</option>
                  <option value="5">Price, high to low</option>
                  <option value="5">Rating (Highest)</option>
                  <option value="5">Rating (Lowest)</option>
                  <option value="5">Model (A - Z)</option>
                  <option value="5">Model (Z - A)</option>
                </select>
              </div>
            </div>
          </div>
          <div
            :class="
              dis
                ? 'shop-product-wrap grid gridview-3 row'
                : 'shop-product-wrap row listview'
            "
          >
            <div class="col-12" v-for="(item, index) in goodsList" :key="index">
              <div class="product-item">
                <div class="single-product">
                  <div class="product-img">
                    <a href="single-product.html">
                      <img
                        :src="'api/goodservice/' + item.image"
                        alt="Quicky's Product Image"
                      />
                    </a>
                    <div class="add-actions">
                      <ul>
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
                          <a
                            href="wishlist.html"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add To Wishlist"
                            ><i class="icon-heart"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="compare.html"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add To Compare"
                            ><i class="icon-refresh"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="cart.html"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add To cart"
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
                        <a href="single-product.html">{{ item.goodsName }}</a>
                      </h3>
                      <div class="price-box">
                        <span class="new-price ml-0"
                          >￥{{ item.goodsPrice }}</span
                        >
                      </div>
                      <div
                        class="review-area d-flex justify-content-between align-items-center"
                      >
                        <!--                        <div class="rating-box gamboge-color">-->
                        <!--                          <ul>-->
                        <!--                            <li><i class="icon-star"></i></li>-->
                        <!--                            <li><i class="icon-star"></i></li>-->
                        <!--                            <li><i class="icon-star"></i></li>-->
                        <!--                            <li><i class="icon-star"></i></li>-->
                        <!--                            <li><i class="icon-star"></i></li>-->
                        <!--                          </ul>-->
                        <!--                        </div>-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 第二个 -->
              <div class="list-product_item">
                <div class="single-product">
                  <div class="product-img">
                    <a href="single-product.html">
                      <img
                        :src="'api/goodservice/' + item.image"
                        alt="Quicky's Product Image"
                      />
                    </a>
                  </div>
                  <div class="quicky-product-content">
                    <div class="product-desc_info">
                      <h6 class="product-name">
                        <a href="single-product.html">Abstract Design Clock</a>
                      </h6>
                      <div class="price-box">
                        <span class="old-price">￥75.00</span>
                        <span class="new-price">￥70.00</span>
                      </div>
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
                        <li
                          class="quick-view-btn"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
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
                          <a
                            href="wishlist.html"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add To Wishlist"
                            ><i class="icon-heart"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="compare.html"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add To Compare"
                            ><i class="icon-refresh"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="cart.html"
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
          <!--          <div class="row">-->
          <!--            <div class="col-lg-12">-->
          <!--              <div class="quicky-paginatoin-area">-->
          <!--                <ul class="quicky-pagination-box">-->
          <!--                  <li class="active"><a href="javascript:void(0)">1</a></li>-->
          <!--                  <li><a href="javascript:void(0)">2</a></li>-->
          <!--                  <li><a href="javascript:void(0)">3</a></li>-->
          <!--                  <li><a href="javascript:void(0)">4</a></li>-->
          <!--                  <li><a href="javascript:void(0)">5</a></li>-->
          <!--                  <li><a class="Next" href="javascript:void(0)">Next</a></li>-->
          <!--                </ul>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
    <!--    图片展示-->
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
                  <!--                  <div-->
                  <!--                    class="quicky-element-carousel sp-img_slider-nav arrow-style arrow-sm_size arrow-day_color"-->
                  <!--                    data-slick-options='{-->
                  <!--                                   "slidesToShow": 3,-->
                  <!--                                    "asNavFor": ".sp-img_slider",-->
                  <!--                                   "focusOnSelect": true,-->
                  <!--                                   "arrows" : true,-->
                  <!--                                   "spaceBetween": 30-->
                  <!--                                  }'-->
                  <!--                    data-slick-responsive='[-->
                  <!--                                    {"breakpoint":1501, "settings": {"slidesToShow": 3}},-->
                  <!--                                    {"breakpoint":1200, "settings": {"slidesToShow": 2}},-->
                  <!--                                    {"breakpoint":992, "settings": {"slidesToShow": 3}},-->
                  <!--                                    {"breakpoint":768, "settings": {"slidesToShow": 3}},-->
                  <!--                                    {"breakpoint":575, "settings": {"slidesToShow": 2}}-->
                  <!--                                ]'-->
                  <!--                  >-->
                  <!--                    <div class="single-slide red">-->
                  <!--                      <img-->
                  <!--                        src="/images/product/large-size/1.jpg"-->
                  <!--                        alt="Quicky's Product Thumnail"-->
                  <!--                      />-->
                  <!--                    </div>-->
                  <!--                    <div class="single-slide orange">-->
                  <!--                      <img-->
                  <!--                        src="/images/product/large-size/2.jpg"-->
                  <!--                        alt="Quicky's Product Thumnail"-->
                  <!--                      />-->
                  <!--                    </div>-->
                  <!--                    <div class="single-slide brown">-->
                  <!--                      <img-->
                  <!--                        src="/images/product/large-size/3.jpg"-->
                  <!--                        alt="Quicky's Product Thumnail"-->
                  <!--                      />-->
                  <!--                    </div>-->
                  <!--                    <div class="single-slide umber">-->
                  <!--                      <img-->
                  <!--                        src="/images/product/large-size/4.jpg"-->
                  <!--                        alt="Quicky's Product Thumnail"-->
                  <!--                      />-->
                  <!--                    </div>-->
                  <!--                  </div>-->
                </div>
              </div>
              <div class="col-xl-7 col-lg-6">
                <div class="sp-content">
                  <div class="sp-heading">
                    <h5><a href="#">Moonstar Clock</a></h5>
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
                  <!--                  <div class="quicky-tag-line">-->
                  <!--                    <h6>标签:</h6>-->
                  <!--                    <a href="javascript:void(0)">clock,</a>-->
                  <!--                    <a href="javascript:void(0)">watch,</a>-->
                  <!--                    <a href="javascript:void(0)">bag</a>-->
                  <!--                  </div>-->
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
          this.goodsList = value.data;
        }
      });
    },
    showGood() {
      this.show.enable = true;
      //todo fetch single good data
    },
    getCategory() {
      this.axios.get("goodservice/goodsType/findAllType").then(value => {
        if (value.code === 1) {
          this.categroyList = value.data;
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
      console.log(index);
      Vue.set(this.categoryData,index,!this.categoryData[index])
      // this.categoryData[index] = ;
    },
    // addCart(good_id){
    //   this.axios.post("/goodservice/").then()
    // }
  },
  created() {
    this.getAllGoods();
    this.getCategory();
  }
};
</script>
<style lang="scss">
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
