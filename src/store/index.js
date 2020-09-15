import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user.js'
import home from './modules/home.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    home,
  },
})
