import request from '@/utils/request'
import { CategoryResponseData, AttrListResponseData } from './type'
enum API {
  // 一级分类列表
  Category1List = '/admin/product/getCategory1',
  // 二级分类列表
  Category2List = '/admin/product/getCategory2/',
  // 三级分类列表
  Category3List = '/admin/product/getCategory3/',
  // 获取表格数据
  AttrList = '/admin/product/attrInfoList/',
}
// 获取一级分类列表
export const reqCategory1List = () =>
  request.get<any, CategoryResponseData>(API.Category1List)
// 获取二级分类列表
export const reqCategory2List = (cate1id: number | string) =>
  request.get<any, CategoryResponseData>(API.Category2List + cate1id)
// 获取三级分类列表
export const reqCategory3List = (cate2id: number | string) =>
  request.get<any, CategoryResponseData>(API.Category3List + cate2id)
// 获取表格数据
export const reqAttrList = (
  cate1id: number | string,
  cate2id: number | string,
  cate3id: number | string,
) =>
  request.get<any, AttrListResponseData>(
    API.AttrList + `${cate1id}/${cate2id}/${cate3id}`,
  )
