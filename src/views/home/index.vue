<script setup lang="ts">
import { ref } from 'vue';
import ViewHeader from '@/components/ViewHeader.vue';
const count = ref(0);
</script>

<template>
  <div>
    <ViewHeader title="Home" />
    <p>ミリシタ ポータル</p>
    <el-button type="primary" size="default" @click="count++">
      You clicked me {{ count }} times.
    </el-button>
    <el-button type="info" size="default" plain @click="$router.push('/debug')">
      Go to default welcome page
    </el-button>
    <p>
      <el-button
        type="info"
        size="default"
        plain
        @click="$router.push('/zh-CN')"
      >
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
    <p>
      <el-table />
      <el-pagination :total="1" />
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
