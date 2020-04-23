import Vue from "vue";
import App from "./App.vue";
import router from "./routes.js";
import store from "./store/store.js";

Vue.config.productionTip = false;

new Vue({
  router, // ==> router: router
  store, // ==> store: store
  render: h => h(App)
}).$mount("#app");