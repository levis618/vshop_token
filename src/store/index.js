import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user.js'
import home from './modules/home.js'
import shop from './modules/shop.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    home,
    shop,
  },
})
