import React, { Component,PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {
    state={
        carName:'五菱'
    }

    changeCar=()=>{
        this.setState({
            carName:'买巴特'
        })
    }

    // 阀门勾子
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.props,this.state);//目前的props和state
    //     console.log(nextProps,nextState);//接下来要变的目标props和目标state
    //     if (this.state.carName===nextState.carName) {
    //         return false
    //     }else{
    //         return true
    //     }
    // }



  render() {
      const {carName}= this.state
    console.log('Parent');
    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        <span>车名字:{carName}</span><br />
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName={carName}/>
      </div>
    )
  }
}

class Child extends PureComponent {

    // 阀门勾子
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.props,this.state);//目前的props和state
    //     console.log(nextProps,nextState);//接下来要变的目标props和目标state
    //     if (this.props.carName===nextProps.carName) {
    //         return false
    //     }else{
    //         return true
    //     }
    // }



    render() {
        console.log('Child');
      return (
        <div className='child'>
          <h3>我是Child组件</h3><br />
          <span>我就收到的车是{this.props.carName}</span>
        </div>
      )
    }
  }
  
