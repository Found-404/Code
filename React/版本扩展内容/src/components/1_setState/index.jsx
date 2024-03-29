import React, { Component } from 'react'

export default class Demo extends Component {
    state={
        count:0
    }

    add=()=>{
        // 对象式setState
        // 1.获取原来的count值
        // const {count} = this.state
        // 2.更新状态
        // this.setState({count:count+1},()=>{
        //     // 这个回调在render更新后触发
        //     console.log(this.state.count);
        // })

        // 函数式setState
        this.setState((state,props)=>{
            return {
                count:state.count + 1
            }
        },()=>{
            console.log(this.state.count);
        })
    }


  render() {
    return (
      <div>
        <h1>当前求和为:{this.state.count}</h1>
        <button onClick={this.add}>点我加一</button>
      </div>
    )
  }
}
