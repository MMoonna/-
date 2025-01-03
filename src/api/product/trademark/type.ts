export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
//已有的品牌的ts数据类型
export interface TradeMark {
  id?: number
  tmName: string
  logoUrl: string
}
export type Records = TradeMark[] //Records为TradeMark 类型的数组 因为都是由一个一个的TradeMark组成
export interface TradeMarkResponseData extends ResponseData {
  data: {
    records: Records
    total: number
    size: number
    current: number
    searchCount: boolean
    pages: number
  }
}
