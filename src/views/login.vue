<template>
  <div class="login-register_area">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6">
          <form>
            <div class="login-form">
              <h4 class="login-title">登录</h4>
              <div class="row">
                <div class="col-md-12 col-12">
                  <label>账号</label>
                  <input
                    name="username"
                    v-model="username"
                    type="text"
                    placeholder="用户账号"
                  />
                </div>
                <div class="col-12 mb--20">
                  <label>密码</label>
                  <input
                    name="password"
                    v-model="password"
                    type="password"
                    placeholder="密码"
                  />
                </div>
                <div class="col-md-8">
                  <div class="check-box">
                    <input type="checkbox" />
                    <label for="remember_me">记住我</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="forgotton-password_info">
                    <a href="#"> 忘记密码?</a>
                  </div>
                </div>
                <div class="col-md-12">
                </div>
              </div>
            </div>
          </form>
          <button class="login_btn" @click="login">登录</button>
        </div>
      </div>
      <brand-area></brand-area>
    </div>
  </div>
</template>

<script>
import BrandArea from "./../components/BrandArea";
// eslint-disable-next-line no-unused-vars
import loginMixin from "@/mixins/loginMixin";
export default {
  name: "login",
  mixins: [loginMixin],
  data() {
    return {
      password: "",
      username: "",
      isActive: false
    };
  },
  components: {
    BrandArea
  },
  methods: {
    login() {
      let { username, password } = this;
      if (username === "") {
        this.$message.warning("用户账号不能为空");
        return;
      } else if (password === "") {
        this.$message.warning("用户密码不能为空");
        return;
      } else if (!/\d|\S{6}/.test(password)) {
        this.$message.warning("请填写6位数以上的密码");
        return;
      } else {
        this.axios
          .post("/userservice/user/login", {
            username,
            password
          })
          .then(value => {
            console.log(value)
            if (value.code === 1) {
              this.$message.success("登录成功");
              this.$router.push("/index");
              return;
            }
            this.$message.success(value.msg);
          });
      }
      return;
    }
  }
};
</script>

<style lang="scss">
  .row{
   justify-content: center;
   align-items: center;
  }
</style>
