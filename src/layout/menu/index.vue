<template>
  <template v-for="item in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item :index="item.path" v-if="!item.meta.hidden" @click="goto">
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        :index="item.children[0].path"
        v-if="!item.children[0].meta.hidden"
        @click="goto"
      >
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
      </el-menu-item>
    </template>
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 1"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
//获取路由器对象
const $router = useRouter()
//获取父组件传递过来的全部路由数组
defineProps(['menuList'])
const goto = (e: any) => {
  $router.push(e.index)
}
</script>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>
<style scoped></style>
