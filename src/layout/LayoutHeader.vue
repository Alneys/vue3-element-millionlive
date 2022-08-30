<script setup lang="ts"></script>

<template>
  <div class="layout-header">
    <el-link
      type="default"
      :underline="false"
      href="http://127.0.0.1:5173"
      target="_blank"
    >
      Vue3-Element-MillionLive
    </el-link>
  </div>
</template>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  align-items: center;
  > .el-link {
    color: black;
    font-size: var(--el-font-size-extra-large);
    font-weight: bold;
  }
}
</style>
