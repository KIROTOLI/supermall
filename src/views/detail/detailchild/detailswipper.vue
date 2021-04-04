<template>
     <Swiper>
        <Swiper-item class="swiper-item" v-for="(item,index) in topimage" :key="index">
            <img :src="item" alt="">
            </Swiper-item> 
         </Swiper> 

</template>

<script>
// import {Swiper,SwiperItem} from 'components/common/swiper'
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  components: {
       Swiper,
       SwiperItem },
name:'datailswopper',
props:{
    topimage:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style>
.swiper-item{
    height: 300px;
    overflow: hidden;
}
</style>