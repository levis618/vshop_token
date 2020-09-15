import { REC_ADDRESS } from '../mutation-types.js'
import { reqAddress } from '../../api/index.js'

const state = {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {},
}
const getters = {}
const mutations = {
  [REC_ADDRESS](state, { address }) {
    state.address = address
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
}

export default {
  state,
  getters,
  mutations,
  actions,
}
