<template>
  <div class="register">
    <div class="col-sm-12 col-md-12 col-lg-6 col-xs-12 si">
      <form action="#">
        <div class="login-form">
          <h4 class="login-title">注册</h4>
          <div class="row">
            <div class="col-md-6 col-12 mb--20">
              <label>名字</label>
              <input type="text" placeholder="名字" v-model="username" />
            </div>
            <div class="col-md-12">
              <label>电子邮件地址*</label>
              <input
                type="email"
                placeholder="电子邮件地址"
                style="float: left"
                v-model="email"
              />
              <input
                type="button"
                class="btn btn-danger send-code-btn"
                value="发送验证码"
                @click="getCheck"
              />
            </div>
            <div class="col-md-12">
              <label>验证码</label>
              <input
                type="text"
                placeholder="你收到的验证码"
                v-model="verifCode"
              />
            </div>

            <div class="col-md-6">
              <label>密码</label>
              <input type="password" placeholder="密码" v-model="password" />
            </div>
            <div class="col-md-6">
              <label>确认密码</label>
              <input type="password" placeholder="确认密码" />
            </div>
            <div class="col-12">
              <button class="register_btn" @click="register">注册</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <brand-area></brand-area>
  </div>
</template>
<script>
import BrandArea from "./../components/BrandArea";
import loginMixin from "@/mixins/loginMixin";
export default {
  mixins: [loginMixin],
  data() {
    return {
      verifCode: " ",
      email: " ",
      password: "",
      username: ""
    };
  },
  components: {
    BrandArea
  },
  methods: {
    register() {
      if (this.username == "") {
        this.$message.warning("请填写用户名");
        return;
      } else if (this.password == "") {
        this.$message.warning("请填写密码");
        return;
      } else if (!/\d{8}/.test(this.password)) {
        this.$message.warning("请填写8位数以上的密码");
        return;
      } else {
        this.axios
          .post("/userservice/user/register", {
            email: this.email,
            password: this.password,
            username: this.username,
            verifCode: this.verifCode
          })
          .then(() => {
            this.$router.push("/login");
            this.$message.success("注册成功, 正在为你跳转登录页面");
          });
      }
    },
    getCheck() {
      this.axios
        .get("/userservice/user/getCheckCode", {
          params: {
            email: this.email
          }
        })
        .then(value => {
          console.log(value);
          if (value.code === 1) {
            this.$message.success(value.msg);
          }
          if (value.code === 0) {
            this.$message.warning(value.msg);
          }
        })
        .catch(() => {
          this.$message.warning("验证发发送失败");
        });
    }
  }
};
</script>
<style lang="scss">
.register {
  margin-top: 100px;
  text-align: center;
  .si {
    display:inline-block;
    margin-bottom: 80px;
    width:700px;
    height:600px;
  }
}
.send-code-btn {
  color: white;
  background: #ff4a4a !important;
}
</style>
