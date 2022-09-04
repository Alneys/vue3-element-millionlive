<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { useLayoutStore } from '@/store/index';

const layoutStore = useLayoutStore();
const router = useRouter();
</script>

<template>
  <div
    :class="{
      'layout-header': true,
      collapse: layoutStore.isMenuCollapse,
      compact: layoutStore.isLayoutCompact,
    }"
  >
    <div class="left">
      <el-button
        :icon="layoutStore.isMenuCollapse ? Expand : Fold"
        plain
        text
        @click="layoutStore.toggleMenuCollapse"
      />

      <el-link :underline="false" type="default" @click="router.push('/')">
        Vue3-Element-MillionLive
      </el-link>
    </div>
    <div class="right">
      <el-dropdown v-if="!layoutStore.isLayoutCompact">
        <span class="el-dropdown-link">
          Language
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>zh-CN</el-dropdown-item>
            <el-dropdown-item>en</el-dropdown-item>
            <el-dropdown-item>ja</el-dropdown-item>
            <el-dropdown-item disabled>es</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  * {
    transition: var(--ml-transition-all);
  }
  > .left {
    display: flex;
    height: 100%;
    transition: inherit;
    > .el-button {
      height: 100%;
      padding: 0.5em 1em;
      margin-right: 1em;
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
      flex: 1;
      justify-content: flex-start;
      color: black;
      font-size: var(--el-font-size-extra-large);
      font-weight: bold;
      white-space: nowrap;
    }
  }
  > .right {
    display: flex;
    height: 100%;
    margin-left: 1em;
    > .el-dropdown {
      height: 100%;
      align-items: center;
      color: black;
      cursor: pointer;
      white-space: nowrap;
    }
  }
  &.compact {
    > .left {
      > .el-button {
        margin-right: 0;
      }
      > .el-link {
        font-size: var(--el-font-size-large);
      }
    }
  }
}
</style>
