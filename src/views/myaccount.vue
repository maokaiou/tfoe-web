<template>
  <div>
    <!-- 轮播图 -->
    <div class="breadcrumb-area">
      <div class="container">
        <div class="breadcrumb-content">
          <h2>Shop Related Pages</h2>
          <ul>
            <li><a href="/">首页</a></li>
            <li class="active">我的账户</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="account-page-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <ul
              class="nav myaccount-tab-trigger"
              id="account-page-tab"
              role="tablist"
            >
              <li class="nav-item">
                <a class="nav-link" href="/cart">购物车</a>
              </li>
              <li class="nav-item" @click="showAddress">
                <a class="nav-link" >地址</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/orderList">我的订单</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="loginOut">登出</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-9" :class="sAddress? 'nav-link link':'nav-link active show'">
            <div class="tab-content myaccount-tab-content">
              <div class="tab-pane fade show active">
                <div class="myaccount-dashboard">
                  <h2>收货地址</h2>
                  <div class="address-wrapper">
                    <div class="address-item">
                      <p></p>
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
export default {
  data(){
    return {
      sAddress:true, // 是否打开地址框
      allAddress:[] // 所有地址
    }
  },
  methods: {
    showAddress(){
      this.sAddress=false
    },
    loginOut() {
      this.axios.get("/userservice/user/logout").then(val => {
        if (val.code === 1) {
          this.$message.success("登出成功");
          this.$router.push("/index")
          return;
        }
        this.$message.warning(val.msg);
        this.$router.push("/login")

      });
    },
    showAllAddress(){
     this.axios.get('/userservice/address/queryAddress').then((res)=>{
       if(res.code == 1){
         this.allAddress = res.data
         console.log(res.data)
       }
     })
   }
  }
};
</script>
<style lang="scss">
  .link{
    display:none;
    .myaccount-dashboard{
      font-size: 18px;
      h2{
        font: size 14px !important;
      }
      .address-wrapper{
        .address-item{
          height:50px;
          line-height: 50px;
        }
      }
    }
  }
</style>
