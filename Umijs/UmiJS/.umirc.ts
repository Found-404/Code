import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title:"UmiJS",
  routes: [
    {
      path: '/',
      component:'@/layouts/index', // 路由模板
      title:'首页',
      routes:[
        {
          path:'/',
          component:'@/pages/index'
        },
        {
          path:'/user',
          // wrappers:[
          //   '@/wrappers/auth'
          // ],
          routes:[
            {
              path:'/user/one',
              component:'@/pages/user1', 
              title:'用户页面1'
            },
            {
              path:'/user/two',
              component:'@/pages/user2', 
              title:'用户页面2'
            },
            {
              component:'@/pages/404'
            }
          ]
        },
        {
          path:'/dva',
          component:'@/pages/dva'
        },
        {
          path:'/login',
          component:'@/pages/login',
          title:'登录'
        },
        {
          component:'@/pages/404'
        },
      ],
    },
    {
      component:'@/pages/404'
    }
  ],
  fastRefresh: {}
});
