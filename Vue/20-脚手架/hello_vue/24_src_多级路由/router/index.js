// 该文件专门用于创建路由器

import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

export default new VueRouter({
    // 一级路由
    routes: [{
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
                }
            ]
        },
    ]
});