import { defineStore } from 'pinia'
import { reqCategory1List } from '@/api/product/attr/index'
import type { CategoryResponseData } from '@/api/product/attr/type'
// 商品分类全局组件的小仓库
export const useCategoryStore = defineStore('category', {
  state: () => {
    return {
      // 商品分类列表
      categoryList: [],
      cateid: '',
    }
  },
  actions: {
    // 获取商品分类列表
    async getCategoryList() {
      const res: CategoryResponseData = await reqCategory1List()
      console.log(res, '商品分类列表')
    },
  },
})

export default useCategoryStore
