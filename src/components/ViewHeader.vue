<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <h1>{{ title }}</h1>
  <el-divider />
</template>

<style lang="scss" scoped>
h1 {
  margin: 0.25rem 0;
}
.el-divider {
  margin: 0.5em 0;
}
</style>
