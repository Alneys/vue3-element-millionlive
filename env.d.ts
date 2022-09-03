/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_I18N_SUPPORT: 'enable' | 'disable';
  readonly VITE_I18N_DEFAULT_LANGUAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
