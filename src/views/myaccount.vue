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
                <a class="nav-link">仪表盘</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/orderConfirm">订单</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" >地址es</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">账户明细</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="loginOut">登出</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-9">
            <div class="tab-content myaccount-tab-content">
              <div class="tab-pane fade show active">
                <div class="myaccount-dashboard">
                  <p>
                    Hello <b>HasTech</b> (not HasTech?
                    <a href="javascript:;">Sign out</a>)
                  </p>
                  <p>
                    From your account dashboard you can view your recent orders,
                    manage your shipping and billing addresses and
                    <a href="javascript:void(0)"
                      >edit your password and account details</a
                    >.
                  </p>
                </div>
              </div>
              <div class="tab-pane fade">
                <div class="myaccount-orders">
                  <h4 class="small-title">我的订单</h4>
                  <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                      <tbody>
                        <tr>
                          <th>订单</th>
                          <th>日期</th>
                          <th>状态</th>
                          <th>总计</th>
                          <th></th>
                        </tr>
                        <tr>
                          <td>
                            <a
                              class="account-order-id"
                              href="javascript:void(0)"
                              >#5364</a
                            >
                          </td>
                          <td>Mar 27, 2019</td>
                          <td>On Hold</td>
                          <td>£162.00 for 2 items</td>
                          <td>
                            <a
                              href="javascript:void(0)"
                              class="quicky-btn-2 quicky-btn_sm"
                              ><span>查看</span></a
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              class="account-order-id"
                              href="javascript:void(0)"
                              >#5356</a
                            >
                          </td>
                          <td>Mar 27, 2019</td>
                          <td>On Hold</td>
                          <td>£162.00 for 2 items</td>
                          <td>
                            <a
                              href="javascript:void(0)"
                              class="quicky-btn-2 quicky-btn_sm"
                              ><span>查看</span></a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade">
                <div class="myaccount-address">
                  <p>默认情况下，以下地址将在结帐页面上使用。</p>
                  <div class="row">
                    <div class="col">
                      <h4 class="small-title">帐单地址</h4>
                      <address>
                        1234 天堂压力，比佛利山庄，老约克，美国洛美
                      </address>
                    </div>
                    <div class="col">
                      <h4 class="small-title">送货地址</h4>
                      <address>
                        1234 天堂压力，比佛利山庄，老约克，美国洛美
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade">
                <div class="myaccount-details">
                  <form action="#" class="quicky-form">
                    <div class="quicky-form-inner">
                      <div class="single-input single-input-half">
                        <label for="account-details-firstname">名字*</label>
                        <input type="text" id="account-details-firstname" />
                      </div>
                      <div class="single-input single-input-half">
                        <label for="account-details-lastname">姓*</label>
                        <input type="text" id="account-details-lastname" />
                      </div>
                      <div class="single-input">
                        <label for="account-details-email">电子邮件*</label>
                        <input type="email" id="account-details-email" />
                      </div>
                      <div class="single-input">
                        <label for="account-details-oldpass"
                          >当前密码（保留空白以保持不变）</label
                        >
                        <input type="password" id="account-details-oldpass" />
                      </div>
                      <div class="single-input">
                        <label for="account-details-newpass"
                          >新密码（保留空白以保持不变）</label
                        >
                        <input type="password" id="account-details-newpass" />
                      </div>
                      <div class="single-input">
                        <label for="account-details-confpass">确认新密码</label>
                        <input type="password" id="account-details-confpass" />
                      </div>
                      <div class="single-input">
                        <button class="quicky-btn-2" type="submit">
                          <span>保存变化</span>
                        </button>
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
  </div>
</template>
<script>
export default {
  methods: {
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
    }
  }
};
</script>
