<script setup lang="ts">
import LayoutHeader from './LayoutHeader.vue';
import LayoutAside from './LayoutAside.vue';
import LayoutMain from './LayoutMain.vue';
import LayoutFooter from './LayoutFooter.vue';

import { useResizeEventListener } from './hooks/useResizeEventListener';
import { useLayoutStore } from '@/store/layout';

useResizeEventListener();
const layoutStore = useLayoutStore();
</script>

<template>
  <el-container
    id="layout"
    :class="{ 'compact-layout': layoutStore.isLayoutCompact }"
  >
    <el-header>
      <LayoutHeader />
    </el-header>
    <el-main>
      <el-container>
        <el-aside>
          <LayoutAside />
        </el-aside>
        <el-main>
          <LayoutMain />
        </el-main>
      </el-container>
    </el-main>
    <el-footer>
      <LayoutFooter />
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
#layout {
  --layout-header-footer-padding: 0 var(--el-font-size-extra-small);

  width: 100%;
  height: 100%;
  > .el-header {
    display: flex;
    overflow: hidden;
    height: var(--layout-header-height);
    align-items: center;
    padding: var(--layout-header-footer-padding);
    background-color: var(--ml-color-elena);
  }
  > .el-main {
    overflow: hidden;
    flex: 1;
    padding: 0;
    background-color: var(--ml-color-miya);

    // test
    > .el-container {
      height: 100%;
      > .el-aside {
        width: auto;
        height: 100%;
      }
      > .el-main {
        overflow: hidden;
        height: 100%;
        flex: 1;
        padding: 0;
      }
    }
  }
  > .el-footer {
    overflow: hidden;
    height: var(--layout-footer-height);
    padding: var(--layout-header-footer-padding);
    background-color: var(--ml-color-elena);
  }
}
</style>
