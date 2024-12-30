//路由鉴权:鉴权,项目当中路由能不能被的权限的设置(某一个路由什么条件下可以访问、什么条件下不可以访问)
import router from '@/router/index.ts'
import setting from './setting'
//@ts-ignore
import nprogress from 'nprogress' //引入进度条
//引入进度条样式
import 'nprogress/nprogress.css'
// 去掉进度条加载时的圆圈
nprogress.configure({ showSpinner: false })
import { useUserStore } from '@/store/modules/user'
//全局守卫:项目当中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach(async (to, from, next) => {
  document.title = `${setting.title} - ${to.meta.title}`
  //to:即将要进入的目标路由对象
  //from:从那个路由来
  //next:是一个函数,调用next()表示放行,调用next(false)表示中断当前导航
  const userStore = useUserStore()
  nprogress.start() //开启进度条
  // 如果用户已经登录
  if (userStore.token) {
    if (to.path === '/login') {
      // 如果用户已登录，但访问的是登录页，重定向到首页
      next('/')
    } else {
      if (userStore.username) {
        // 如果用户已经有用户名信息，直接放行
        next()
      } else {
        // 用户信息还没加载，尝试获取用户信息
        try {
          await userStore.getUserInfo() // 获取用户信息
          next() // 用户信息加载成功后放行
        } catch (error) {
          // 如果获取用户信息失败，退出登录并重定向到登录页
          await userStore.logout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})
// 全局后置守卫
router.afterEach((to, from) => {
  nprogress.done() //关闭进度条
})
