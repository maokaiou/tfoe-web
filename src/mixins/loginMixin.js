export default {
  created() {
    this.axios.get("/userservice/user/info").then(value => {
      if (value.code === 1) {
        this.$store.commit("setInfo",value.data)
        // alert(this.$router.currentRoute.path)
        if (this.$router.currentRoute.path === "/login") {
          this.$message({ message: "您已经登录", type: "success" });
          this.$router.push("/index");
          return;
        }
      }
    });
  }
};
