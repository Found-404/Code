import React, { Component } from 'react'
import Detail from './Detail';
import {Link,Route} from 'react-router-dom'

export default class Message extends Component {
  state={
    messageArr:[
      {id:'1',title:'消息1'},
      {id:'2',title:'消息2'},
      {id:'3',title:'消息3'}
    ]
  }


  replaceShow=(id,title)=>{
    // 编写一段代码，让其实现跳转到Detail组件，且为replace跳转
    // replace跳转+携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);

    // replace跳转+携带search参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);

    // replace跳转+携带state参数
    this.props.history.replace(`/home/message/detail`,{id,title});
  }
  pushShow=(id,title)=>{
    // push跳转+携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`);

    // push跳转+携带search参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);

    // replace跳转+携带state参数
    this.props.history.push(`/home/message/detail`,{id,title});
  }

  back=()=>{
    this.props.history.goBack();
  }
  forword=()=>{
    this.props.history.goForward();
  }
  go=()=>{
    this.props.history.go(2);
  }



  render() {
    const {messageArr} = this.state
    return (
       <div>
            <ul>
                {
                  messageArr.map((msgObj)=>{
                    return (
                    <div>
                        <li key={msgObj.id}>
                          {/* 向路由组件传递params参数 */}
                          {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                          &nbsp;<button onClick={()=>this.pushShow(msgObj.id,msgObj.title)}>push查看</button>
                          &nbsp;<button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
                          {/* 向路由组件传递search参数 */}
                          {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
  
                          {/* 向路由组件传递state参数 */}
                          <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                        </li>
                    </div>
                    )
                  })
                }

            </ul>
            <hr/>
            {/* 声明接收params */}
            {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

            {/* 声明接收search参数 无需接收 */}
            {/* <Route path="/home/message/detail" component={Detail}/> */}

            {/* 声明接收state参数 无需接收 */}
            <Route path="/home/message/detail" component={Detail}/>

            <button onClick={this.back}>回退</button>&nbsp;
            <button onClick={this.forword}>前进</button>&nbsp;
            <button onClick={this.go}>GO</button>
      </div>
    )
  }
}
