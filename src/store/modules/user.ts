// 创建用户相关的小仓库
// Store 是使用 defineStore() 定义的，并且它需要一个唯一名称，作为第一个参数传递
import { defineStore } from 'pinia'
//引入数据类型
import type { LoginForm, LoginResponse } from '@/api/user/types'
//引入操作本地存储的工具方法
import { GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
//引入接口
import { requLogin, reqUserInfo } from '@/api/user/index'
import { UserState } from './types/type'
import { commonRoutes } from '@/router/routes'
//创建用户小仓库
export const useUserStore = defineStore('user', {
  //小仓库存储数据地方
  state: (): UserState => {
    return {
      // 所有这些属性都将自动推断其类型
      menuRoutes: commonRoutes, //仓库存储生成菜单需要数组(路由)
      username: '',
      avatar: '',
      token: GET_TOKEN(), //用户唯一标识token
    }
  },
  //异步|逻辑的地方
  actions: {
    //用户登录的方法
    async userlogin(data: LoginForm) {
      let result: LoginResponse = await requLogin(data)
      // 因为要根据是否登录成功进行不同的活动，所以需要返回一个值区别是登陆成功还是登陆失败
      if (result.code == 200) {
        //pinia仓库存储一下token
        //由于pinia|vuex存储数据其实利用js对象
        this.token = result.data.token as string //将token存储到仓库中
        return 'ok'
      } else {
        // 抛出错误返回
        return Promise.reject(new Error(result.data.message))
      }
    },
    // 获取用户信息的方法
    async getUserInfo() {
      //获取用户信息进行存储仓库当中[用户头像、名字]
      let userInfo = await reqUserInfo()
      if (userInfo.code == 200) {
        this.username = userInfo.data.checkUser.username
        this.avatar = userInfo.data.checkUser.avatar
        return '成功获取用户信息'
      } else {
        return Promise.reject(new Error('获取用户信息失败'))
      }
    },
    // 退出登录
    async logout() {
      //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
    },
  },
  persist: true, //持久化存储
})
//对外暴露获取小仓库方法
export default useUserStore
