<script setup lang="ts"></script>

<template>
  <div class="layout-aside">
    <el-scrollbar>
      <el-menu router>
        <el-menu-item index="/home">
          <template #title>Home</template>
        </el-menu-item>
        <el-menu-item index="/park">
          <template #title>Park</template>
        </el-menu-item>
        <el-menu-item index="/about">
          <template #title>About</template>
        </el-menu-item>
        <el-menu-item index="/404">
          <template #title>404</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.layout-aside {
  --el-menu-bg-color: transparent;

  height: 100%;
  background-color: var(--ml-color-miya);
  .el-menu {
    border-right: none;
  }
}
</style>
