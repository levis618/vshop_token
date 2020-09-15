// const Home = () => import(/* webpackChunkName: "Home" */ '../views/Home/Home.vue') // 懒加载

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import routes from './routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const paths = ['/home', '/shop/goods', '/shop/ratings', '/shop/info']
  const path = to.path
  const hasToken = !!store.state.user.token
  if (paths.indexOf(path) !== -1 && !hasToken) {
    router.replace('/login')
  } else {
    next()
  }
})

export default router
