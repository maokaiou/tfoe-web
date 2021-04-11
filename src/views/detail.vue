<template>
  <div class="datail">
    <!-- 产品面包屑导航 -->
    <div class="breadcrumb-area">
      <div class="container">
        <div class="breadcrumb-content">
          <h2>Single Product Type</h2>
          <ul>
            <li><a href="/#/index">首页</a></li>
            <li class="active">Single Product</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 商品详细介绍 -->
    <div class="sp-area pt-100">
      <div class="container">
        <div class="sp-nav">
          <div class="row">
            <div class="col-lg-5">
              <div class="sp-img_area">
                <div
                  class="sp-img_slider slick-img-slider quicky-element-carousel"
                  data-slick-options='{
                                    "slidesToShow": 1,
                                    "arrows": false,
                                    "fade": true,
                                    "draggable": false,
                                    "swipe": false,
                                    "asNavFor": ".sp-img_slider-nav"
                                    }'
                >
                  <div class="single-slide red zoom">
                    <img
                      src="/images/product/large-size/1.jpg"
                      alt="Quicky's Product Image"
                    />
                  </div>
                  <div class="single-slide orange zoom">
                    <img
                      src="/images/product/large-size/2.jpg"
                      alt="Quicky's Product Image"
                    />
                  </div>
                  <div class="single-slide brown zoom">
                    <img
                      src="/images/product/large-size/3.jpg"
                      alt="Quicky's Product Image"
                    />
                  </div>
                  <div class="single-slide umber zoom">
                    <img
                      src="/images/product/large-size/4.jpg"
                      alt="Quicky's Product Image"
                    />
                  </div>
                </div>
                <div
                  class="sp-img_slider-nav slick-slider-nav quicky-element-carousel arrow-style arrow-sm_size arrow-day_color"
                  data-slick-options='{
                                    "slidesToShow": 3,
                                    "asNavFor": ".sp-img_slider",
                                    "focusOnSelect": true,
                                    "arrows" : true,
                                    "spaceBetween": 30
                                    }'
                  data-slick-responsive='[
                                            {"breakpoint":1501, "settings": {"slidesToShow": 3}},
                                            {"breakpoint":1200, "settings": {"slidesToShow": 2}},
                                            {"breakpoint":992, "settings": {"slidesToShow": 4}},
                                            {"breakpoint":768, "settings": {"slidesToShow": 3}},
                                            {"breakpoint":575, "settings": {"slidesToShow": 2}}
                                        ]'
                >
                  <div class="single-slide red">
                    <img
                      src="/images/product/large-size/1.jpg"
                      alt="Quicky's Product Thumnail"
                    />
                  </div>
                  <div class="single-slide orange">
                    <img
                      src="/images/product/large-size/2.jpg"
                      alt="Quicky's Product Thumnail"
                    />
                  </div>
                  <div class="single-slide brown">
                    <img
                      src="/images/product/large-size/3.jpg"
                      alt="Quicky's Product Thumnail"
                    />
                  </div>
                  <div class="single-slide umber">
                    <img
                      src="/images/product/large-size/4.jpg"
                      alt="Quicky's Product Thumnail"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="sp-content ml-lg-4">
                <div class="sp-heading">
                  <h5><a href="#">Moonstar Clock</a></h5>
                </div>
                <span class="reference">Reference: demo_1</span>
                <div class="rating-box">
                  <ul>
                    <li><i class="zmdi zmdi-star"></i></li>
                    <li><i class="zmdi zmdi-star"></i></li>
                    <li><i class="zmdi zmdi-star"></i></li>
                    <li class="silver-color"><i class="zmdi zmdi-star"></i></li>
                    <li class="silver-color"><i class="zmdi zmdi-star"></i></li>
                  </ul>
                </div>
                <div class="sp-essential_stuff">
                  <ul>
                    <li>品牌 <a href="javascript:void(0)">Buxton</a></li>
                    <li>产品代码: <a href="javascript:void(0)">产品 16</a></li>
                    <li>奖励分数: <a href="javascript:void(0)">100</a></li>
                    <li>库存量: <a href="javascript:void(0)">In Stock</a></li>
                    <li>
                      价格:
                      <a href="javascript:void(0)"><span>￥453.35</span></a>
                    </li>
                    <li>积分兑换价格: <a href="javascript:void(0)">400</a></li>
                  </ul>
                </div>
                <div class="product-size_box">
                  <span>Size</span>
                  <select class="myniceselect nice-select">
                    <option value="1">S</option>
                    <option value="2">M</option>
                    <option value="3">L</option>
                    <option value="4">XL</option>
                  </select>
                </div>
                <div class="quantity">
                  <label>数量</label>
                  <div class="cart-plus-minus">
                    <input class="cart-plus-minus-box" value="1" type="text" />
                    <div class="dec qtybutton">
                      <i class="zmdi zmdi-chevron-down"></i>
                    </div>
                    <div class="inc qtybutton">
                      <i class="zmdi zmdi-chevron-up"></i>
                    </div>
                  </div>
                </div>
                <div class="qty-btn_area">
                  <ul>
                    <li>
                      <a class="qty-cart_btn" href="cart.html">添加到购物车</a>
                    </li>
                    <li>
                      <a
                        class="qty-wishlist_btn"
                        href="wishlist.html"
                        data-toggle="tooltip"
                        title="Add To Wishlist"
                        ><i class="zmdi zmdi-favorite-outline"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        class="qty-compare_btn"
                        href="compare.html"
                        data-toggle="tooltip"
                        title="Compare This Product"
                        ><i class="zmdi zmdi-shuffle"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div class="quicky-tag-line">
                  <h6>标签:</h6>
                  <a href="javascript:void(0)">clock,</a>
                  <a href="javascript:void(0)">watch,</a>
                  <a href="javascript:void(0)">bag</a>
                </div>
                <div class="social-link-4 square-style align-left border-style">
                  <ul>
                    <li class="facebook">
                      <a
                        href="https://www.facebook.com"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Facebook"
                      >
                        <i class="zmdi zmdi-facebook"></i>
                      </a>
                    </li>
                    <li class="twitter">
                      <a
                        href="https://twitter.com"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Twitter"
                      >
                        <i class="zmdi zmdi-twitter"></i>
                      </a>
                    </li>
                    <li class="google-plus">
                      <a
                        href="https://www.plus.google.com/discover"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Google Plus"
                      >
                        <i class="zmdi zmdi-google-plus"></i>
                      </a>
                    </li>
                    <li class="instagram">
                      <a
                        href="https://rss.com"
                        data-toggle="tooltip"
                        target="_blank"
                        title="Instagram"
                      >
                        <i class="zmdi zmdi-instagram"></i>
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
</template>
