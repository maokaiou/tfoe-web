<template>
    <div class="orderPay">
        <div class="form" v-html="content"></div>
    </div>
</template>
<script>
 export default{
     data(){
         return {
             content:'',
             orderId:0,
            orderAllPrice:0
         }
     },
     mounted(){
         this.getOrderInfor(),
         this.pay()
     },
     methods:{
          getOrderInfor(){
            console.log(this.$route.params.id)
            console.log("你好")
            this.orderId = this.$route.params.id
            this.orderAllPrice = this.$route.params.price
            },
         pay(){
              this.axios.post('/orderservice/orders/pay',{
                    orderId:this.orderId,
                    ordersPrice:this.orderAllPrice,
                    sellerId: '990522'
                }).then((res)=>{
                    console.log(res)
                    this.content = res
                    console.log("我手要")
                    console.log(this.content)
                    setTimeout(()=>{
                        document.forms[0].submit();
                    },1000)    
              // window.location.replace(res)
                })
         }
     }
 }
</script>
