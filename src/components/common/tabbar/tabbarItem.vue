<template>
  <div class="tabbar-item" @click="itemclick">
      <div v-if="!isActive"><slot  name="item-icon"></slot></div>
      <div v-else><slot  name="item-icon-active"></slot></div>
      <div :style="activeStyle">
          <slot  name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name:'tabbarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isActive:false
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods:{
        itemclick(){
            this.$router.replace(this.path)
            
                }
        }
         
}
</script>

<style>
  .tabbar-item{
    flex: 1;
    text-align: center;
  }
.tabbar-item img{
       width: 24px;
       height: 24px;
   }
   .active{
       color: palevioletred;
   }
</style>