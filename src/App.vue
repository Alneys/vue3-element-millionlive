<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLayoutStore } from './store';
// Element Plus
import { ElConfigProvider } from 'element-plus';
import type { Language } from 'element-plus/es/locale';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';
import ja from 'element-plus/lib/locale/lang/ja';

const layoutStore = useLayoutStore();
const { locale: i18nLocale } = useI18n({ useScope: 'global' });

// i18n support
const elLocaleList: Record<string, Language> = {
  'zh-CN': zhCn,
  en,
  ja,
};

const elConfig = reactive({
  locale: computed<Language | undefined>(
    () => elLocaleList[layoutStore.preferredLang]
  ),
});

// i18n support - watch layoutStore.preferredLang
watch(
  () => layoutStore.preferredLang,
  (cur) => {
    document.querySelector('html')?.setAttribute('lang', cur); // html lang attribute
    i18nLocale.value = cur; // vue-i18n
    // elConfig.locale = elLocaleList[cur]; // Element Plus i18n --> computedRef
  }
);
</script>

<template>
  <el-config-provider :locale="elConfig.locale">
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
  background-color: var(--el-bg-color);
  color: var(--el-text-color-primary);
  font-family: var(--el-font-family);
}
</style>
