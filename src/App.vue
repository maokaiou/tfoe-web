<template>
  <div class="template-color-5 font-family-02">
    <router-view />
  </div>
</template>
<script>
   export default{
      mounted(){
        this.getUserInfor()
      },
     methods:{
       getUserInfor(){
         this.axios.get('/userservice/user/info').then((res)=>{ 
           if(res.code === 1){
              this.$store.dispatch('setUserName',res.data.userName);
           }    
          })
        // to d0
       }
     }
   }
</script>

<style lang="scss">
@import "./assets/scss/base.scss";
@import "./assets/scss/mixin.scss";
@import "./assets/scss/button.scss";
// @import './assets/scss/modal.scss';
</style>
