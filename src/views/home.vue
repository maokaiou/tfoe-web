<template>
  <div class="main-wrapper wrapper-boxed_layout">
    <div class="loading" id="loading">
            <div class="text-center middle">
                <span class="loader">
            <span class="loader-inner"></span>
                </span>
            </div>
      </div>
    <main-header></main-header>
    <router-view/>
    <footer-area></footer-area>
  </div>
</template>
<script>
import MainHeader from "./../components/MainHeader";
import FooterArea from "./../components/FooterArea";
export default {
  components: {
    MainHeader,
    FooterArea
  },
  methods:{
    stopLoading(){
      setTimeout(function(){
        document.getElementById("loading").style.display="none";}
        ,1000);
    }
  },
  mounted(){
    this.stopLoading()
  }
};
</script>
<style lang="scss">
.loading{
    // display:none
}
</style>
