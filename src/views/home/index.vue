<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
  <div>
    <p>ミリシタ ポータル</p>
    <el-button type="primary" size="default" @click="count++">
      You clicked me {{ count }} times.
    </el-button>
    <el-button type="info" size="default" plain @click="$router.push('/debug')">
      Go to default welcome page
    </el-button>
  </div>
</template>

<style lang="scss" scoped></style>
