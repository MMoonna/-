//通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import { commonRoutes } from './routes'
// 创建路由器
let router = createRouter({
  // 路由模式hash
  history: createWebHashHistory(),
  routes: commonRoutes,
  //   滚动行为
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
// 导出路由器 !!别忘了！！
export default router
