//统一管理项目中用户相关的接口
import request from '@/utils/request'
import type {
  LoginForm,
  loginResponseData,
  userInfoReponseData,
} from './types.ts'
//统一管理接口
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}
//暴露请求函数
//登录接口方法
// axios的类型文件里面，post方法接收的泛型第一个参数是any第二个参数才是返回值的类型，所以这里用一个any占位
export const requLogin = (data: LoginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
//获取用户信息接口方法
export const reqUserInfo = () =>
  request.get<any, userInfoReponseData>(API.USERINFO_URL)
//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
