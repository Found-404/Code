import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
  // 对接收的props选项进行：类型，必要性的限制
  static propsTypes={
    addTodo:PropTypes.func.isRequired
  }
  
  // 键盘事件的回调
  handleKeyUp=(ev)=>{
    // 结构赋值获取keyCode,target
    const {keyCode,target} = ev;
    // 判断是否是回车按键
    if (keyCode !== 13){ 
      return
    }
    // 添加的todo名字不能为空
    console.log(target.value.trim());
    if (target.value.trim() === "") {
      alert('不能为空');
      return
    }
    // 准备好一个todo对象
    const todoObj={
      id:nanoid(),
      name:target.value,
      done:false,
    }
    // 将todoObj传递给todoObj
    this.props.addTodo(todoObj)
    // 清空输入框
    target.value = "";
  }

  
  render() {
    return (
      <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
