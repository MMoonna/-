<template>
  <div>
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: {
    type: String,
    default: 'ding',
    required: true,
  },
  color:{
    type: String,
    default: '#000'
  }
})
</script>

<style scoped></style>
