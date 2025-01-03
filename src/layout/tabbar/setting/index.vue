<template>
  <div>
    <el-button size="small" icon="Refresh" circle @click="Refsh"></el-button>
    <el-button
      size="small"
      icon="FullScreen"
      circle
      @click="fullScreen"
    ></el-button>
    <img
      :src="userStore.avatar"
      style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%"
    />
    <!-- 下拉菜单 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ userStore.username }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'
import { useSettingStore } from '@/store/modules/setting'
import { useRouter, useRoute } from 'vue-router'
//获取路由器对象
let $router = useRouter()
let $route = useRoute()
const userStore = useUserStore()
const useSetting = useSettingStore()
//刷新按钮点击回调
const Refsh = () => {
  useSetting.refesh = !useSetting.refesh
}
//全屏按钮点击的回调
const fullScreen = () => {
  let full = document.fullscreenElement // 检查是否已经处于全屏模式
  if (!full) {
    // 如果没有处于全屏模式
    document.documentElement.requestFullscreen() // 请求进入全屏模式
  } else {
    // 如果已经处于全屏模式
    document.exitFullscreen() // 退出全屏模式
  }
}
//退出登录
const logout = async () => {
  await userStore.logout()
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>

<style scoped></style>
