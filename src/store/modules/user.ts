// 创建用户相关的小仓库
// Store 是使用 defineStore() 定义的，并且它需要一个唯一名称，作为第一个参数传递
import { defineStore } from 'pinia'
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
    }
  },
  //异步|逻辑的地方
  actions: {
    // 修改用户信息
    changeUserInfo() {
      this.userInfo.name = '李四'
    },
  },
})
//对外暴露获取小仓库方法
export default useUserStore
