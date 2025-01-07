//分类相关的数据ts类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
// 一级分类列表数据类型
export interface CategoryListData {
  id: number | string //因为在仓库中定义的是cateid: '',所以这里用number | string
  name: string
  category1Id?: number
  category2Id?: number
}
export interface CategoryResponseData extends ResponseData {
  data: CategoryListData[]
}
// 表格数据类型
export interface AttrListData {
  id: number
  attrName: string
  categoryId: number
  categoryLevel: number
  attrValueList: attlist
}
export type attlist = AttrValueListData[]
export interface AttrValueListData {
  id: number
  valueName: string
  attrId: number
}
export interface AttrListResponseData extends ResponseData {
  data: AttrListData[]
}
