<script setup lang="ts">
import ViewHeader from '@/views/components/ViewHeader.vue';
</script>

<template>
  <ViewHeader title="Test" />
  <p>
    <el-button type="info" size="default" plain @click="$router.push('/zh-CN')">
      to /zh-CN
    </el-button>
    <el-button
      type="info"
      size="default"
      plain
      @click="$router.push('/zh-CN/about')"
    >
      to /zh-CN/about
    </el-button>
    <el-button
      type="info"
      size="default"
      plain
      @click="$router.push('/en/about')"
    >
      to /en/about
    </el-button>
    <el-button
      type="info"
      size="default"
      plain
      @click="$router.push('/ja/index')"
    >
      to /ja/index
    </el-button>
  </p>
  <div v-for="i in [...Array(50).keys()]" :key="i">{{ i }}</div>
</template>

<style lang="scss" scoped></style>
