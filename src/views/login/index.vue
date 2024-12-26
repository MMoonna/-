<template>
  <div class="login-container">
    <el-row>
      <!-- xs代表屏幕宽度小于764的时候显示的占比 -->
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          ref="loginForms"
          :model="loginForm"
          :rules="loginRules"
          label-width="80px"
          class="login_form"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="请输入用户名"
              clearable
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              clearable
              show-password
              :prefix-icon="Lock"
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
//引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
// 返回路由器实例
import { useRouter } from 'vue-router'
import { getTime } from '@/utils/time'

//收集账号与密码的数据
let loginForm = reactive({ username: 'admin', password: '111111' })
let loading = ref(false)
let userStore = useUserStore()
let $router = useRouter()
let loginForms = ref()
const login = async () => {
  loading.value = true
  try {
    await userStore.userlogin(loginForm) //登录成功
    // 编程式导航跳转到展示数据首页
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登陆成功',
      title: getTime() + '好！',
    })
  } catch (error: any) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: error.message,
    })
  }
}
const validatorUserName = (rule: any, value: any, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少5位'))
  }
}
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少6位'))
  }
}
//定义表单校验需要配置对象
const loginRules = {
  //规则对象属性:
  //required,代表这个字段务必要校验的
  //min:文本长度至少多少位
  //max:文本长度最多多少位
  //message:错误的提示信息
  //trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则
  username: [{ trigger: 'change', validator: validatorUserName }],
  password: [{ trigger: 'change', validator: validatorPassword }],
}
</script>
<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('/src/assets/images/background.jpg') no-repeat;
  background-size: cover;
}
.login_form {
  position: relative;
  background: rgba(37, 43, 55, 0.4);
  width: 80%;
  top: 30vh;
  padding: 40px;
  h1 {
    color: #fffff0;
    font-size: 40px;
  }
  h2 {
    font-size: 20px;
    color: #fffff0;
    margin: 20px 0px;
  }
  .login_btn {
    width: 100%;
  }
}
</style>
