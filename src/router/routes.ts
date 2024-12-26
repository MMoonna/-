// 对外暴露路由配置
export const commonRoutes = [
  {
    // 登录
    path: '/login',
    name: 'login', //命名路由，为了后面做权限使用
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录', //菜单标题
      hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: 'Promotion', //菜单文字左侧的图标,支持element-plus全部图标
    },
  },
  {
    //登录成功以后展示数据的路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: 'hh',
      hidden: false,
      icon: '',
    },
    // redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/home2',
        component: () => import('@/views/home/index3.vue'),
        meta: {
          title: '首页2',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/home3',
        component: () => import('@/views/home/index1.vue'),
        meta: {
          title: '首页3',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      {
        path: '/home4',
        component: () => import('@/views/home/index2.vue'),
        meta: {
          title: '首页4',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: false,
      icon: 'DocumentDelete',
    },
  },
]
//任意路由
export const anyRoute = {
  //任意路由
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  name: 'Any',
  meta: {
    title: '任意路由',
    hidden: true,
    icon: 'DataLine',
  },
}
