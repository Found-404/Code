// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue";

// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入E样式
// import 'element-ui/lib/theme-chalk/index.css';
// 使用El
// Vue.use(ElementUI);

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';
Vue.component('el-button', Button);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */




// 关闭Vue提示
Vue.config.productionTip = false;


// 创建vm
new Vue({
    el: "#app",
    render: h => h(App),

});