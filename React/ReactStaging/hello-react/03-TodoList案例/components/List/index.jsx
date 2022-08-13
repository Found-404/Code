import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  // 对接收的props进项：类型，必要性的限制
  static propsTypes={
    todos:PropTypes.array.isRequired,
    updataTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.deleteTodo,
  }


  render() {
    const {todos,updataTodo,deleteTodo}=this.props
    return (
        <ul className="todo-main">
          {
            todos.map((todos)=>{
              return <Item key={todos.id} {...todos} updataTodo={updataTodo} deleteTodo={deleteTodo}/>
            })
          }
        </ul>
    )
  }
}
