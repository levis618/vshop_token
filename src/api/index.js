import ajax from './ajax.js'
const BASE_URL = '/api'

// 密码登录
export const reqLoginPwd = (name, pwd, captcha) =>
  ajax.post(`${BASE_URL}/login_pwd`, { name, pwd, captcha })

// 短信登录
export const reqLoginSms = (phone, code) => ajax.post(`${BASE_URL}/login_sms`, { phone, code })

// 发送短信验证码
export const reqSendCode = (phone) => ajax.get(`${BASE_URL}/sendcode`, { params: { phone } })

// 自动登录
export const reqAutoLogin = () => ajax.get(`${BASE_URL}/auto_login`)

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax.get(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqCategorys = () => ajax.get(`${BASE_URL}/index_category`)
// 3、根据经纬度获取商铺列表
export const reqShops = (latitude, longitude) =>
  ajax.get(`${BASE_URL}/shops`, { params: { latitude, longitude } })

// 获取商家食品列表
export const reqShopGoods = () => ajax.get(`${BASE_URL}/goods`)
export const reqShopRatings = () => ajax.get(`${BASE_URL}/ratings`)
export const reqShopInfo = () => ajax.get(`${BASE_URL}/info`)
