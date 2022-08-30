<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import menuRoutes from '@/router/modules/menu';
import { useLayoutStore } from '@/store/layout';

const layoutState = useLayoutStore();

const route = useRoute();
const activePath = computed(() => route.path);
</script>

<template>
  <div
    :class="{
      'layout-aside': true,
      collapse: layoutState.isMenuCollapse,
      compact: layoutState.isLayoutCompact,
    }"
  >
    <el-scrollbar>
      <el-menu router :default-active="activePath">
        <el-menu-item
          v-for="each in menuRoutes"
          :key="each.name"
          :index="each.path ? each.path : '/'"
        >
          <template #title>{{ each.meta.title }}</template>
        </el-menu-item>
        <el-menu-item index="/">
          <template #title>/</template>
        </el-menu-item>
        <el-menu-item index="/home">
          <template #title>/home</template>
        </el-menu-item>
        <el-menu-item index="/park">
          <template #title>Park</template>
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
  --layout-aside-width: 150px;

  width: var(--layout-aside-width);
  height: 100%;
  background-color: var(--ml-color-miya);
  transition: all 0.3s;

  // .el-menu {
  //   border-right: none;
  // }
  &.collapse {
    width: 0;
  }
}
</style>
