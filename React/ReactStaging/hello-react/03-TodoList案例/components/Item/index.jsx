import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state={mouse:false}

  // 鼠标移入移出效果
  handleMouse=(flag)=>{
    return()=>{
      this.setState({mouse:flag})
    }
  }

  // 勾选，取消勾选某个todo的回调
  handleCheck=(id)=>{
    return (ev)=>{
      this.props.updataTodo(id,ev.target.checked)
    }
  }

  // 删除这个todo
  handleDelete=(id)=>{
    if (window.confirm('确定删除吗？')) {
        this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,name,done}=this.props
    return (
      <li style={{backgroundColor:this.state.mouse?"#ddd":"white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
              <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
              <span>{name}</span>
          </label>
          <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:this.state.mouse?"block":"none"}}>删除</button>
      </li>
    )
  }
}
