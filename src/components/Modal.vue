<template>
   <div class="modal" v-show="showModal">
     <!-- 覆盖层 -->
     <div class="mask"></div>
      <!-- 会话弹框 -->
     <div class="modal-dialog">
       <div class="modal-header">
         <span>你好</span>
         <a href="javascript:;"><i></i></a>
       </div>
       <div class="modal-body">
         <slot name="body"></slot>
       </div>
       <div class="modal-footer">
         <a href="javascript:;">确认</a>
         <a href="javascript:;">取消</a>
       </div>
     </div>
   </div>
</template>
 <script>
 export default {
   name:"modal",
   props:{
    //  弹框标题
     title:String,
     // 弹框类型 小small 中middle  大big 表单form
     modalType:{
       type:String,
       default:'form'
     },
    // 按钮类型 确认：1 取消：2  确认取消：3
    btnType:String,
    sureText:{
      type:String,
      default: '确认'
    },
    sacleText:{
      type:String,
      default: '取消'
    },
    showModal:{
      type:Boolean
    }
   }
 }
 </script>
 <style lang="scss">
 
 </style>