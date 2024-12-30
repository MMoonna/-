<template>
  <!-- 路由组件出口的位置 -->
  <!-- 点击相应的组件，会把组件注入进来，通过全局组件component进行渲染 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout一级路由组件的子路由 -->
      <component :is="Component" v-if="!refesh" key="main" />
    </transition>
  </router-view>
</template>
<script lang="ts" setup>
import { ref, watch, nextTick } from 'vue'
import { useSettingStore } from '@/store/modules/setting'
let useSetting = useSettingStore()
let refesh = ref(false)
// 第一个参数是你要监听的值，第二个参数是回调函数，当值发生变化的时候，回调函数会执行
watch(
  () => useSetting.refesh,
  () => {
    refesh.value = true
    nextTick(() => {
      refesh.value = false
    })
  },
)
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 0.3s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
