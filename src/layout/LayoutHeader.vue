<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue';
import { useLayoutStore } from '@/store/layout';

const layoutStore = useLayoutStore();
</script>

<template>
  <div
    :class="{
      'layout-header': true,
      compact: layoutStore.isLayoutCompact,
    }"
  >
    <el-button
      plain
      text
      :icon="layoutStore.isMenuCollapse ? Expand : Fold"
      @click="layoutStore.toggleMenuCollapse"
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
  flex: 1;
  align-items: center;
  transition: all 0.3s;
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
  &.compact {
    > .el-button {
      margin-right: 4px;
    }
    > .el-link {
      flex: 1;
    }
  }
}
</style>
