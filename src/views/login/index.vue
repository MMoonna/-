<template>
  <div class="login-container">
    <el-row>
      <!-- xs代表屏幕宽度小于764的时候显示的占比 -->
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          ref="loginForms"
          :model="loginForm"
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
//引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
//收集账号与密码的数据
let loginForm = reactive({ username: 'admin', password: '111111' })
let loading = ref(false)
let userStore = useUserStore()
const login = () => {
  loading.value = true
  userStore
    .userlogin(loginForm)
    .then(() => {
      loading.value = false
    })
    .catch(() => {
      loading.value = false
    })
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
