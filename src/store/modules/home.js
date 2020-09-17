import { REC_ADDRESS, REC_CATEGORYS, REC_SHOPS } from '../mutation-types.js'
import { reqAddress, reqCategorys, reqShops } from '../../api/index.js'

const { v4: uuidv4 } = require('uuid')

const state = {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {},
  categorys: [],
  shops: [],
}
const getters = {}
const mutations = {
  [REC_ADDRESS](state, { address }) {
    state.address = address
  },
  [REC_CATEGORYS](state, { categorys }) {
    state.categorys = categorys
  },

  [REC_SHOPS](state, { shops }) {
    state.shops = shops
  },
}
const actions = {
  async getAddress({ commit, state }) {
    const geohash = state.latitude + ',' + state.longitude
    const { code, data } = await reqAddress(geohash)
    if (!code) {
      commit(REC_ADDRESS, { address: data })
    }
  },
  async getCategorys({ commit }) {
    const { code, data } = await reqCategorys()
    if (!code) {
      commit(REC_CATEGORYS, { categorys: data })
    }
  },
  async getShops({ commit, state }) {
    const { code, data } = await reqShops(state.latitude, state.longitude)
    if (!code) {
      data.forEach((value) => {
        value.id = uuidv4()
      })
      commit(REC_SHOPS, { shops: data })
    }
  },
  async addShops({ commit, state }) {
    let { code, data } = await reqShops(state.latitude, state.longitude)
    if (!code) {
      data = data.slice(0, 10)
      data.forEach((value) => {
        value.id = uuidv4()
      })
      commit(REC_SHOPS, { shops: [...state.shops, ...data] })
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
