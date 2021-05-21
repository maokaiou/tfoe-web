<template>
  <div class="order-list">
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="order" v-for="(item,index) in orderList" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{item.createTime}}
                <span>|</span>
                {{username}}
                <span>|</span>
                订单号：{{item.ordersId}}
                <span>|</span>
                在线支付
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item.ordersPrice}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list">
                  <div class="good-img">
                    <img alt="" />
                  </div>
                  <div class="good-name">
                    <div class="p-name"></div>
                    <div class="p-money">
                      {{item.ordersPrice}}元
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-state fr">
                <a href="javascript:;" v-if="item.status == 0">未支付</a>
                <a href="javascript:;" v-if="item.status == 1">已支付</a>
                
              </div>
            </div>
          </div>
          <!-- <el-pagination
            v-if="true"
            class="pagination"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            :total="total"
            @current-change="handleChange"
          >
          </el-pagination>
          <div class="load-more" v-if="false">
            <el-button type="primary" :loading="loading" @click="loadMore"
              >加载更多</el-button
            >
          </div>
          <div
            class="scroll-more"
            v-infinite-scroll="scrollMore"
            infinite-scroll-disabled="true"
            infinite-scroll-distance="410"
            v-if="false"
          >
            <img
              src="/imgs/loading-svg/loading-spinning-bubbles.svg"
              alt=""
              v-show="loading"
            />
          </div>
          <no-data v-if="!loading && list.length == 0"></no-data> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      orderList:[]
    }
  },
  mounted(){
    this.showOrderList()
  },
  computed:{
    username(){
      return this.$store.state.username
    }
  },
  methods:{
    showOrderList(){
      this.axios.get('/orderservice/orders/findAll').then((res)=>{
        if(res.code == 1){
          this.orderList = res.data
          console.log(res.data)
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
.order-list {
  .wrapper {
    background-color: #f5f5f5;
    padding-top: 33px;
    padding-bottom: 110px;
    .order-box {
      .order {
        @include border();
        background-color: #ffffff;
        margin-bottom: 31px;
        &:last-child {
          margin-bottom: 0;
        }
        .order-title {
          @include height(74px);
          background-color: #fffaf7;
          padding: 0 43px;
          font-size: 16px;
          color: #666666;
          .item-info {
            span {
              margin: 0 9px;
            }
          }
          .money {
            font-size: 26px;
            color: #333333;
          }
        }
        .order-content {
          padding: 0 43px;
          .good-box {
            width: 88%;
            .good-list {
              display: flex;
              align-items: center;
              height: 145px;
              .good-img {
                width: 112px;
                img {
                  width: 100%;
                }
              }
              .good-name {
                font-size: 20px;
                color: #333333;
              }
            }
          }
          .good-state {
            @include height(145px);
            font-size: 20px;
            color: #ff6600 a {
              color: #ff6600;
            }
          }
        }
      }
      .pagination {
        text-align: right;
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #ff6600;
      }
      .el-button--primary {
        background-color: #ff6600;
        border-color: #ff6600;
      }
      .load-more,
      .scroll-more {
        text-align: center;
      }
    }
  }
}
</style>
