import { createI18n } from 'vue-i18n';
import zhCn from './lang/zh-cn';
import en from './lang/en';
import ja from './lang/ja';

export const languageDict = {
  'zh-CN': '简体中文',
  en: 'English',
  ja: '日本語',
  es: 'Español',
};

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: localStorage.language
    ? localStorage.language
    : import.meta.env.VITE_I18N_DEFAULT_LANGUAGE,
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCn,
    en,
    ja,
  },
});

export default i18n;
