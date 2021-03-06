// const Home = () => import(/* webpackChunkName: "Home" */ '../views/Home/Home.vue') // 懒加载

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

import Shop from '../pages/Shop/Shop.vue'
import Goods from '../pages/Shop/Goods/Goods.vue'
import Ratings from '../pages/Shop/Ratings/Ratings.vue'
import Info from '../pages/Shop/Info/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    // props: (route) => ({ id: route.params.id }),
    props: true, // 将所有params参数转换成标签属性传递给子路由组件
    meta: {
      hasFoot: true, // 设置是否显示底部导航
      title: '标题', // 设置标题文字
    },
  },
  {
    name: 'search',
    path: '/search',
    component: Search,
  },
  {
    name: 'order',
    path: '/order',
    component: Order,
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile,
  },
  {
    name: 'shop',
    path: '/shop',
    component: Shop,
    children: [
      {
        name: 'shopGoods',
        path: 'goods',
        component: Goods,
      },
      {
        name: 'shopRatings',
        path: 'ratings',
        component: Ratings,
      },
      {
        name: 'shopInfo',
        path: 'info',
        component: Info,
      },
      {
        path: '/shop',
        redirect: '/shop/goods',
      },
    ],
  },
  {
    // 默认跳转
    path: '*',
    redirect: '/home',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
