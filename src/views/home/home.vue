<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
   <homeswiper :banners='banners'></homeswiper>
   <homerecommend :recommends='recommends'></homerecommend>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import homeswiper from './homechild/homeswiper'
import homerecommend from './homechild/homerecommend'


import {getHomeMultidata} from 'network/home.js'
import Homerecommend from './homechild/homerecommend.vue'

export default {
    name:'home',
    data(){
      return{
        index:'',
        item:'',
        banners:[],
        recommends:[]
      }
    },
    components:{
      NavBar,
    homeswiper,
    homerecommend
      
     
    },
    created(){
      getHomeMultidata().then(res=>{
        // console.log(res)
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
    }
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>