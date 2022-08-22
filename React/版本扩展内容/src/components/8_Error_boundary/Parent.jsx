import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state={
    hasError:''//用于标识子组件是否产生错误
  }

  // 当Parent的子组件出现报错时，会触发getDerivedStateFromProps调用
  // 并携带错误信息
  static getDerivedStateFromProps(error){
    console.log(error);
    return {hasError:error}
  }

  // 此勾子在渲染组件时出错被调用
  componentDidCatch(){
    console.log('统计错误此处,反馈服务器,用于通知编码人员进行bug的解决');
  }



  render() {
    return (
      <div>
        <h1>我是parent组件</h1>
        {this.state.hasError?<h2>当前网络不稳定,稍后重试</h2>:<Child/>}
      </div>
    )
  }
}
