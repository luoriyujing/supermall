import Vue from 'vue';
import VueRouter from 'vue-router'

const Home=()=> import('../views/home/Home.vue')
const Category=()=> import('../views/category/Category.vue')
const Cart=()=> import('../views/cart/Cart.vue')
const Profile=()=> import('../views/profile/Profile.vue')
//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name:'Home',
        component:Home
    },
    {
        path: '/category',
        name:'Category',
        component: Category
    },
    {
        path: '/cart',
        name:'Cart',
        component: Cart
    },
    {
        path: '/profile',
        name:'Profile',
        component: Profile
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

//3.导出
export default router
