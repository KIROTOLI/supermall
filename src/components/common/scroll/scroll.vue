<template>
  <div class="wapper" ref="wapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import bscroll from 'better-scroll'
export default {
name:'scroll',
props:{
    probeType:{
        type:Number,
        default:0
    },
    pullUpLoad:{
        type:Boolean,
        default:false
    }
},
data(){
    return{
        scroll:null
    }
},
    mounted(){
        // 1.创建bscroll对象
        this.scroll=new bscroll(this.$refs.wapper,{
            observeDOM:true,
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        }),
            // 2.监听滚动的位置
        this.scroll.on('scroll',(position)=>{
            // console.log(12)
            this.$emit('scroll',position)
        }),
        // 3.监听上拉事件
        this.scroll.on('pullingUp',(pullUpLoad)=>{
            // console.log(123)
            this.$emit('pullingUp')
        })
    },
    methods:{
        scrollto(x,y,time=300){
            this.scroll.scrollTo(x,y,time)
        },
        finishpullup(){
            this.scroll.finishPullUp()
        }
    }
}
</script>

<style>

</style>