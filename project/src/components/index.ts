//引入项目中全部的全局组件
import sgvIcon from '@/components/svgIcon/index.vue'
import Pagination from '@/components/Pagination/index.vue'
//全局对象
const globalcomponents: any = { sgvIcon, Pagination }
//对外暴露插件对象
export default {
  //务必叫做install方法
  install(app: any) {
    //注册项目全部的全局组件
    Object.keys(globalcomponents).forEach((key) => {
      //注册为全局组件
      app.component(key, globalcomponents[key])
    })
  },
}
