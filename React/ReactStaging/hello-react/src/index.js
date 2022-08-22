// 引入react核心库
import React from 'react'
// 引入ReactDOM渲染页面
import ReactDOM from 'react-dom/client';

// 引入App组件
import App from './App'

// import store from './redux/store'
// import {Provider} from 'react-redux'

// 渲染app到页面
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   // <Provider store={store}>   
      <App/>
   // </Provider>
);
