// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue"

// 关闭Vue提示
Vue.config.productionTip = false;

// 创建vm
new Vue({
    el: "#app",

    render: h => h(App),

    beforeCreate() {
        // 在Vue原型上添加
        Vue.prototype.$bus = this; //安装全局事件总线
    }
})