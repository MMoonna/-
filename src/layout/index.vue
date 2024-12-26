<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <!-- <Logo></Logo> -->
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件-->
        <el-menu background-color="#001529" text-color="white">
          <!--根据路由动态生成菜单-->
          <Menu :menuList="useStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <!-- <div class="layout_tabbar"> -->
    <!-- layout组件的顶部导航tabbar -->
    <!-- <Tabbar></Tabbar> -->
    <!-- </div> -->
    <!-- 内容展示区域 -->
    <div class="layout_main">
      <!-- <Main></Main> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
//引入菜单组件
import Menu from './menu/index.vue'
const useStore = useUserStore()
</script>
<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
  }
}
</style>
