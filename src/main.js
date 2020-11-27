import Vue from "vue";
import VueMq from "vue-mq";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

Vue.config.productionTip = false;
Vue.use(VueMq, {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
