// 仓库大仓库
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' //引入持久化插件
// 创建大仓库
let pinia = createPinia()
pinia.use(piniaPluginPersistedstate) //将插件添加到 pinia 实例上
// 对外暴露，入口文件需要安装仓库，然后引入
export default pinia
