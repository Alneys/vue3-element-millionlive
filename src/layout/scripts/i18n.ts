export const changeDisplayLanguage = (lang: string): string => {
  if (lang === '') {
    lang = import.meta.env.VITE_I18N_DEFAULT_LANGUAGE;
  }
  localStorage.setItem('lang', lang);
  return lang;
};
