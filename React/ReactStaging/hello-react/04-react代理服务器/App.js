// 创建外壳组件APP
// 引入react核心库
import React,{Component} from 'react'

import axios from 'axios'

// 创建并暴露App组件
class App extends Component{

    getStudents=()=>{
        axios.get('http://localhost:3000/api1/students').then(
            response=>{
                console.log('成功',response.data);
            },
            error=>{
                console.log('失败',error);
            }
        )
    }
    getCars=()=>{
        axios.get('http://localhost:3000/api2/cars').then(
            response=>{
                console.log('成功',response.data);
            },
            error=>{
                console.log('失败',error);
            }
        )
    }

    render(){
        return (
        <div>
            <button onClick={this.getStudents}>获取学生信息</button>
            <button onClick={this.getCars}>获取汽车信息</button>
        </div>
        )
    }
}

// 暴露App组件
export default App
