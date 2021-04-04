<template>
  <div id="detail">
      <navbar>
          <div slot="left" class="left-detail" @click='backclick'>
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="detail-center">
             <div v-for="(item,index) in titles" :key="index"
             class="detail-center-name"
             :class="{active:index===currentindex}"
             @click="changeindex(index)">{{item}}</div>
          </div>
      </navbar>
  </div>
</template>

<script>
import navbar  from 'components/common/navbar/NavBar'
export default {
name:'detailnavbar',
components:{
    navbar

},
data(){
    return{
        titles:['商品','参数','评论','推荐'],
        currentindex:0
    }
},
methods:{
    changeindex(index){
        this.currentindex=index
    },
    backclick(){
        this.$router.back()
    }
}
}
</script>

<style>
.detail-center{
    display: flex;
}
.detail-center-name{
    flex: 1;
}
.active{
    color: var(--color-high-text);
}
.left-detail img{
    width: 20px;
    margin-top: 12px;
}
</style>