<template>
  <div class="template-color-5 font-family-02">
    <router-view />
  </div>
</template>
<script>
   export default{

     methods:{
       getUserInfor(){
        //  this.axios.get('/',{}).then((res)=>{  })
        // to d0
       }
     }
   }
</script>

<style lang="scss">
@import "./assets/scss/base.scss";
@import "./assets/scss/mixin.scss";
@import "./assets/scss/button.scss";
@import './assets/scss/modal.scss';
</style>
