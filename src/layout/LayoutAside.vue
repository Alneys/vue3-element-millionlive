<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useLayoutStore, useMenuStore } from '@/store';
import { languageList } from '@/i18n';
import type { ElDropdown } from 'element-plus';

import { Moon, Sunny } from '@element-plus/icons-vue';
import svgGlobe from '@/assets/icon/globe.svg?raw';

const layoutStore = useLayoutStore();
const menuStore = useMenuStore();

const router = useRouter();
const route = useRoute();
const activePath = computed(() => route.path);
const preferredLang = computed(() => route.params.preferredLang);

const dropdown = ref<InstanceType<typeof ElDropdown> | null>(null);

const handleClick = () => {
  if (layoutStore.isMasked) {
    layoutStore.toggleMenuCollapse();
  }
};
const handleClickLanguageDropdownMenu = () => {
  dropdown.value?.handleOpen();
};
const handleCommand = (command: string) => {
  layoutStore.setPreferredLang(command, router, route);
};
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
        <div @click="handleClickLanguageDropdownMenu">
          <el-dropdown
            ref="dropdown"
            class="el-menu-item"
            trigger="click"
            @command="handleCommand"
          >
            <!-- eslint-disable-next-line vue/no-v-html -->
            <i class="el-icon" v-html="svgGlobe"></i>
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
        <div>
          <el-button
            :icon="layoutStore.isDark ? Moon : Sunny"
            class="el-menu-item"
            text
            @click="layoutStore.toggleDark()"
          />
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.layout-aside {
  width: 200px;
  height: 100%;
  transition: width var(--el-transition-duration);
  &.collapse {
    width: 0 !important;
  }

  --el-menu-bg-color: transparent;
  .aside-top {
    .el-menu {
      border-right: none;
    }
  }
  .aside-bottom {
    margin-block: 1em;
    > .el-divider {
      margin-block: 1em;
    }
    > div:not(.el-divider) {
      width: 100%;
      height: var(--el-menu-item-height);
      > .el-dropdown {
        background-color: var(--el-menu-bg-color);
        &:hover {
          background-color: var(--el-menu-hover-bg-color);
        }
      }
      > .el-button {
        --el-fill-color-light: var(--el-menu-hover-bg-color);
        --el-fill-color: var(--el-menu-hover-bg-color);

        width: 100%;
        justify-content: flex-start;
        border-radius: 0;
        color: var(--el-menu-text-color);
      }
    }
  }
}
.layout-aside.compact {
  width: 60vw;
  .aside-bottom {
    > .el-select {
      &:hover {
        background-color: transparent;
      }
    }
  }
}
</style>
