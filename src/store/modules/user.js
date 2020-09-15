import { REC_USERINFO, REC_USERTOKEN, LOGINOUT } from '../mutation-types.js'
import { reqAutoLogin } from '../../api'

const state = {
  info: {},
  token: localStorage.getItem('token_key'),
}
const getters = {}
const mutations = {
  [REC_USERINFO](state, { info }) {
    state.info = info
  },
  [REC_USERTOKEN](state, { token }) {
    state.token = token
  },
  [LOGINOUT](state) {
    state.info = {}
    state.token = ''
  },
}
const actions = {
  // 登录
  Login({ commit }, userinfo) {
    const { token, ...info } = userinfo
    localStorage.setItem('token_key', token)
    commit(REC_USERINFO, { info })
    commit(REC_USERTOKEN, { token })
  },
  // 自动登录
  async autoLogin({ commit, state }) {
    if (!state.token || state.info._id) return
    const { code, data, msg } = await reqAutoLogin()
    if (!code) {
      commit(REC_USERINFO, { info: data })
    }
  },
  // 退出登录
  loginout({ commit }) {
    localStorage.removeItem('token_key')
    commit(LOGINOUT)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
