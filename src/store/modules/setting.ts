import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', {
  state: () => {
    return {
      fold: false, //用户控制菜单折叠还是收起控制
      refesh: false, //仓库这个属性用于控制刷新效果
    }
  },
})
