<template>
  <!-- 三级分类全局组件 -->
  <Category></Category>
  <el-card style="margin: 10px 0px">
    <div>
      <el-button type="primary" icon="plus">添加平台属性</el-button>
      <el-table :data="tableData" border style="width: 100%; margin: 10px 0px">
        <el-table-column
          label="序号"
          type="index"
          align="center"
          width="80px"
        ></el-table-column>
        <el-table-column
          label="属性名称"
          width="200px"
          prop="attrName"
        ></el-table-column>
        <el-table-column prop="address" label="属性值名称">
          <template #default="{ row, index }">
            <el-tag
              type="primary"
              v-for="attrValue in row.attrValueList"
              :key="attrValue.id"
              style="margin: 0px 5px"
            >
              {{ attrValue.valueName }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120px">
          <template #default="{ row, index }">
            <el-button type="primary" icon="edit" size="small"></el-button>
            <el-button type="primary" icon="delete" size="small"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination size="small" layout="prev, pager, next" :total="10" />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { watch, ref, reactive } from 'vue'
import { useCategoryStore } from '@/store/modules/category'
import { AttrListData } from '@/api/product/attr/type'
const categoryStore = useCategoryStore()
const tableData = ref<AttrListData[]>([])
watch(
  () => categoryStore.cateid3,
  (newVal) => {
    if (newVal) {
      // 获取平台属性列表
      categoryStore.reqAttrList()
      tableData.value = categoryStore.tabledata
    }
  },
)
</script>

<style scoped></style>
