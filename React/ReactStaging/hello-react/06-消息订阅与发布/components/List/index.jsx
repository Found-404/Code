import React, { Component } from 'react'
import PubSub from 'pubsub-js'


export default class List extends Component {

  state = {
    users:[],//初始化users
    isFirst:true,//是否为第一次打开页面
    isLoading:false,//标识是否处于加载中
    err:''// 储存请求相关的错误信息
  }

  // 组件挂载完毕钩子
  componentDidMount(){
    this.token = PubSub.subscribe('change',(msg,data)=>{
       this.setState(data)
    })
  }

  // 组件将要销毁钩子
  componentWillUnmount(){
    PubSub.unsubscribe(this.token);
  }

  render() {
    const {users,isFirst,isLoading,err}=this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用</h2> :
          isLoading ? <h2>Loading...</h2> :
          err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((usersObj)=>{
            return (
              <div key={usersObj.id} className="card">
                  <a rel="noreferrer" href={usersObj.html_url} target="_blank">
                    <img alt='pop' src={usersObj.avatar_url} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">{usersObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
