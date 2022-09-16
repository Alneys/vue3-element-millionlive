import { createI18n } from 'vue-i18n';

import zhCn from './lang/zh-cn';
import en from './lang/en';
import ja from './lang/ja';

export const languageList = [
  { tag: 'zh-CN', name: '简体中文' },
  { tag: 'en', name: 'English' },
  { tag: 'ja', name: '日本語' },
  { tag: 'es', name: 'Español' },
];

export function getDefaultPreferredLang(): string {
  for (const language of navigator.languages) {
    for (const availableLanguage of languageList) {
      if (language === availableLanguage.tag) {
        return language;
      }
    }
  }
  return import.meta.env.VITE_I18N_DEFAULT_LANGUAGE;
}

if (localStorage.language === undefined) {
  localStorage.language = getDefaultPreferredLang();
  document.querySelector('html')?.setAttribute('lang', localStorage.language); // html lang attribute
}

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: localStorage.language as string,
  fallbackLocale: 'en',
  messages: {
    'zh-CN': zhCn,
    en,
    ja,
  },
});

export default i18n;
