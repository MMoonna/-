// 创建用户相关的小仓库
// Store 是使用 defineStore() 定义的，并且它需要一个唯一名称，作为第一个参数传递
import { defineStore } from 'pinia'
//引入数据类型
import type { LoginForm, LoginResponse } from '@/api/user/types'
//引入接口
import { requLogin } from '@/api/user/index'
//创建用户小仓库
export const useUserStore = defineStore('user', {
  //小仓库存储数据地方
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      userInfo: {
        name: '张三',
        age: 18,
      },
      token: '',
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
  },
  persist: true, //持久化存储
})
//对外暴露获取小仓库方法
export default useUserStore
