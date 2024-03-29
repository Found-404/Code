import React, { Component } from 'react'
import Detail from './Detail';
import {Link,Route} from 'react-router-dom'

export default class Message extends Component {
  state={
    messageArr:[
      {id:1,title:'消息1'},
      {id:2,title:'消息2'},
      {id:3,title:'消息3'}
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
       <div>
            <ul>
                {
                  messageArr.map((msgObj)=>{
                    return (
                      <li key={msgObj.id}>
                        {/* 向路由组件传递params参数 */}
                        {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                        {/* 向路由组件传递search参数 */}
                        <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>

                      </li>
                    )
                  })
                }
            </ul>
            <hr/>
            {/* 声明接收params */}
            {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

            {/* 声明接收search参数 无需接收 */}
            <Route path="/home/message/detail" component={Detail}/>

      </div>
    )
  }
}
