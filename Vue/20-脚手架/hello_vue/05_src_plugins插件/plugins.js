export default {
    install(Vue) {
        // console.log('@@@' + Vue);
        // 全局过滤器定义
        Vue.filter('mySlice', function(value) {
            // 获取4位数据
            return value.slice(0, 4);
        });

        // 定义一个全局指令fbind
        Vue.directive('fbind', {
            // Vue规定了指定函数名bind,inserted,updata
            // 指令与元素成功绑定时（开始）
            bind(element, binding) {
                element.value = binding.value;
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus();
            },
            // 指令所在模块被重新赋值时
            updata(element, binding) {
                element.value = binding.value;
            }
        });

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
        })

        // 给Vue原型上添加一个方法(vm和vc都可以用)
        Vue.prototype.hello = () => { alert('你好啊！') }

    }
}