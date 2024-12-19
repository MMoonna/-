// 对外暴露路由配置
export const commonRoutes = [
  {
    // 登录
    path: '/login',
    name: 'login', //命名路由，为了后面做权限使用
    component: () => import('@/views/login/index.vue'),
  },
  {
    // 登录成功以后展示数据的路由
    path: '/', //代表根路径，通常为首页或登录成功后的展示页面
    component: () => import('@/views/home/index.vue'),
    name: 'layout',
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    // 任意路由，当没有匹配到路由时，跳转到404页面
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
