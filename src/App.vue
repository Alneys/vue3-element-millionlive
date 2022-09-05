<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useLayoutStore } from './store';
// Element Plus
import { ElConfigProvider } from 'element-plus';
import type { Language } from 'element-plus/es/locale';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';
import ja from 'element-plus/lib/locale/lang/ja';
import { useRoute, useRouter } from 'vue-router';

const layoutStore = useLayoutStore();
const route = useRoute();
const router = useRouter();

// i18n support
const elLocaleList: Record<string, Language> = {
  'zh-CN': zhCn,
  en,
  ja,
};

const elConfig = reactive({
  locale: elLocaleList[layoutStore.preferredLang] as Language,
});

// i18n support - watch route.params.preferredLang
watch(
  () => route.params.preferredLang as string | undefined,
  (cur) => {
    if (typeof cur === 'string') {
      if (cur) layoutStore.preferredLang = cur;
      else
        layoutStore.preferredLang = import.meta.env.VITE_I18N_DEFAULT_LANGUAGE;
    }
  }
);

// i18n support - watch layoutStore.preferredLang
watch(
  () => layoutStore.preferredLang,
  (cur) => {
    elConfig.locale = elLocaleList[cur]; // Element Plus i18n
    const rawPath = route.params.preferredLang
      ? route.path.replace(new RegExp(`^/${route.params.preferredLang}`), '')
      : route.path;
    router.replace(`/${cur}${rawPath}`);
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
  background-color: var(--ml-color-miya);
}
</style>
