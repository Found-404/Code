// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入Vue组件，它是所有组件的父组件
import App from './App.vue'

// 关闭Vue生产提示
Vue.config.productionTip = false

function name(params) {
    let a = 10;
}

new Vue({
    // 完成了将App组件放入容器中

    render: h => h(App),
    // render(createElement) {
    //     return createElement('hi', '你好啊')
    // },
    // template: `<h1>你好啊</h1>`,


}).$mount('#app')