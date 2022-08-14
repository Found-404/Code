// 引入react核心库
import React from 'react'
// 引入ReactDOM渲染页面
import ReactDOM from 'react-dom/client';

// 引入App组件
import App from './App'

import store from './redux/store'

// 渲染app到页面
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <App />
);


// 直接在入口文件监听，当产生了新的state时，自动调用
// 监测redux中状态的改变，如果redux的状态发生了改变，那么重新渲染App组件
store.subscribe(()=>{root.render(<App />)})