import Vue from "/web_modules/vue/dist/vue.esm.browser.js";
import Tools from './components/Tools.vue';

Vue.config.productionTip = false;

new Vue({
    el: '#app-tools',
    components: {
        Tools
    }
});
