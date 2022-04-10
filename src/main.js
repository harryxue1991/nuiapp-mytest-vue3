import { createSSRApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
export function createApp() {
  const app = createSSRApp(App);
  uni.getSystemInfo({
    success: (res) => {
      // 全局的设备变量
      app.config.globalProperties.$model = res.model;
    },
  });
  app.use(store);
  return {
    app,
  };
}
