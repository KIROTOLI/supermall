<template>
  <div class="goods-list-item" @click='itemclick'>
      <!-- <a :href="goodsitem.clientUrl+goodsitem.iid"> -->
          <img :src="showimg" alt="">
      <div class="goods-item">
          <p>{{goodsitem.title}}</p>
          <span  class="price">{{goodsitem.price}}</span>
          <span  class="collect">⚪{{goodsitem.cfav}}</span>
      </div>
      <!-- </a> -->
  </div>
</template>

<script>
export default {
name:'goodslistitem',
    props:{
        goodsitem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        showimg(){
            return this.goodsitem.image || this.goodsitem.show.img
        }
    },
    methods:{
        itemclick(){
            this.$router.push('/detail/'+this.goodsitem.iid)
        }
    }
}
</script>

<style>
.goods-list-item{
    float: left;
    width: 48%;
    margin-bottom: 10px;
}
.goods-list-item img{
    width: 100%;
    height: 250px;
    border-radius: 5px;

}
.goods-item{
    font-size: 14px;
    /* margin-right: 10PX; */
    text-align: center;
    overflow: hidden;
     text-overflow:ellipsis;/*超出部分文字以...显示*/

     white-space: nowrap;/*不换行*/
   
}

.goods-item span:nth-of-type(1){
    color: red;
    margin-right: 5px;
}

</style>