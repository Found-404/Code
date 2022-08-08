// 该文件专门用于创建路由器

import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

const router = new VueRouter({
    mode: 'history',
    // 一级路由
    routes: [{
            name: 'guanyv',
            path: '/about',
            component: About,
            meta: { isAuth: true, title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },

            // 二级路由
            children: [{
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    beforeEnter: (to, from, next) => {
                        // if (to.meta.isAuth) { //控制判断是否需要鉴权
                        //     if (localStorage.getItem('school') == 'found') {
                        //         next();
                        //     } else {
                        //         alert('学校名不对');
                        //     }
                        // } else {
                        //     next();
                        // }
                    },
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },

                    children: [{
                        name: 'xiangqing',
                        path: 'detail',
                        component: Detail,
                        meta: { title: '详情' },
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

//全局前置路由守卫
//初始化和在每一次路由器切换之前
router.beforeEach((to, from, next) => {
    // to:去哪里
    // from:来自哪里
    // next:放行
    document.title = to.meta.title || 'FOUND'
    if (to.meta.isAuth) { //控制判断是否需要鉴权
        if (localStorage.getItem('school') == 'found') {
            next();
        } else {
            alert('学校名不对');
        }
    } else {
        next();
    }
});

// 后置路由守卫
// 初始化和在每一次路由器切换之后
router.afterEach((to, from) => {

    // ......
})

export default router;