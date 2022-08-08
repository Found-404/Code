// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue";
// 引入VueRouter
import VueRouter from 'vue-router'

// 引入路由器 可以省略index
import router from './router'

// 关闭Vue提示
Vue.config.productionTip = false;

// 应用插件
Vue.use(VueRouter);


// 创建vm
new Vue({
    el: "#app",
    render: h => h(App),
    // 配置路由器
    router
});