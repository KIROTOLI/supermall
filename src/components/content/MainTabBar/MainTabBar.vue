<template>
      <tabBar>
      <tabbarItem path='/home' activeColor='blue'>
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
       
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbarItem>
      <tabbar-item path='/category' activeColor='orange'>
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">

        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path='/cart' activeColor='red'>
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">

        <div slot="item-text">购物车</div>
      </tabbar-item>
      
      <tabbar-item path='/profile' activeColor='red'>
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">

        <div slot="item-text">我的</div>
      </tabbar-item>
      
      
    </taBbar>
</template>

<script>
import tabBar from 'components/common/tabbar/tabbar'

import tabbarItem from 'components/common/tabbar/tabbarItem'

export default {
    name:'MainTabBar',
    components:{
        tabBar,
        tabbarItem
    }
}
</script>

<style>

</style>