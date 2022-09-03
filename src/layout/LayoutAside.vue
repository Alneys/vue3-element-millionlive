<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useLayoutStore, useMenuStore } from '@/store/index';

const layoutStore = useLayoutStore();
const menuStore = useMenuStore();
menuStore.generateMenus();

const route = useRoute();
const activePath = computed(() => route.path);

const handleClick = () => {
  if (layoutStore.isMasked) {
    layoutStore.toggleMenuCollapse();
  }
};

// console.log(menuStore.menus);
// watch(
//   () => route.path,
//   () => {
//     console.log(route.path);
//   }
// );
</script>

<template>
  <div
    :class="{
      'layout-aside': true,
      collapse: layoutStore.isMenuCollapse,
      compact: layoutStore.isLayoutCompact,
    }"
  >
    <el-scrollbar class="layout-aside-scrollbar">
      <el-menu router :default-active="activePath" @click="handleClick">
        <el-menu-item
          v-for="each in menuStore.menus"
          :key="each.path"
          :index="each.path"
        >
          <template #title>{{ each.title }}</template>
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

  width: 200px;
  height: 100%;
  background-color: var(--ml-color-miya);
  transition: var(--ml-transition-all);
  .el-menu {
    border-right: none;
  }
  &.compact {
    width: 60vw;
  }
  &.collapse {
    width: 0;
  }
}
</style>
