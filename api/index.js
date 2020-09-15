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
