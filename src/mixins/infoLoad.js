export default {
  created() {
    this.axios.get("/userservice/user/info").then(value => {
      if (value.code === 1) {
        this.$store.commit("setInfo", value.data);
        return;
      }
    });
  }
};
