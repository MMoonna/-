import request from '@/utils/request'
enum API {
  // 一级分类列表
  Category1List = '/admin/product/getCategory1',
}
// 获取一级分类列表
export const reqCategory1List = () => request.get<any, any>(API.Category1List)
