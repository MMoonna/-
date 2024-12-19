//进行axios二次封装：使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
//创建axios实例
//第一步：利用axios对象的create方法，去创建axios实例（其他的配置：基础路径、超时的时间)
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径上会携带/api
  timeout: 5000, //超时的时间的设置
})
// 第二步：request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  //config配置对象，headers属性请求头，经常给服务器端携带公共参数
  //返回配置对象
  return config
})
//响应拦截器
request.interceptors.response.use(
  // 响应成功
  (response) => {
    return response.data
  },
  (error) => {
    //失败回调：处理http网络错误的
    //定义一个变量：存储网络错误信息
    let msg = ''
    //http状态码
    let status = error.response.status
    switch (status) {
      case 401:
        msg = 'token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '无网络'
    }
    ElMessage({
      type: 'error',
      message: msg,
    })
    return Promise.reject(error)
  },
)
// 对外暴露request实例
export default request
