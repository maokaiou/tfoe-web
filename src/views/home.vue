<template>
  <div class="main-wrapper wrapper-boxed_layout">
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
  }
};
</script>
