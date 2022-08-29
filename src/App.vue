<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
// import en from 'element-plus/lib/locale/lang/en';
// import ja from 'element-plus/lib/locale/lang/ja';

const locale = zhCn;
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<style lang="scss">
html,
body,
#app {
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: var(--ml-color-miya);
}
</style>
