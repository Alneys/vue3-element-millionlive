<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue';
import { defineProps } from 'vue';
defineProps<{
  isMenuCollapse: boolean;
}>();

const test = () => {
  console.log(123);
};
</script>

<template>
  <div class="layout-header">
    <el-button
      plain
      text
      :icon="isMenuCollapse ? Expand : Fold"
      @click="test"
    />
    <el-link type="default" :underline="false" href="/" target="_blank">
      Vue3-Element-MillionLive
    </el-link>
  </div>
</template>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  height: 100%;
  align-items: center;
  > .el-button {
    height: 100%;
    padding: 8px 20px;
    margin-right: calc(2 * var(--el-font-size-extra-large));
    border-radius: 0;
    color: black;
    font-size: var(--el-font-size-extra-large);
    &:hover,
    &:focus {
      background-color: rgba($color: white, $alpha: 20%) !important;
    }
    &:active {
      background-color: transparent !important;
    }
  }
  > .el-link {
    color: black;
    font-size: var(--el-font-size-extra-large);
    font-weight: bold;
    white-space: nowrap;
  }
}
</style>
