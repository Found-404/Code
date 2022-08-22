import React, { Component } from 'react'
import './index.css'
export default class Parent extends Component {

  render() {
    return (
      <div className='parent'>
        <h3>我是parent组件</h3>
        <A render={(name)=><B name={name}/>}/>
      </div>
    )
  }
}

class A extends Component {
    state={
        name:'tom'
    }
    render() {
        const {name}=this.state
      return (
        <div className='child'>
          <h3>我是A组件</h3><br />
          <p>我发送的name:{name}</p>
          {this.props.render(name)}
        </div>
      )
    }
}
  

class B extends Component {
    render() {
      return (
        <div className='b'>
          <h3>我是B组件</h3><br />
          <h4>我收到的name:{this.props.name}</h4>
        </div>
      )
    }
}
  
