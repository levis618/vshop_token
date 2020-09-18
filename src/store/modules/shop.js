import Vue from 'vue'
import {
  REC_SHOP_GOODS,
  REC_SHOP_RATINGS,
  REC_SHOP_INFO,
  IMCREMENT_CART_FOOD,
  DECREMENT_CART_FOOD,
  CLEAR_CART_FOOD,
} from '../mutation-types.js'
import { reqShopGoods, reqShopRatings, reqShopInfo } from '../../api/index.js'

const state = {
  goods: [],
  ratings: [],
  info: {},
  cartFoods: [],
}

const getters = {}

const mutations = {
  [REC_SHOP_GOODS](state, { goods }) {
    state.goods = goods
  },
  [REC_SHOP_RATINGS](state, { ratings }) {
    state.ratings = ratings
  },
  [REC_SHOP_INFO](state, { info }) {
    state.info = info
  },
  [IMCREMENT_CART_FOOD](state, { food }) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_CART_FOOD](state, { food }) {
    if (food.count > 0) {
      food.count--
      if (food.count === 0) {
        const index = state.cartFoods.findIndex((item) => item === food)
        state.cartFoods.splice(index, 1)
      }
    }
  },
  [CLEAR_CART_FOOD](state) {
    state.cartFoods.forEach((food) => {
      food.count = 0
    })
    state.cartFoods = []
  },
}

const actions = {
  async getShopGoods({ commit }) {
    const { code, data } = await reqShopGoods()
    code || commit(REC_SHOP_GOODS, { goods: data })
  },
  async getShopRatings({ commit }) {
    const { code, data } = await reqShopRatings()
    code || commit(REC_SHOP_RATINGS, { ratings: data })
  },
  async getShopInfo({ commit }) {
    const { code, data } = await reqShopInfo()
    code || commit(REC_SHOP_INFO, { info: data })
  },
  updateCartFood({ commit }, { isAdd, food }) {
    if (isAdd) {
      commit(IMCREMENT_CART_FOOD, { food })
    } else {
      commit(DECREMENT_CART_FOOD, { food })
    }
  },
  clearCartFood({ commit }) {
    commit(CLEAR_CART_FOOD)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
