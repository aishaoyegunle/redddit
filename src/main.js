import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const dateFormatter = require("moment");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  dateFormatter,
  render: h => h(App)
}).$mount("#app");
