import React, { Component } from 'react'
import './index.css'

// 创建Context对象
const UserNameContext = React.createContext();
const {Provider,Consumer} = UserNameContext


export default class A extends Component {
    state={
        username:'Tom',
        age:18
    }

  render() {
      const {username,age} = this.state
    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>我的用户名是{username}</h4>
        <h4>我的年龄是{age}</h4>
        {/* <B username={this.state.username}/> */}
        
        <Provider value={{username,age}}>
            <B/>
        </Provider>

      </div>
    )
  }
}

class B extends Component {
    render() {
      return (
        <div className='child'>
             <h3>我是B组件</h3>
             {/* <h4>我从A组件接收到的名字是:{this.props.username}</h4> */}
             <C/>
        </div>
      )
    }
}

// class C extends Component {
//     // 声明接收context
//     static contextType = UserNameContext

//     render() {
//       //console.log(this); //C组件实例对象身上的context
//       const {username,age}=this.context
//       return (
//         <div className='grand'>
//              <h3>我是C组件</h3>
//              <h4>
//                  我从A组件接收到的名字是:{username}
//                  年龄是:{age}
//              </h4>
//         </div>
//       )
//     }
// }


function C() {
      return (
        <div className='grand'>
             <h3>我是C组件</h3>
             <h4>
                 我从A组件接收到的名字是:
                 <Consumer>
                     {
                         value =>{
                             return `${value.username},年龄是${value.age}`
                         }
                     }
                 </Consumer>
             </h4>
        </div>
      )
}
