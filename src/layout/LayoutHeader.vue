<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useLayoutStore } from '@/store';
import { languageList } from '@/i18n';

import { Expand, Fold, Moon, Sunny } from '@element-plus/icons-vue';
import svgGlobe from '@/assets/icon/globe.svg?raw';

const layoutStore = useLayoutStore();
const router = useRouter();
const route = useRoute();

const handleClick = () => {
  if (layoutStore.isMasked) {
    layoutStore.toggleMenuCollapse();
  }
  router.push('/');
};

const handleCommand = (command: string) => {
  layoutStore.setPreferredLang(command, router, route);
};
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
        text
        @click="layoutStore.toggleMenuCollapse"
      />

      <el-link :underline="false" type="default" @click="handleClick">
        Vue3-Element-MillionLive
      </el-link>
    </div>
    <div v-if="!layoutStore.isLayoutCompact" class="right">
      <el-button
        :icon="layoutStore.isDark ? Moon : Sunny"
        text
        @click="layoutStore.toggleDark()"
      />
      <el-dropdown trigger="hover" @command="handleCommand">
        <el-button text>
          <template #icon>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-html="svgGlobe"></span>
          </template>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="item in languageList"
              :key="item.tag"
              :command="item.tag"
            >
              {{ item.name }}
            </el-dropdown-item>
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
  > .left,
  > .right {
    display: flex;
    height: 100%;
    .el-link {
      transition: color var(--el-transition-duration);
    }
    .el-button {
      --el-fill-color: rgb(255 255 255 / 50%);
      --el-fill-color-light: rgb(255 255 255 / 20%);

      height: 100%;
      padding: 0.5em 1em;
      border-radius: 0;
      color: var(--el-text-color-primary);
      font-size: var(--el-font-size-extra-large);
      transition: all var(--el-transition-duration);
    }
  }
  > .left {
    margin-right: 1em;
    > .el-link {
      flex: 1;
      justify-content: flex-start;
      padding: 0 0.5em;
      color: var(--el-text-color-primary);
      font-size: var(--el-font-size-extra-large);
      font-weight: bold;
      white-space: nowrap;
    }
  }
  > .right {
    margin-left: 1em;
    > .el-dropdown {
      height: 100%;
      color: var(--el-text-color-primary);
      cursor: pointer;
      font-size: var(--el-font-size-extra-large);
      white-space: nowrap;
    }
  }
  &.compact {
    > .left {
      > .el-link {
        font-size: var(--el-font-size-large);
      }
    }
  }
}
</style>
