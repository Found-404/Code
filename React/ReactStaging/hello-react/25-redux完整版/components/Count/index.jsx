import React, { Component } from 'react'
// 引入store 获取redux中的状态
import store from '../../redux/store';

// 引入actionCreator专门用于创建action对象
import {
    createIncrementAction,
    createDecrementAction
} from '../../redux/count_action'


export default class Count extends Component {
    state={
        carName:'组件自己用的数据(不用在意)'
    }

    // 组件挂载完毕的钩子
    // componentDidMount(){
    //     // 监测redux中状态的变化只要变化就调用render
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }


    // 加
    increment = ()=>{
        const {value} =this.selectNumber
        // const {count} =this.state
        // this.setState({count:count + value*1})
        // 通知redux加value
        store.dispatch(createIncrementAction(value*1))
    }
    // 减
    decrement = ()=>{
        const {value} =this.selectNumber
        // const {count} =this.state
        store.dispatch(createDecrementAction(value*1))
    }
    // 奇数加
    incrementIfOdd = ()=>{
        const {value} =this.selectNumber
        const count =store.getState()
        if (count % 2!== 0) {
            store.dispatch(createIncrementAction(value*1))
        }
    }
    // 异步加
    incrementAsync = ()=>{
        const {value} =this.selectNumber
        // const {count} =this.state
        setTimeout(() => {
            store.dispatch(createIncrementAction(value*1))
        }, 500);
    }

  render() {
    return (
      <div>
        <h1>当前求和：{store.getState()}</h1>&nbsp;
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
