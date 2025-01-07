import type { RouteRecordRaw } from 'vue-router'
import { CategoryListData, AttrListData } from '@/api/product/attr/type'
export interface UserState {
  menuRoutes: RouteRecordRaw[]
  username: string
  avatar: string
  token: string | null
}
export interface CategoryState {
  categoryList1: CategoryListData[] // 分类列表
  cateid1: string | number
  cateid2: string | number
  cateid3: string | number
  categoryList2: CategoryListData[] // 分类列表
  categoryList3: CategoryListData[] // 分类列表
  tabledata: AttrListData[]
}
