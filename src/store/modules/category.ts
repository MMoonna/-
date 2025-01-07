import { defineStore } from 'pinia'
import {
  reqCategory1List,
  reqCategory2List,
  reqCategory3List,
  reqAttrList,
} from '@/api/product/attr/index'
import type {
  CategoryResponseData,
  AttrListResponseData,
} from '@/api/product/attr/type'
import type { CategoryState } from './types/type'
// 商品分类全局组件的小仓库
export const useCategoryStore = defineStore('category', {
  state: (): CategoryState => {
    return {
      // 商品分类列表
      categoryList1: [],
      cateid1: '',
      categoryList2: [],
      categoryList3: [],
      cateid2: '',
      cateid3: '',
      tabledata: [],
    }
  },
  actions: {
    // 获取商品分类列表
    async getCategoryList1() {
      const res: CategoryResponseData = await reqCategory1List()
      if (res.code === 200) {
        this.categoryList1 = res.data
      }
    },
    async getCategoryList2() {
      console.log(this.cateid1)
      const res: CategoryResponseData = await reqCategory2List(this.cateid1)
      if (res.code === 200) {
        this.categoryList2 = res.data
      }
    },
    async getCategoryList3() {
      const res: CategoryResponseData = await reqCategory3List(this.cateid2)
      if (res.code === 200) {
        this.categoryList3 = res.data
      }
    },
    async reqAttrList() {
      const data: AttrListResponseData = await reqAttrList(
        this.cateid1,
        this.cateid2,
        this.cateid3,
      )
      this.tabledata = data.data
    },
  },
})

export default useCategoryStore
