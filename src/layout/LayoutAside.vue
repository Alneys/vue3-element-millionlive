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
        <el-select placeholder="Language" suffix-icon="">
          <el-option>zh-CN</el-option>
          <el-option>en</el-option>
          <el-option>ja</el-option>
        </el-select>
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
  &.compact {
    width: 60vw;
  }
  &.collapse {
    width: 0;
  }
  .aside-top {
    .el-menu {
      border-right: none;
    }
  }
  .aside-bottom {
    margin-bottom: 2em;
    > .el-select {
      display: flex;
      height: var(--el-menu-item-height);
      align-items: center;
      line-height: var(--el-menu-item-height);
      transition: border-color var(--el-transition-duration),
        background-color var(--el-transition-duration),
        color var(--el-transition-duration);
      :deep(*) {
        --el-input-bg-color: transparent;
        --el-input-border-radius: 0;
        --el-input-placeholder-color: var(--el-menu-text-color);
        --el-select-input-color: var(--el-menu-text-color);
        .el-input__wrapper {
          padding-left: calc(var(--el-menu-base-level-padding));
          box-shadow: none !important;
        }
      }
      &:hover {
        background-color: var(--el-menu-hover-bg-color);
      }
    }
  }
}
</style>
