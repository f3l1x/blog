import Vue from "/web_modules/vue/dist/vue.esm.browser.js";
import IPApi from "./components/IPApi.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app-blogpost",
  render: (h: any) => h(IPApi)
});
