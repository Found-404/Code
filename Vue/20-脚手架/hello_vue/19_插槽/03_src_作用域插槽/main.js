// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue"

// 引入vue-resource
import vueResource from 'vue-resource'

// 关闭Vue提示
Vue.config.productionTip = false;

// 使用插件
Vue.use(vueResource);

// 创建vm
new Vue({
    el: "#app",
    render: h => h(App),

    // 借助钩子添加全局事件总线
    beforeCreate() {
        // 在Vue原型上添加
        Vue.prototype.$bus = this; //安装全局事件总线
    }
})