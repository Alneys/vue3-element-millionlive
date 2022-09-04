<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useLayoutStore, useMenuStore } from '@/store/index';

const layoutStore = useLayoutStore();
const menuStore = useMenuStore();
menuStore.generateMenus();

const route = useRoute();
const activePath = computed(() => route.path);
const preferredLang = computed(() => route.params.preferredLang);

const handleClick = () => {
  if (layoutStore.isMasked) {
    layoutStore.toggleMenuCollapse();
  }
};

console.log(menuStore.menus);
watch(
  () => route.path,
  () => {
    console.log(route.path);
  }
);
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
      <div class="aside-top">
        <el-menu router :default-active="activePath" @click="handleClick">
          <el-menu-item
            v-for="each in menuStore.menus"
            :key="each.path"
            :index="
              preferredLang
                ? `/${preferredLang}${each.path === '/' ? '' : each.path}`
                : each.path
            "
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
      </div>
      <div v-if="layoutStore.isLayoutCompact" class="aside-bottom">
        <el-divider />
        <el-menu>
          <el-sub-menu index="language">
            <template #title><span>Language</span></template>
            <el-menu-item index="zh-CN">zh-CN</el-menu-item>
            <el-menu-item index="en">en</el-menu-item>
            <el-menu-item index="ja">ja</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
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
