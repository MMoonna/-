import { createApp } from 'vue'
import App from './App.vue'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import globalcomponents from '@/components/index'
// 引入模板的全局样式
import '@/styles/index.scss'
//@ts-ignore
// svg插件需要的配置代码
import 'virtual:svg-icons-register'
// 引入路由
import router from './router'
// 引入pinia
import pinia from './store'
//获取应用实例对象
const app = createApp(App)
//安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})
app.use(globalcomponents)
//注册模板路由
app.use(router)
// 注册pinia
app.use(pinia)
//将应用挂载到挂载点上
app.mount('#app')
