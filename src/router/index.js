import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const home=()=>import('../views/home/home')
const Cart=()=>import('../views/cart/cart')
const Category=()=>import('../views/category/category')
const Profile=()=>import('../views/profile/profile')
const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',

        component:home
    },
    {
        path:'/cart',


        component:Cart
    },
    {
        path:'/category',


        component:Category
    },{
        path:'/profile',

        component:Profile
    }
]

const router =new VueRouter({
routes,
mode:'history'
})

export default router