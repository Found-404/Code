// 创建外壳组件APP
// 引入react核心库
import React,{Component} from 'react'

import Hello from "./components/Hello/";
import Welcome from './components/Welcome/';

// 创建并暴露App组件
class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

// 暴露App组件
export default App
