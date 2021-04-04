<template>
  <div class="tabcontrol">
      <div v-for="(item,index) in titles" :key="index"
      class="tab-control-item" :class="{active:index===currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'tabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index;
            this.$emit('tabclick',index)
        }
    }
}
</script>

<style>
.tabcontrol{
    display: flex;
    text-align: center;
    font-size: 15px;
   
}
.tab-control-item{
    flex: 1;
    height: 44px;
    line-height: 44px;
}
.tab-control-item span{
    padding: 5px;
}
.active{
    color: var(--color-high-text);

}
.active span{
    border-bottom: 3px solid var(--color-tint);
}
</style>