import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const moment = require("moment");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  moment,
  render: h => h(App)
}).$mount("#app");
