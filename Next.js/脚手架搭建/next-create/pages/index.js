import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () =>{

// routeChangeStart      路由发生变化之前
// routeChangeComplete   路由发生变化之后
// beforeHistoryChange   Next.js全部都用History模式
// routeChangeError      路由发生错误时,404不算
// hashChangeStart       Hash路由切换之前
// hashChangeComplete    Hash路由切换完成

  // Router.events.on('routeChangeStart',(...argus)=>{
  //     // ...argus 返回路径和{shallow: false}对象
  //     console.log('1.routeChangeStart,路由开始变化,参数为:',...argus);
  // })
  // Router.events.on('routeChangeComplete',(...argus)=>{
  //     // ...argus 返回路径和{shallow: false}对象
  //     console.log('2.routeChangeComplete,路由变化结束,参数为:',...argus);
  // })
  // Router.events.on('beforeHistoryChange',(...argus)=>{
  //     // ...argus 返回路径和{shallow: false}对象
  //     console.log('3.beforeHistoryChange,参数为:',...argus);
  // })
  // Router.events.on('routeChangeError',(...argus)=>{
  //     // ...argus 返回路径和{shallow: false}对象
  //     console.log('4.routeChangeError,路由发生错误时,参数为:',...argus);
  // })
  // Router.events.on('hashChangeStart',(...argus)=>{
  //     // ...argus 返回路径和{shallow: false}对象
  //     console.log('5.hashChangeStart,Hash路由切换之前,参数为:',...argus);
  // })
  // Router.events.on('hashChangeComplete',(...argus)=>{
  //     // ...argus 返回路径和{shallow: false}对象
  //     console.log('6.hashChangeComplete,Hash路由切换完成,参数为:',...argus);
  // })

// Lazy Loading 模块moment    组件







  function goto(){
    Router.push({
      pathname:'/chuancan',
      query:{
        name:'张三'
      }
    })
  }

    return (
      <>
        <div>我是首页</div>
        <div>
            <Link href="/chuancan?name=张三">
              <a>张三</a>
            </Link>
            <Link href={{pathname:'/chuancan',query:{name:'李四'}}}>
              <a>李四</a>
            </Link>
        </div>
        <div>
          <button onClick={goto}>点击跳转并携带参数</button>
        </div>
      </>
    )

}
export default Home
