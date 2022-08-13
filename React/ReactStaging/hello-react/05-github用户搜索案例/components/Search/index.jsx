import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search=()=>{
    // 解构赋值的连续写法
    // keyWordElement是未被定义的
    const {keyWordElement:{value}}=this

    // 发送请求前更新app更新状态
    this.props.updateAppState({isFirst:false,isLoading:true})

    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      (res)=>{
        // console.log('成功了',res.data);
        // this.props.saveUser(res.data.items)
        // 请求成功通知app更新状态
        this.props.updateAppState({isFirst:false,users:res.data.items,isLoading:false})
      },
      (error)=>{
        console.log('失败了');
        this.props.updateAppState({isFirst:false,err:error.message})
      }
    )
  }


  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索GitHub用户</h3>
            <div>
                 <input ref={c => this.keyWordElement=c} type="text" placeholder="输入关键词搜索"/>&nbsp;
                 <button onClick={this.search}>搜索</button>
            </div>
        </section>
    )
  }
}
