// npm init vue@latest
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

// vue-router
import router from './router';

// Element Plus
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
// import 'element-plus/dist/index.css'; // default stylesheet for Element Plus
import './assets/style/element-ml.scss'; // custom stylesheet for Element Plus
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

// vue-i18n
import i18n from './i18n';

// global stylesheet
import './assets/style/global-style.scss';

// ------------------------------------------------------------

// npm init vue@latest
const app = createApp(App);

app.use(createPinia());

// vue-router
app.use(router);

// Element Plus
app.use(ElementPlus, { locale: zhCn, size: 'default', zIndex: 2000 });
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// vue-i18n
app.use(i18n);

// npm init vue@latest
app.mount('#app');
