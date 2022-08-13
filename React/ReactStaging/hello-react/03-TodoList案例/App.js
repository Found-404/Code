// 创建外壳组件APP
// 引入react核心库
import React,{Component} from 'react'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

// 创建并暴露App组件
class App extends Component{
    // 数据
    state={
        todos:[
            {id:'001',name:'吃饭',done:false},
            {id:'002',name:'睡觉',done:true},
            {id:'003',name:'game',done:false},
            {id:'004',name:'代码',done:true},
        ]
    }

    // addTodo用于添加一个todo，接收参数是一个对象
    addTodo=(todoObj)=>{
        // 获取原todos
        const {todos} = this.state;
        // 创建新的todos并追加一个todo
        const newTodos=[todoObj,...todos]
        // 更新状态
        this.setState({todos:newTodos})
    }

    // 勾选或者取消勾选一个todo
    updataTodo=(id,done)=>{
        // 获取状态中的todos
        const {todos}=this.state;
        // 匹配处理数据
        const newTodos= todos.map((todoObj)=>{
            if (todoObj.id === id) {
                return {...todoObj,done:done}
            }else{
                return todoObj
            }
        })
        this.setState({todos:newTodos})
    }

    // 删除某个todo
    deleteTodo=(id)=>{
        // 获取原来的todos
        const {todos} = this.state;
        // 删除指定id的todo对象
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        // 更新状态
        this.setState({todos:newTodos})
    }

    // 全选
    checkAlltodo=(done)=>{
        // 获取原来的todos
        const {todos}=this.state;
        // 加工数据
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done,}
        });
        // 更新状态
        this.setState({todos:newTodos})
    }

    // 清除所有已完成的
    clearAlldone=()=>{
        // 函数体
        // 获取原来的todos
        const {todos}=this.state;
        // 过滤数据
        const newTodos= todos.filter((todoObj)=>{
            return !todoObj.done
        })
        // 更新状态
        this.setState({todos:newTodos})

    }



    render(){
        const {todos}=this.state;
        return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header addTodo={this.addTodo}/>
                <List todos={todos} updataTodo={this.updataTodo} deleteTodo={this.deleteTodo}/>
                <Footer todos={todos} checkAlltodo={this.checkAlltodo} clearAlldone={this.clearAlldone}/>
            </div>
        </div>
        )
    }
}

// 暴露App组件
export default App
