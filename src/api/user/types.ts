//登录接口需要携带参数ts类型
export interface LoginForm {
  username: string
  password: string
}
// 因为不用对外暴漏 所以不用加export
interface dataType {
  // 登陆失败返回token
  token?: string
  // 登录失败报错
  message?: string
}
// 登录接口返回的数据类型
export interface LoginResponse {
  code: number
  data: dataType
}
interface useInfo {
  token: string
  username: string
  userId: number
  avatar: string
  roles: string[]
  password: string
  desc: string
  buttons: string[]
  routes: string[]
}
interface user {
  checkUser: useInfo
}
// 定义服务器返回用户信息相关的数据类型
export interface UserInfo {
  code: number
  data: user
}
