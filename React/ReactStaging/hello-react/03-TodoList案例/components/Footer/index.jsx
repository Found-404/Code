import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // 全选checkbox的回调
  handleCheckAll=(ev)=>{
      this.props.checkAlltodo(ev.target.checked);
  }
  // 清除所有已完成的
  handleClearAll=()=>{
      this.props.clearAlldone();
  }

  render() {
    const {todos} = this.props;
    // 已经完成的个数
    const doneCount=todos.reduce((pre,todo)=>{
       return pre + (todo.done ? 1 : 0 )
    },0)
    // 总数
    const total = todos.length;
    return (
        <div className="todo-footer">
            <label>
               <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total&&total !== 0 ? true:false}/>
            </label>
            <span>
            <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button onClick={this.handleClearAll} className="btn btn-danger">清除已完成任务</button>
       </div>
    )
  }
}
