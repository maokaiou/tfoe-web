<template>
  <div class="order-list">
    <div class="wrapper">
      <div class="container">
        <div class="nav-order">
            <div class="content-wrapper">
              <ul>
                <li @click="allOrder">
                  <a>
                    <span>全部订单
                      <em>({{orderList.length}})</em>
                    </span>
                  </a>
                </li>
                <li  @click="noPayOrder">
                  <a>
                    <span>待付款</span>
                    <em>({{noPayList.length}})</em>
                  </a>
                </li>
                <li @click="payOrder">
                  <a>
                    <span>待收货</span>
                    <em>({{payList.length}})</em>
                  </a>
                </li>
                <li @click="sendOrder">
                  <a>
                    <span>已发货</span>
                    <em>({{payList.length}})</em>
                  </a>
                </li>
                <li @click="endOrder">
                  <a>
                    <span>已完成</span>
                    <em>({{payList.length}})</em>
                  </a>
                </li>
              </ul>
            </div>
        </div>
        <div class="order-box">
          <div class="order" v-for="(item,index1) in orderList" :key="index1" v-show="showAllOrder">
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
            <div class="order-content clearfix" @click="jumpOrderDetail(item.ordersId)">
              <div class="good-box fl">
                <div class="good-list">
                  <div class="good-name">
                    <div class="p-name"></div>
                    <div class="p-money">
                      {{item.ordersPrice}}元
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-state fr">
                <a href="javascript:;" v-if="item.status == 0">
                  <span>未支付</span>
                  
                </a>
                <a href="javascript:;" v-if="item.status == 1">已支付</a> 
              </div>
            </div>
          </div>
          <div class="order" v-for="(item2,index2) in noPayList" :key="index2" v-show="showNoPay">
            <div class="order-title">
              <div class="item-info fl">
                {{item2.createTime}}
                <span>|</span>
                {{username}}
                <span>|</span>
                订单号：{{item2.ordersId}}
                <span>|</span>
                在线支付
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item2.ordersPrice}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix" @click="jumpOrderDetail(item2.ordersId)">
              <div class="good-box fl">
                <div class="good-list">
                  <div class="good-name">
                    <div class="p-name"></div>
                    <div class="p-money">
                      {{item2.ordersPrice}}元
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-state fr">
                <a href="javascript:;" v-if="item2.status == 0">未支付</a>
                <a href="javascript:;" v-if="item2.status == 1">已支付</a>
                
              </div>
            </div>
          </div>
          <div class="order" v-for="(item3,index3) in payList" :key="index3" v-show="showPay">
            <div class="order-title">
              <div class="item-info fl">
                {{item3.createTime}}
                <span>|</span>
                {{username}}
                <span>|</span>
                订单号：{{item3.ordersId}}
                <span>|</span>
                在线支付
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item3.ordersPrice}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix" @click="jumpOrderDetail(item3.ordersId)">
              <div class="good-box fl">
                <div class="good-list">
                  <div class="good-name">
                    <div class="p-name"></div>
                    <div class="p-money">
                      {{item3.ordersPrice}}元
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-state fr">
                <a href="javascript:;" v-if="item3.status == 0">未支付</a>
                <a href="javascript:;" v-if="item3.status == 1">已支付</a>
                
              </div>
            </div>
          </div>
          <div class="order" v-for="(item4,index4) in payList" :key="index4" v-show="showSend">
            <div class="order-title">
              <div class="item-info fl">
                {{item4.createTime}}
                <span>|</span>
                {{username}}
                <span>|</span>
                订单号：{{item4.ordersId}}
                <span>|</span>
                在线支付
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item4.ordersPrice}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix" @click="jumpOrderDetail(item4.ordersId)">
              <div class="good-box fl">
                <div class="good-list">
                  <div class="good-name">
                    <div class="p-name"></div>
                    <div class="p-money">
                      {{item4.ordersPrice}}元
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-state fr">
                <a href="javascript:;" v-if="item4.status == 0">未支付</a>
                <a href="javascript:;" v-if="item4.status == 1">已支付</a>
                
              </div>
            </div>
          </div>
          <div class="order" v-for="(item5,index5) in payList" :key="index5" v-show="showPay">
            <div class="order-title">
              <div class="item-info fl">
                {{item4.createTime}}
                <span>|</span>
                {{username}}
                <span>|</span>
                订单号：{{item4.ordersId}}
                <span>|</span>
                在线支付
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item5.ordersPrice}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix" @click="jumpOrderDetail(item5.ordersId)">
              <div class="good-box fl">
                <div class="good-list">
                  <div class="good-name">
                    <div class="p-name"></div>
                    <div class="p-money">
                      {{item5.ordersPrice}}元
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-state fr">
                <a href="javascript:;" v-if="item3.status == 0">未支付</a>
                <a href="javascript:;" v-if="item3.status == 1">已支付</a>
                
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
      orderList:[],
      noPayList:[],
      payList:[],
      sendList:[],
      endList:[],
      showAllOrder:true, // 展示所有订单
      showNoPay:false, // 未支付
      showPay:false,   // 待发货
      showSend: false, // 已发货
      showEnd:false //已完成
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
          // debugger
          this.orderList = res.data;
          var {noPayList,sendList,endList,payList} = this

          console.log(noPayList)
        //  for(let i=0;i<res.data.length;i++){
        //     res.data(i).status == 0
        //  }
        console.log(res.data)
        res.data.forEach((e,index)=>{


          if(e.status === 0){
            noPayList[index] = e
          }
          else if(e.status === 1){
            payList[index] = e
          }else if(e.status === 2){
            sendList[index] = e
          }else if (e.status === 3)
            endList[index]  =  e 
        });
        this.noPayList = noPayList
        this.sendList = sendList
        this.endList = endList
        // console.log(this.noPayList)
        //   console.log(res.data)
        //   console.log("未支付")
        //   console.log(noPayList)
        //    console.log("未支付")
        //    console.log(this.noPayList)
        //   console.log("已支付")
        }
      })
    },
    jumpOrderDetail(id){
      console.log(id)
    },
    allOrder(){
      this.showAllOrder = !this.showAllOrder
      this.showPay = false
      this.showNoPay = false
      this.showSend= false
      this.showEnd=false
      console.log("全部订单")
    },
    noPayOrder(){
     this.showAllOrder = false
     this.showNoPay = !this.showNoPay 
     this.showPay = false
    this.showSend= false
     this.showEnd=false
     console.log("未支付订单")
    },
     payOrder(){
     this.showAllOrder = false
     this.showPay = !this.showPay 
     this.showNoPay = false
      this.showSend= false
     this.showEnd=false
     console.log("已支付订单")
     },
     sendOrder(){
     this.showAllOrder = false
     this.showPay = false
     this.showNoPay = false
     this.showSend= !this.showSend
     this.showEnd=false
     },
     endOrder(){
     this.showAllOrder = false
     this.showPay = false
     this.showNoPay = false
     this.showSend = false
     this.showEnd = !this.showEnd
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
    .nav-order {
      display:flex;
       justify-content: center;
        align-items: center;
      height:50px;
      margin-bottom: 20px;
       .content-wrapper{
        width:800px;
        height:100%;
        border:1px solid #e4eaee;
         ul{
           display:flex;
           height:30px;

           li{
             flex:1;
            text-align: center;
            line-height: 30px;
            border-right:1px solid #e4eaee;
            &:nth-last-child(1){
              border:0px;
            }
            a {
              font-size: 12px;
              em{
                color:#f40;
                font-size:9px;
                margin-left:5px;
              }
            }
           }
         }
       }
    }
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
            color: #ff6600 
            a {
              display:block;
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
