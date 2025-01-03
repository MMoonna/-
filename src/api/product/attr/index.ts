import request from '@/utils/request'
import { CategoryResponseData } from './type'
enum API {
  // 一级分类列表
  Category1List = '/admin/product/getCategory1',
}
// 获取一级分类列表
export const reqCategory1List = () =>
  request.get<any, CategoryResponseData>(API.Category1List)
