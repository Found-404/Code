// 该文件专门用于创建路由器

import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

export default new VueRouter({
    // 一级路由
    routes: [{
            name: 'guanyv',
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,

            // 二级路由
            children: [{
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,

                    children: [{
                        name: 'xiangqing',
                        path: 'detail',
                        component: Detail,
                        // props的第一种写法 对象 用的少
                        // props的第一种写法， 值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                        // props: { a: 1, b: 'hello' }

                        // props的第二种写法 布尔值
                        // 若布尔值为真，就会把该路由组件收的所有preams参数以props的形式传给Detail组件。
                        // props: true

                        // props的第三种写法 函数
                        props($route) {
                            return { id: $route.query.id, title: $route.query.title }
                        }


                    }, ]
                }
            ]
        },
    ]
});