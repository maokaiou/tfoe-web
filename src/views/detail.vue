<template>
  <div class="template-color-1 font-family-02">
    <div class="main-wrapper wrapper-boxed_layout">
       <!-- Begin Loading Area -->
        <!-- <div class="loading">
            <div class="text-center middle">
                <span class="loader">
            <span class="loader-inner"></span>
                </span>
            </div>
        </div> -->
        <!-- Loading Area End Here -->

    <!-- 产品面包屑导航 -->
      <div class="breadcrumb-area">
            <div class="container">
                <div class="breadcrumb-content">
                    <h2>Single Product Type</h2>
                    <ul>
                        <li><a href="index.html">首页</a></li>
                        <li class="active">Single Product Variable</li>
                    </ul>
                </div>
            </div>
      </div>
      <!-- 商品详细介绍 -->
      <div class="sp-area pt-100">
            <div class="container">
                <div class="sp-nav">
                    <div class="row">
                      <!-- 左边框 -->
                      <div class="col-lg-5">
                        <div class="sp-img_area">
                            <swiper v-bind:options="swiperOptions1" class="swiper1">
                                <swiper-slide v-for="(item,index) in proDetailImage" :key="index">
                                <a><img 
                                :src="'api/goodservice/'+ item"
                                /></a>
                                </swiper-slide>
                                <!-- Optional controls -->
                                <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                            </swiper>
                             <swiper class="swiper2">
                                <swiper-slide class="swiper-item" v-for="(item,index) in 3" :key="index">
                                    <a><img src="../assets/images/breadCrumb/1.jpg"/></a>
                                </swiper-slide>
                            </swiper>
                        </div>
                      </div>
                        <!-- 右边框 -->
                        <div class="col-lg-7">
                            <div class="sp-content ml-lg-4">
                                <div class="sp-heading">
                                    <h5><a href="javascript:void(0)">{{proDetail.goodsName}}</a></h5>
                                </div>
                                <div class="sp-essential_stuff">
                                    <ul>
                                        <li>库存量: <a href="javascript:void(0)">10</a></li>
                                        <li>价格: <a href="javascript:void(0)"><span>￥{{proDetail.goodsPrice}}</span></a></li>
                                    </ul>
                                </div>
                                <div class="product-size_box">
                                    <span>样式</span>
                                    <select class="myniceselect nice-select">
                                        <option value="1">快充</option>
                                        <option value="2">慢充</option>
                                        <option value="3">加一根充电线下长三安市</option>
                                        <option value="4">升级版</option>
                                    </select>
                                </div>
                                <div class="quantity">
                                    <label>数量</label>
                                    <div class="cart-plus-minus">
                                        <input class="cart-plus-minus-box" v-model="proAccount" type="text">
                                        <div class="dec qtybutton" @click="updateCart('-')"><i class="zmdi zmdi-chevron-down"></i></div>
                                        <div class="inc qtybutton" @click="updateCart('+')"><i class="zmdi zmdi-chevron-up"></i></div>
                                    </div>
                                </div>
                                <div class="qty-btn_area">
                                    <ul>
                                        <li><a class="qty-cart_btn" href="javaScript:void(0)" @click="addShopCart">添加到购物车</a></li>
                                        <li><a class="qty-wishlist_btn" href="javaScript:void(0)" data-toggle="tooltip" title="收藏夹"><i class="zmdi zmdi-favorite-outline"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <!-- 评论区 -->
       <!-- <div class="product-tab_area pt-90">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="sp-product-tab_nav">
                            <div class="product-tab">
                                <ul class="nav product-menu">
                                    <li><a class="active" data-toggle="tab" href="#description"><span>商品详情</span></a>
                                    </li>
                                    <li><a data-toggle="tab" href="#specification"><span>商品规格</span></a></li>
                                    <li><a data-toggle="tab" href="#reviews"><span>评价 (1)</span></a></li>
                                </ul>
                            </div>
                            <div class="tab-content uren-tab_content">
                              
                                <div id="description" :class="tab-pane">
                                    <div class="product-description">
                                        <ul>
                                            <li>
                                                <span class="title">商品名称</span>
                                                <span>商品很好</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="specification" :class="tab-pane">
                                    <table class="table table-bordered specification-inner_stuff">
                                        <tbody>
                                            <tr>
                                                <td colspan="2"><strong>Memory</strong></td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td>test 1</td>
                                                <td>8gb</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td colspan="2"><strong>Processor</strong></td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td>No. of Cores</td>
                                                <td>1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id="reviews" :class="tab-pane">
                                    <div class="tab-pane active" id="tab-review">
                                        <form class="form-horizontal" id="form-review">
                                            <div id="review">
                                                <table class="table table-striped table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <td style="width: 50%;"><strong>Customer</strong></td>
                                                            <td class="text-right">20/02/20</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
                                                                <p>Good product! Thank you very much</p>
                                                                <div class="rating-box">
                                                                    <ul>
                                                                        <li><i class="zmdi zmdi-star"></i></li>
                                                                        <li><i class="zmdi zmdi-star"></i></li>
                                                                        <li><i class="zmdi zmdi-star"></i></li>
                                                                        <li><i class="zmdi zmdi-star"></i></li>
                                                                        <li><i class="zmdi zmdi-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <h2>写评论</h2>
                                            <div class="form-group required">
                                                <div class="col-sm-12 p-0">
                                                    <label>电子邮件 <span class="required">*</span></label>
                                                    <input class="review-input plr-10" type="email" name="con_email" id="con_email" required>
                                                </div>
                                            </div>
                                            <div class="form-group required second-child">
                                                <div class="col-sm-12 p-0">
                                                    <label class="control-label">填写你的评论</label>
                                                    <textarea class="review-textarea plr-10" name="con_message" id="con_message"></textarea>
                                                    <div class="help-block"><span class="text-danger">注意:</span> HTML is
                                                        not
                                                        translated!</div>
                                                </div>
                                            </div>
                                            <div class="form-group last-child required">
                                                <div class="col-sm-12 p-0">
                                                    <div class="your-opinion">
                                                        <label>你的评分</label>
                                                        <div class="rating-box">
                                                            <ul>
                                                                <li><i class="zmdi zmdi-star"></i></li>
                                                                <li><i class="zmdi zmdi-star"></i></li>
                                                                <li><i class="zmdi zmdi-star"></i></li>
                                                                <li><i class="zmdi zmdi-star"></i></li>
                                                                <li><i class="zmdi zmdi-star"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="quicky-btn-ps_right">
                                                    <button class="quicky-btn-2 square-btn">继续</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div> -->
         <!-- <div class="modal fade modal-wrapper" id="exampleModalCenter">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="modal-inner-area sp-area row">
                            <div class="col-xl-5 col-lg-6">
                                <div class="sp-img_area">
                                    <div class="quicky-element-carousel sp-img_slider slick-img-slider" data-slick-options='{
                                    "slidesToShow": 1,
                                    "arrows": false,
                                    "fade": true,
                                    "draggable": false,
                                    "swipe": false,
                                    "asNavFor": ".sp-img_slider-nav"
                                    }'>
                                        <div class="single-slide red">
                                            <img src="assets/images/product/large-size/1.jpg" alt="Quicky's Product Image">
                                        </div>
                                        <div class="single-slide orange">
                                            <img src="assets/images/product/large-size/2.jpg" alt="Quicky's Product Image">
                                        </div>
                                        <div class="single-slide brown">
                                            <img src="assets/images/product/large-size/3.jpg" alt="Quicky's Product Image">
                                        </div>
                                        <div class="single-slide umber">
                                            <img src="assets/images/product/large-size/4.jpg" alt="Quicky's Product Image">
                                        </div>
                                    </div>
                                    <div class="quicky-element-carousel sp-img_slider-nav arrow-style arrow-sm_size arrow-day_color" data-slick-options='{
                                   "slidesToShow": 3,
                                    "asNavFor": ".sp-img_slider",
                                   "focusOnSelect": true,
                                   "arrows" : true,
                                   "spaceBetween": 30
                                  }' data-slick-responsive='[
                                    {"breakpoint":1501, "settings": {"slidesToShow": 3}},
                                    {"breakpoint":1200, "settings": {"slidesToShow": 2}},
                                    {"breakpoint":992, "settings": {"slidesToShow": 3}},
                                    {"breakpoint":768, "settings": {"slidesToShow": 3}},
                                    {"breakpoint":575, "settings": {"slidesToShow": 2}}
                                ]'>
                                        <div class="single-slide red">
                                            <img src="assets/images/product/large-size/1.jpg" alt="Quicky's Product Thumnail">
                                        </div>
                                        <div class="single-slide orange">
                                            <img src="assets/images/product/large-size/2.jpg" alt="Quicky's Product Thumnail">
                                        </div>
                                        <div class="single-slide brown">
                                            <img src="assets/images/product/large-size/3.jpg" alt="Quicky's Product Thumnail">
                                        </div>
                                        <div class="single-slide umber">
                                            <img src="assets/images/product/large-size/4.jpg" alt="Quicky's Product Thumnail">
                                        </div>
                                    </div>
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
                                            <li class="silver-color"><i class="zmdi zmdi-star"></i></li>
                                            <li class="silver-color"><i class="zmdi zmdi-star"></i></li>
                                        </ul>
                                    </div>
                                    <div class="price-box">
                                        <span class="new-price new-price-2 ml-0">￥194.00</span>
                                        <span class="old-price">￥241.00</span>
                                    </div>
                                    <div class="sp-essential_stuff">
                                        <ul>
                                            <li>品牌 <a href="javascript:void(0)">Buxton</a></li>
                                            <li>产品代码: <a href="javascript:void(0)">产品 16</a></li>
                                            <li>奖励分数: <a href="javascript:void(0)">100</a></li>
                                            <li>库存量: <a href="javascript:void(0)">In Stock</a></li>
                                            <li>价格: <a href="javascript:void(0)"><span>￥453.35</span></a></li>
                                            <li>积分兑换价格: <a href="javascript:void(0)">400</a></li>
                                        </ul>
                                    </div>
                                    <div class="color-list_area">
                                        <div class="color-list_heading">
                                            <h4>Available Options</h4>
                                        </div>
                                        <span class="sub-title">颜色</span>
                                        <div class="color-list">
                                            <a href="javascript:void(0)" class="single-color active" data-swatch-color="red">
                                                <span class="bg-red_color"></span>
                                                <span class="color-text">Red (+￥150)</span>
                                            </a>
                                            <a href="javascript:void(0)" class="single-color" data-swatch-color="orange">
                                                <span class="burnt-orange_color"></span>
                                                <span class="color-text">Orange (+￥170)</span>
                                            </a>
                                            <a href="javascript:void(0)" class="single-color" data-swatch-color="brown">
                                                <span class="brown_color"></span>
                                                <span class="color-text">Brown (+￥120)</span>
                                            </a>
                                            <a href="javascript:void(0)" class="single-color" data-swatch-color="umber">
                                                <span class="raw-umber_color"></span>
                                                <span class="color-text">Umber (+￥125)</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="quantity">
                                        <label>数量</label>
                                        <div class="cart-plus-minus">
                                            <input class="cart-plus-minus-box" value="1" type="text">
                                            <div class="dec qtybutton"><i class="zmdi zmdi-chevron-down"></i></div>
                                            <div class="inc qtybutton"><i class="zmdi zmdi-chevron-up"></i></div>
                                        </div>
                                    </div>
                                    <div class="quicky-group_btn">
                                        <ul>
                                            <li><a href="cart.html" class="add-to_cart">添加到购物车</a></li>
                                            <li><a href="wishlist.html"><i class="zmdi zmdi-favorite-outline"></i></a></li>
                                            <li><a href="compare.html"><i class="zmdi zmdi-shuffle"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="quicky-tag-line">
                                        <h6>标签:</h6>
                                        <a href="javascript:void(0)">clock,</a>
                                        <a href="javascript:void(0)">watch,</a>
                                        <a href="javascript:void(0)">bag</a>
                                    </div>
                                    <div class="quicky-social_link">
                                        <ul>
                                            <li class="facebook">
                                                <a href="https://www.facebook.com" data-toggle="tooltip" target="_blank" title="Facebook">
                                                    <i class="fab fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li class="twitter">
                                                <a href="https://twitter.com" data-toggle="tooltip" target="_blank" title="Twitter">
                                                    <i class="fab fa-twitter-square"></i>
                                                </a>
                                            </li>
                                            <li class="youtube">
                                                <a href="https://www.youtube.com" data-toggle="tooltip" target="_blank" title="Youtube">
                                                    <i class="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li class="google-plus">
                                                <a href="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google Plus">
                                                    <i class="fab fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li class="instagram">
                                                <a href="https://www.instagram.com/" data-toggle="tooltip" target="_blank" title="Instagram">
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
        </div> -->
         <a class="scroll-to-top" href="javascript:void(0)"><i class="icon-arrow-up"></i></a>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  data(){
      return{
          pro_color:[
              {    id:1,
                  name:"红色"
              },
               {
                   id:2,
                  name:"黄色"
              },
               {
                   id:3,
                  name:"绿色"
              }
          ],
            swiperOptions1: {
                autoplay : true,
                loop: true,
                speed: 3000,
                effect : 'fade',
                fadeEffect: {
                crossFade: true,
                },
                
                // pagination: {
                // el: ".swiper-pagination",
                // clickable: true
                // },
                spaceBetween: 10,
                thumbs: {
                    swiper: {
                    el: '.swiper2',
                    spaceBetween: 10,
                    slidesPerView: 4,
                    watchSlidesVisibility: true,/*避免出现bug*/
                    },
                }
            
            },
        goodsId:"",
        proDetail:{}, //商品信息
        proDetailImage:[], // 商品图片
        proAccount:1
      }
  },
  components: {
                Swiper,
                SwiperSlide
            },
  mounted(){
      this.getproductInfor()

  },
  methods:{
      getproductInfor(){
        //   console.log(this.$router)
           console.log(this.$route)
           var goodsId = this.$route.params.id
           this.goodsId = goodsId
        //    this.goodsId = goodsId
        this.axios.get('goodservice/goods/findOne',{
            params:{
            goodsId
            }
      }).then((res)=>{
        console.log(res)
        if(res.code == 1){
            this.proDetail = res.data
            // console.log(this.proDetail.image)
            this.proDetailImage = this.proDetail.image.split(';')
            // console.log(this.proDetailImage)
            //  console.log("商品详情")
            //  console.log(this.proDetail)
        }
      })

      },
      updateCart(type){
          console.log(type)
          if(type==='+'){
              this.proAccount=this.proAccount+1
          }
          if(type==='-'){
              if(this.proAccount === 1){
                  this.$message.warning("至少保留一件商品")
              }else{
                  this.proAccount=this.proAccount-1
              }
          }
      },
      addShopCart(){
        //   console.log("加入成功")
          this.axios.post('/userservice/cart/addCart',{
               goodsCount: this.proAccount,
                goodsId: this.goodsId
          }).then((res)=>{
              if(res.code === 1){
                 this.$message.success("添加成功");
              }else if ( res.code === 0){
                  this.$message.warning("请先登录")
                  this.$router.push("/login")
              }
          })
      },
      // 商品详情页
//    skipToDetail(e){
//       // console.log(e)
//       this.axios.get('goodservice/goods/findOne',{
//         params:{
//           goodsId:e
//         }
//       }).then((res)=>{
//         console.log(res)
//         console.log("商品详情")
//       })
//     },
  }
}
</script>
<style lang="scss" scoped>
    .breadcrumb-area{
        background-image: url("../assets/slider/7.jpg");
    }  
    .sp-img_area{
         .swiper1 {
            height: 200px;
            img {
            width: 100%;
            height: 100%;
            }
           
        }
         .swiper2 {
                height:80px;
                margin-top:20px;
                    .swiper-wrapper{
                        display:flex;
                         .swiper-item{
                             flex: 1!important;;
                            // width: 80px!important;
                            height: 60px;
                            display:flex;
                        justify-content: center;
                        align-items: center;
                        margin-left:10px;
                        &:nth-child(1){
                            margin-left:0px;
                        }
                            a{
                                img{
                                    width:100%;    
                                }
                            }
                        }  
                    }
                    
            }
    }
   
</style>

