<template>
 <div id="detail-to">
      <detailnavbar class="detail-bar"></detailnavbar>

      <bscroll class="detail-out">
     <detailswipper :topimage='topimage'></detailswipper>   
    
      <detail-base-info :goods='goods'></detail-base-info>    
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info :detailInfo='detailInfo'></detail-goods-info>
      <detail-param-info :paramInfo='paramsInfo'></detail-param-info>
      <detail-comment-info :commentInfo='commentInfo'></detail-comment-info>
      <goodslist  :goods='recommend'></goodslist>
      </bscroll>
 </div>
  
</template>

<script>
import detailnavbar from './detailchild/detailnavbar'
import detailswipper from './detailchild/detailswipper'
import DetailBaseInfo from './detailchild/DetailBaseInfo'
import DetailShopInfo from './detailchild/DetailShopInfo'
import DetailGoodsInfo from './detailchild/DetailGoodsInfo'
import DetailParamInfo from './detailchild/DetailParamInfo'
import DetailCommentInfo from './detailchild/DetailCommentInfo'
import goodslist from 'components/content/goods/goodslist'

import bscroll from 'components/common/scroll/scroll'

import {getDetail,GoodsInfo,Shop,GoodsParam,getRecommend} from 'network/detail'






export default {
name:'detail',
data(){
    return{
        iid:null,
        topimage:[],
        GoodsInfo:null,
        goods:{},
        shop:{},
        detailInfo:{},
        paramsInfo:{},
        commentInfo:{},
        recommend:[]
    }
},
components:{
    detailnavbar,
    detailswipper,
    DetailBaseInfo,
    DetailShopInfo,
    bscroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    goodslist




},

created(){
//    1.保存传入的iid
    this.iid=this.$route.params.iid

    // 2.根据iid进行请求
    getDetail(this.iid).then(res=>{
        // console.log(res.result)
    //   请求轮播图数据
        this.topimage=res.result.itemInfo.topImages
        // console.log(this.topimage)
        // 获取商品信息
        this.goods=new GoodsInfo(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
        // console.log(this.goods)
        //获取店铺信息
        this.shop=new Shop(res.result.shopInfo)
        //获取详情信息
        this.detailInfo=res.result.detailInfo
    //获取参数信息
        this.paramsInfo=new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
        //获取评论信息
        this.commentInfo=res.result.rate.list[0]
    })
    // 3.请求推荐数据
    getRecommend().then(res=>{
        console.log(res.data.list)
        this.recommend=res.data.list
    })

}
}
</script>

<style>
#detail-to{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
    
  
}
.detail-out{
    height: 90vh;
    /* height: 90%; */
}
.detail-bar{
    position: relative;
    z-index: 10;
    background-color: #fff;
}

</style>