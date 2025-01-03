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
          width="120px"
          prop="attrName"
        ></el-table-column>
        <el-table-column prop="address" label="属性值名称" />
        <el-table-column label="操作" width="120px">
          <template #default="{ row, index }">
            <el-button type="primary" icon="edit" size="small"></el-button>
            <el-button type="primary" icon="delete" size="small"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style scoped></style>
