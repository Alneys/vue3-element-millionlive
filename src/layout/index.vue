<script setup lang="ts">
import LayoutHeader from './LayoutHeader.vue';
import LayoutAside from './LayoutAside.vue';
import LayoutMain from './LayoutMain.vue';
</script>

<template>
  <el-container id="layout">
    <el-header>
      <LayoutHeader />
    </el-header>
    <el-main>
      <el-container>
        <el-aside>
          <LayoutAside />
        </el-aside>
        <el-main>
          <el-scrollbar>
            <LayoutMain />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-main>
    <el-footer>
      <div><span>Vue 3 + Element Plus + TypeScript + Scss</span></div>
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
#layout {
  width: 100%;
  height: 100%;
  > .el-header {
    display: flex;
    height: 40px;
    align-items: center;
    background-color: var(--ml-color-elena);
  }
  > .el-main {
    flex: 1;
    padding: 0;
    background-color: var(--ml-color-miya);

    // test
    > .el-container {
      height: 100%;
      > .el-aside {
        width: 200px;
        height: 100%;
      }
      > .el-main {
        padding: 0;
      }
    }
  }
  > .el-footer {
    display: flex;
    height: 22px;
    align-items: center;
    justify-content: flex-end;
    background-color: var(--ml-color-elena);
    font-size: var(--el-font-size-extra-small);
  }
}
</style>
