<template>
  <!-- 三级分类全局组件 -->
  <Category :show="show"></Category>
  <el-card style="margin: 10px 0px">
    <div v-show="show == 0">
      <el-button
        type="primary"
        icon="plus"
        :disabled="categoryStore.cateid3 ? false : true"
        @click="addAttr"
      >
        添加平台属性
      </el-button>
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
          <template #default="{ row }">
            <el-tag
              type="primary"
              v-for="attrValue in row.attrValueList"
              :key="attrValue.id"
              style="margin: 0px 5px"
            >
              {{ attrValue.attrName }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120px">
          <template>
            <el-button type="primary" icon="edit" size="small"></el-button>
            <el-button type="primary" icon="delete" size="small"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination size="small" layout="prev, pager, next" :total="10" />
    </div>
    <div v-show="show == 1">
      <el-form :inline="true">
        <el-form-item label="属性名称">
          <el-input
            placeholder="请你输入属性名称"
            v-model="attrParams.attrName"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" icon="plus" @click="addAttrValue">
        添加属性值
      </el-button>
      <el-button @click="show = 0">取消</el-button>
      <el-table
        :data="attrParams.attrValueList"
        border
        style="width: 100%; margin: 10px 0px"
      >
        <el-table-column
          label="序号"
          type="index"
          align="center"
          width="80px"
        ></el-table-column>
        <el-table-column label="属性名称" width="200px" prop="attrName">
          <template #default="{ row, index }">
            <el-input
              placeholder="请输入属性名称"
              v-if="row.flag"
              @blur="doneadd(row, index)"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="属性值名称">
          <template #default="{ row }">
            <el-tag
              type="primary"
              v-for="attrValue in row.attrValueList"
              :key="attrValue.id"
              style="margin: 0px 5px"
            >
              {{ attrValue.attrName }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120px">
          <template>
            <el-button type="primary" icon="edit" size="small"></el-button>
            <el-button type="primary" icon="delete" size="small"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button
        type="primary"
        :disabled="attrParams.attrValueList.length == 0"
      >
        保存
      </el-button>
      <el-button @click="show = 0">取消</el-button>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { watch, ref, reactive } from 'vue'
import { useCategoryStore } from '@/store/modules/category'
import { AttrListData, AttrValue } from '@/api/product/attr/type'
const categoryStore = useCategoryStore()
const tableData = ref<AttrListData[]>([])
const attrParams = reactive<AttrListData>({
  attrName: '', //新增的属性的名字
  attrValueList: [
    //新增的属性值数组
  ],
  categoryId: '', //三级分类的id
  categoryLevel: 3, //代表的是三级分类
})
const show = ref(0)
const addAttr = () => {
  show.value = 1
}
const addAttrValue = () => {
  attrParams.attrValueList.push({
    valueName: '',
    flag: true, //控制每一个属性值编辑模式与切换模式的切换
  })
}
const doneadd = (row: AttrValue, index: number) => {
  if (row.valueName.length == 0) {
    attrParams.attrValueList.splice(index, 1)
    ElMessage.error('属性值不能为空')
    return
  }
  row.flag = false
}
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
