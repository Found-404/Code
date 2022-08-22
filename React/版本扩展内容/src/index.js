// 引入react核心库
import React from 'react'
// 引入ReactDOM渲染页面
import ReactDOM from 'react-dom/client';

import {BrowserRouter} from 'react-router-dom'
// 引入App组件
import App from './App'

// 渲染app到页面
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
     <BrowserRouter> 
        <App/>
     </BrowserRouter>
);

export default root;
