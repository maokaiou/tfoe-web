<template>
  <div class="main">
    <!-- 轮播区域 -->
    <div class="swiper-box">
      <swiper v-bind:options="swiperOptions">
        <swiper-slide>
          <a><img src="/images/slider/bg/5-1.jpg"/></a>
        </swiper-slide>
        <swiper-slide>
          <a><img src="/images/slider/bg/5-2.jpg"/></a>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <!-- 广告区域 -->
    <div class="banner-area-9 pt-30">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4">
            <div class="banner-item">
              <div class="banner-img">
                <a href="javascript:void(0)">
                  <img src="/images/banner/5-1.jpg" alt="Quicky's Banner" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row banner-wrap">
              <div class="col-lg-6 pt-md-30">
                <div class="banner-item">
                  <div class="banner-img">
                    <a href="javascript:void(0)">
                      <img src="/images/banner/5-2.jpg" alt="Quicky's Banner" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 pt-md-30">
                <div class="banner-item">
                  <div class="banner-img">
                    <a href="javascript:void(0)">
                      <img src="/images/banner/5-3.jpg" alt="Quicky's Banner" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row banner-wrap">
              <div class="col-lg-5">
                <div class="banner-item">
                  <div class="banner-img">
                    <a href="javascript:void(0)">
                      <img src="/images/banner/5-4.jpg" alt="Quicky's Banner" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 pt-md-30">
                <div class="banner-item">
                  <div class="banner-img">
                    <a href="javascript:void(0)">
                      <img src="/images/banner/5-5.jpg" alt="Quicky's Banner" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 特色产品区域 -->
    <div class="product-area-9 pt-95">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h3 class="heading">特色产品</h3>
              <div class="section-icon"></div>
            </div>
          </div>
          <div class="col-lg-12">
            <div
              class="quicky-element-carousel product-slider"
              data-slick-options='{
                            "slidesToShow": 3,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "arrows": false,
                            "dots": false,
                            "spaceBetween": 30
                            }'
              data-slick-responsive='[
                            {"breakpoint":992, "settings": {
                            "slidesToShow": 2
                            }},
                            {"breakpoint":575, "settings": {
                            "slidesToShow": 1
                            }}
                        ]'
            >
              <div class="product-item">
                <div class="single-product">
                  <div class="product-img">
                    <a href="single-product.html">
                      <img
                        src="/images/product/medium-size/34.jpg"
                        alt="Quicky's Product Image"
                      />
                    </a>
                    <span class="sticker red-color">Sale</span>
                    <div class="add-actions hover-right_side">
                      <ul>
                        <li
                          class="quick-view-btn"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                            ><i class="icon-magnifier"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="wishlist.html"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add To Wishlist"
                            ><i class="icon-heart"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="compare.html"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add To Compare"
                            ><i class="icon-refresh"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="cart.html"
                            data-toggle="tooltip"
                            data-placement="left"
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
                        <span>Lamp</span>
                      </div>
                      <h3 class="product-name">
                        <a href="single-product.html">Wooden Style Lamp</a>
                      </h3>
                      <div class="price-box">
                        <span class="new-price ml-0">￥70.00</span>
                      </div>
                      <div
                        class="review-area d-flex justify-content-between align-items-center"
                      >
                        <div class="rating-box gamboge-color">
                          <ul>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="single-product">
                  <div class="product-img">
                    <a href="single-product.html">
                      <img
                        src="/images/product/medium-size/35.jpg"
                        alt="Quicky's Product Image"
                      />
                    </a>
                    <span class="sticker">New</span>
                    <span class="sticker-2">-16%</span>
                    <div class="add-actions hover-right_side">
                      <ul>
                        <li
                          class="quick-view-btn"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                            ><i class="icon-magnifier"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="wishlist.html"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add To Wishlist"
                            ><i class="icon-heart"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="compare.html"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add To Compare"
                            ><i class="icon-refresh"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="cart.html"
                            data-toggle="tooltip"
                            data-placement="left"
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
                        <span>Lamp</span>
                      </div>
                      <h3 class="product-name">
                        <a href="single-product.html">Fency Design Lamp</a>
                      </h3>
                      <div class="price-box">
                        <span class="new-price ml-0">￥45.00</span>
                      </div>
                      <div
                        class="review-area d-flex justify-content-between align-items-center"
                      >
                        <div class="rating-box gamboge-color">
                          <ul>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="single-product">
                  <div class="product-img">
                    <a href="single-product.html">
                      <img
                        src="/images/product/medium-size/36.jpg"
                        alt="Quicky's Product Image"
                      />
                    </a>
                    <div class="add-actions hover-right_side">
                      <ul>
                        <li
                          class="quick-view-btn"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                            ><i class="icon-magnifier"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="wishlist.html"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add To Wishlist"
                            ><i class="icon-heart"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="compare.html"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add To Compare"
                            ><i class="icon-refresh"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="cart.html"
                            data-toggle="tooltip"
                            data-placement="left"
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
                        <span>Lamp</span>
                      </div>
                      <h3 class="product-name">
                        <a href="single-product.html">Wood Frame Lamp</a>
                      </h3>
                      <div class="price-box">
                        <span class="new-price ml-0">￥65.00</span>
                      </div>
                      <div
                        class="review-area d-flex justify-content-between align-items-center"
                      >
                        <div class="rating-box gamboge-color">
                          <ul>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
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
    </div>
    <!-- Banner区域 -->
    <div class="banner-area-10 countdown-banner pt-85">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="banner-item">
              <div class="banner-img">
                <a href="javascript:void(0)">
                  <img src="/images/banner/5-6.jpg" alt="Quicky's Banner" />
                </a>
              </div>
              <div class="banner-content">
                <span>Get <strong>40%</strong> off</span>
                <h3 class="item-name">Luxurious Lamp</h3>
                <div class="countdown-wrap-2">
                  <div
                    class="countdown item-4"
                    data-countdown="2020/6/10"
                    data-format="short"
                  >
                    <div class="countdown__item">
                      <span class="countdown__time daysLeft"></span>
                      <span class="countdown__text daysText"></span>
                    </div>
                    <div class="countdown__item">
                      <span class="countdown__time hoursLeft"></span>
                      <span class="countdown__text hoursText"></span>
                    </div>
                    <div class="countdown__item">
                      <span class="countdown__time minsLeft"></span>
                      <span class="countdown__text minsText"></span>
                    </div>
                    <div class="countdown__item">
                      <span class="countdown__time secsLeft"></span>
                      <span class="countdown__text secsText"></span>
                    </div>
                  </div>
                </div>
                <a
                  href="shop-left-sidebar.html"
                  class="quicky-btn vertical-line"
                  >Order Now</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-5 pt-md-30">
            <div class="banner-item">
              <div class="banner-img">
                <a href="javascript:void(0)">
                  <img src="/images/banner/5-7.jpg" alt="Quicky's Banner" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 人气产品区域 -->
    <div class="product-area-10 pt-85">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h3 class="heading">人气商品</h3>
              <div class="section-icon"></div>
            </div>
          </div>
          <div class="col-lg-12">
            <div
              class="quicky-element-carousel product-slider"
              data-slick-options='{
                            "slidesToShow": 3,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "arrows": false,
                            "dots": false,
                            "spaceBetween": 30
                            }'
              data-slick-responsive='[
                            {"breakpoint":992, "settings": {
                            "slidesToShow": 2
                            }},
                            {"breakpoint":575, "settings": {
                            "slidesToShow": 1
                            }}
                        ]'
            >
              <div class="product-item">
                <div class="single-product">
                  <div class="product-img">
                    <a href="single-product.html">
                      <img
                        src="/images/product/medium-size/37.jpg"
                        alt="Quicky's Product Image"
                      />
                    </a>
                    <span class="sticker red-color">Sale</span>
                    <div class="add-actions hover-right_side">
                      <ul>
                        <li
                          class="quick-view-btn"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                            ><i class="icon-magnifier"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="wishlist.html"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add To Wishlist"
                            ><i class="icon-heart"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="compare.html"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add To Compare"
                            ><i class="icon-refresh"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="cart.html"
                            data-toggle="tooltip"
                            data-placement="left"
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
                        <span>Lamp</span>
                      </div>
                      <h3 class="product-name">
                        <a href="single-product.html">Glass Style Lamp</a>
                      </h3>
                      <div class="price-box">
                        <span class="new-price ml-0">￥95.00</span>
                      </div>
                      <div
                        class="review-area d-flex justify-content-between align-items-center"
                      >
                        <div class="rating-box gamboge-color">
                          <ul>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="single-product">
                  <div class="product-img">
                    <a href="single-product.html">
                      <img
                        src="/images/product/medium-size/38.jpg"
                        alt="Quicky's Product Image"
                      />
                    </a>
                    <span class="sticker">New</span>
                    <span class="sticker-2">-16%</span>
                    <div class="add-actions hover-right_side">
                      <ul>
                        <li
                          class="quick-view-btn"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                            ><i class="icon-magnifier"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="wishlist.html"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add To Wishlist"
                            ><i class="icon-heart"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="compare.html"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add To Compare"
                            ><i class="icon-refresh"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="cart.html"
                            data-toggle="tooltip"
                            data-placement="left"
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
                        <span>Lamp</span>
                      </div>
                      <h3 class="product-name">
                        <a href="single-product.html">Stenless Stell Lamp</a>
                      </h3>
                      <div class="price-box">
                        <span class="new-price ml-0">￥39.28</span>
                      </div>
                      <div
                        class="review-area d-flex justify-content-between align-items-center"
                      >
                        <div class="rating-box gamboge-color">
                          <ul>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-item">
                <div class="single-product">
                  <div class="product-img">
                    <a href="single-product.html">
                      <img
                        src="/images/product/medium-size/39.jpg"
                        alt="Quicky's Product Image"
                      />
                    </a>
                    <div class="add-actions hover-right_side">
                      <ul>
                        <li
                          class="quick-view-btn"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          <a
                            href="javascript:void(0)"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Quick View"
                            ><i class="icon-magnifier"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="wishlist.html"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add To Wishlist"
                            ><i class="icon-heart"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="compare.html"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add To Compare"
                            ><i class="icon-refresh"></i
                          ></a>
                        </li>
                        <li>
                          <a
                            href="cart.html"
                            data-toggle="tooltip"
                            data-placement="left"
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
                        <span>Lamp</span>
                      </div>
                      <h3 class="product-name">
                        <a href="single-product.html">Stylish Design Lamp</a>
                      </h3>
                      <div class="price-box">
                        <span class="new-price ml-0">￥58.00</span>
                      </div>
                      <div
                        class="review-area d-flex justify-content-between align-items-center"
                      >
                        <div class="rating-box gamboge-color">
                          <ul>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
                            <li><i class="icon-star"></i></li>
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
    </div>
    <brand-area></brand-area>
  </div>
</template>
<script>
import BrandArea from "./../components/BrandArea.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import loginMixin from "@/mixins/loginMixin";
export default {
  mixins: [loginMixin],
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        speed: 300,
        effect: "cube",
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    BrandArea,
    Swiper,
    SwiperSlide
  }
};
</script>
<style lang="scss">
.main {
  width: 1379px;
  margin-left: auto;
  margin-right: auto;
  // .swiper-box {
  //   width: 1379px;
  //   height: 755px;
  // }
  .swiper-container {
    height: 755px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .section-title {
    .section-icon {
      background: url("/images/section-title/icon/1.png") no-repeat center;
      margin-bottom: 30px;
    }
  }
  .product-item {
    display: inline-block;
    width: 360px;
    height: 508px;
    margin: 10px;
  }
}
</style>
