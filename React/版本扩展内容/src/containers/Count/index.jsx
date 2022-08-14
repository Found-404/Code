// 创建一个容器组件
import React, { Component } from 'react'

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/actions/action'

import {connect} from 'react-redux';
// 使用connect()()创建并暴露一个Count的容器组件

// 定义UI组件
class Count extends Component {
    state={
        carName:'组件自己用的数据(不用在意)'
    }

    // 加
    increment = ()=>{
        const {value} =this.selectNumber
        this.props.add(value*1);
        
    }
    // 减
    decrement = ()=>{
        const {value} =this.selectNumber
        this.props.jian(value*1);
    }
    // 奇数加
    incrementIfOdd = ()=>{
        const {value} =this.selectNumber
        if (this.props.count%2!==0) {
            this.props.add(value*1)
        }
    }
    // 异步加
    incrementAsync = ()=>{
        const {value} =this.selectNumber
        this.props.addAsync(value*1,500)
    }

  render() {
    return (
      <div>
        <h2>我是Count组件,下方组件总人数为:{this.props.peops}</h2>
        <h1>当前求和：{this.props.count}</h1>
        <select ref={c=>this.selectNumber=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再+</button>&nbsp;
        <button onClick={this.incrementAsync}>异步+</button>&nbsp;
      </div>
    )
  }
}

//使用connect()()创建并暴露-个Count的容器组件
export default connect(
    state=>({count:state.count,peops:state.person.length}),
    // mapDispatchToProps精简写法
    {
        add:createIncrementAction,
        jian:createDecrementAction,
        addAsync:createIncrementAsyncAction
    }
)(Count);



