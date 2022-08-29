<script setup lang="ts">
import LayoutHeader from './LayoutHeader.vue';
import LayoutAside from './LayoutAside.vue';
import LayoutMain from './LayoutMain.vue';
import LayoutFooter from './LayoutFooter.vue';
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
      <LayoutFooter />
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
#layout {
  width: 100%;
  height: 100%;
  > .el-header {
    display: flex;
    overflow: hidden;
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
    overflow: hidden;
    height: 22px;
    background-color: var(--ml-color-elena);
  }
}
</style>
