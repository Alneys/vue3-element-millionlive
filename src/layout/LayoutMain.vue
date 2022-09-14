<script setup lang="ts">
import { useLayoutStore } from '@/store';

const layoutStore = useLayoutStore();
const handleClick = () => {
  layoutStore.toggleMenuCollapse();
};
</script>

<template>
  <div
    :class="{
      'layout-main': true,
      masked: layoutStore.isMasked,
      compact: layoutStore.isLayoutCompact,
    }"
  >
    <el-scrollbar class="layout-main-scrollbar">
      <router-view />
      <el-backtop target=".layout-main-scrollbar > div" />
      <div
        v-if="layoutStore.isMasked"
        class="layout-main-mask"
        @click="handleClick"
      ></div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.layout-main {
  height: 100%;
  transition: width var(--el-transition-duration),
    background-color var(--el-transition-duration);
  > .layout-main-scrollbar {
    padding: 0;
    > :deep(.el-scrollbar__wrap) > .el-scrollbar__view {
      padding: var(--el-font-size-base);
    }
  }
  .el-backtop {
    right: 20px !important;
    bottom: calc(20px + var(--layout-footer-height)) !important;
    background-color: var(--ml-layout-header-color);
    color: white;
    transition: all var(--el-transition-duration);
  }
  &.compact {
    width: 100vw;
    flex: 0;
    .el-backtop {
      bottom: 20px !important;
    }
  }
  &.masked {
    z-index: 1;
    background-color: rgba($color: black, $alpha: 30%);
    .el-backtop {
      display: none;
    }
  }
}
.layout-main-mask {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
