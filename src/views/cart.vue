<template>
  <div class="cart">
    <!-- 面包屑区域 -->
    <div class="breadcrumb-area bkg">
      <div class="container">
        <div class="breadcrumb-content">
          <h2>Shop Related Page</h2>
          <ul>
            <li><a href="/index">首页</a></li>
            <li class="active">购物车</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 订单列表 -->
    <div class="quicky-cart-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <form action="javascript:void(0)">
              <div class="table-content table-responsive">
                <table class="table">
                  <thead>
                     <th class="quicky-product-remove">移除</th>
                      <th class="quicky-product-thumbnail">图片</th>
                      <th class="cart-product-name">产品</th>
                      <th class="quicky-product-price">单位价格</th>
                      <th class="quicky-product-quantity">数量</th>
                      <th class="quicky-product-subtotal">共计</th>
                  </thead>
                  <tbody>
                    <tr  v-for="(item, index) in cartlist" v-bind:key="index">
                      <td class="product-remove">
                        <!-- 移除事件 -->
                        <a href="javascript:void(0)"
                          ><i class="zmdi zmdi-close" title="移除"></i
                        ></a>
                      </td>
                      <td class="product-thumbnail">
                        <a href="javascript:void(0)"
                          ><img
                            :src="'api/goodservice/' + item.image"
                            alt=" Cart Thumbnail"
                        /></a>
                      </td>
                      <td class="product-name">
                        <a href="javascript:void(0)">{{item.goodsName}}</a>
                      </td>
                      <td class="quicky-product-price">
                        <span class="amount">￥{{item.goodsPrice}}</span>
                      </td>
                      <td class="quantity">
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
                      </td>
                      <td class="product-subtotal">
                        <span class="amount">￥46.80</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="coupon-all">
                    <div class="coupon">
                      <input
                        id="coupon_code"
                        class="input-text"
                        name="coupon_code"
                        value=""
                        placeholder="优惠券代码"
                        type="text"
                      />
                      <input
                        class="button mt-xxs-30"
                        name="apply_coupon"
                        value="申请优惠券"
                        type="submit"
                      />
                    </div>
                    <div class="coupon2">
                      <input
                        class="button"
                        name="update_cart"
                        value="更新购物车"
                        type="submit"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5 ml-auto">
                  <div class="cart-page-total">
                    <h2>购物车总计</h2>
                    <ul>
                      <li>小计 <span>￥118.60</span></li>
                      <li>共计 <span>￥118.60</span></li>
                    </ul>
                    <a href="/orderConfirm">订单确认</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      cartlist: [], //购物车商品列表
    }
  },
  methods:{
    getcartList() {
      this.axios.get("/userservice/cart/lookThroughCart").then(res => {
        if(res.code === 1) {
          this.cartlist = res.data;
        }
      });
    }
  },
  mounted(){
    this.getcartList()
  }

}
</script>
<style lang="scss">
  .bkg {
    background: url('/images/breadcrumb/1.jpg') no-repeat center;
  }
  .quicky-product-select{
    a{
      // display:block;
      .checkbox{
        display:inline-block;
      width:10px;
      height:10px;
      // #E5E5E5
      border: 1px solid #333;
      }
    }
    
  }
  
</style>