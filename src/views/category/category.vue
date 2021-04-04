<template>
  <div class="out">
    <ul class="inner">
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
    <li>dsd</li>
  </ul>
  </div>
</template>

<script>
import bscroll from 'better-scroll'
export default {
name:'category',
// data(){
//   return{
//     scroll:null
//   }
// },
mounted(){
  this.scroll=new bscroll('.out',{
    probeType:3,
    pullUpLoad:true
  }),
  this.scroll.on('scroll',(position)=>{
    console.log(position)
  })
  this.scroll.on('pullingUp',()=>{
    console.log('上拉加载更多')
  })

}
}
</script>

<style>
.out{
  height: 150px;
  background-color: #eee;
  overflow: hidden;
}
</style>