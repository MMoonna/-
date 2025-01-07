<template>
  <div>
    <el-card>
      <el-form :inline="true">
        <el-form-item label="一级分类">
          <el-select
            placeholder="请选择一级分类"
            style="width: 200px"
            @change="seletval"
            v-model="categoryStore.cateid1"
            clearable
          >
            <el-option
              v-for="item in categoryStore.categoryList1"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类">
          <el-select
            placeholder="请选择二级分类"
            style="width: 200px"
            @change="seletval2"
            v-model="categoryStore.cateid2"
            clearable
          >
            <el-option
              v-for="item in categoryStore.categoryList2"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="三级分类">
          <el-select
            placeholder="请选择三级分类"
            style="width: 200px"
            v-model="categoryStore.cateid3"
            clearable
          >
            <el-option
              v-for="item in categoryStore.categoryList3"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategoryStore } from '@/store/modules/category'
const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategoryList1()
})
const seletval = (val: number) => {
  categoryStore.cateid1 = val
  categoryStore.getCategoryList2()
  categoryStore.cateid2 = ''
  categoryStore.cateid3 = ''
  categoryStore.categoryList2 = []
  categoryStore.categoryList3 = []
}
const seletval2 = (val: number) => {
  categoryStore.cateid2 = val
  categoryStore.getCategoryList3()
  categoryStore.cateid3 = ''
  categoryStore.categoryList3 = []
}
</script>

<style scoped></style>
