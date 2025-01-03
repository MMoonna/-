//定义用户相关数据的ts类型
//用户登录接口携带参数的ts类型
export interface LoginForm {
  username: string
  password: string
}
//定义全部接口返回数据都拥有ts类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
// 定义用户登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data: string
}

//定义获取用户信息返回数据类型
export interface userInfoReponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
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
