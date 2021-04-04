<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <tab-control 
   :titles="['流行','新款','精选']" class="tab-control"
   @tabclick='tabclick' v-show="isatabfix"></tab-control>
   <scroll 
   class="content" 
   ref="scroll" 
   :probe-type="3" 
   @scroll="contentscroll"
   :pull-up-load='true'
   @pullingUp="contentpullingup">
     <homeswiper :banners='banners'></homeswiper>
   <homerecommend :recommends='recommends'></homerecommend>
   <FeatureView></FeatureView>
   <tab-control 
   :titles="['流行','新款','精选']" class="tab-control"
   @tabclick='tabclick' ref="tabcontrol" ></tab-control>
   <goodslist :goods="goods[truegoods].list"></goodslist>
   </scroll>
   <backtop @click.native='backclick' v-show="isshow"></backtop>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import homeswiper from './homechild/homeswiper'
import homerecommend from './homechild/homerecommend'
import FeatureView from './homechild/FeatureView'

import tabControl from 'components/content/tabControl/tabControl'
import goodslist from 'components/content/goods/goodslist'
import goodslistitem from 'components/content/goods/goodslistitem'
import scroll from 'components/common/scroll/scroll'
import backtop from 'components/content/backtop/backtop'



import {getHomeMultidata,getHomeGoods} from 'network/home.js'


export default {
    name:'home',
    data(){
      return{
        index:'',
        item:'',
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        truegoods:'pop',
        isshow:false,
        isatabfix:false
      }
    },
    components:{
      NavBar,
    homeswiper,
    homerecommend,
    FeatureView,
    tabControl,
    goodslist,
    goodslistitem,
    scroll,
    backtop

 
     
    },
    created(){
      this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')


      
    },
    methods:{
      tabclick(index){
        // console.log(index)
        switch(index){
          case 0:
            this.truegoods='pop'
            break
          case 1:
            this.truegoods='new'
            break
          case 2:
            this.truegoods='sell'

        }
      },
      backclick(){
        // console.log('dsd')
        this.$refs.scroll.scrollto(0,0,200)
      },
      contentscroll(position){
        // console.log(position)
        if(position.y<-1000){
          this.isshow=true
        }else{
          this.isshow=false
        }
      },
      contentpullingup(){
        this.getHomeGoods(this.truegoods)
        this.$refs.scroll.finishpullup()
        this.$refs.scroll.scroll.refresh()
      },



      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          // console.log(res.data)
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
      },
      getHomeGoods(type){
        const page =this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        })
      }
    }
}




</script>

<style scoped>
#home{
  padding-top: 44px;
  /* position: relative; */
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

 .tab-control{
   /* position: relative; */
   /* position: absolute; */

   /* z-index: 9; */
  position: sticky;
  top: 44px;
  background-color: #fff;
  }
.content{
 height: 100vh;
 /* margin-top: 88px; */
  overflow: hidden;

}
</style>