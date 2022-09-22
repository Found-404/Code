import {history} from 'umi';
// 定义额外路由变量
let extraRoutes;

// 动态添加路由
export function patchRoutes({ routes, routeComponents }) {
    console.log('patchRoutes', routes, routeComponents);
    routes.unshift({
        path:'/foo',
        component:require('@/pages/user1').default
    })

    // 合并服务端返回的路由
    extraRoutes.map(item=>{
        routes.unshift({
            path:item.path,
            component:require(`@/pages${item.component}`).default
        })
    })
}

// 复写 render 会在patchRoutes之前执行
export function render(oldRender) {
    // 模拟从服务端请求获得的 路由

    extraRoutes = [
        {
            path:'/server',
            component:'/user2'
        }
    ]

    // 在渲染之前 进行权限校验
    const isLoading = true;
    if(!isLoading){
        history.push('/login')
    }

    oldRender();
}

// 在初始加载和路由切换时做一些事情,在patchRoutes之后执行
export function onRouteChange({ location, clientRoutes, routes, action }) {
    console.log(location,'01');
    console.log(clientRoutes,'02');
    console.log(routes,'03');
    console.log(action,'04');
    // console.log(location.pathname);
    
  }