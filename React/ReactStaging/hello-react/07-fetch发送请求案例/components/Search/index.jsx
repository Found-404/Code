import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

  search = async ()=>{
    // 解构赋值的连续写法
    // keyWordElement是未被定义的
    const {keyWordElement:{value}}=this

    // 发送请求前通知List更新状态
    
    PubSub.publish('change',{isFirst:false,isLoading:true})

    // 发送网络请求
    // axios.get(`https://api.github.com/search/users?q=${value}`).then(
    //   (res)=>{
    //     console.log('成功了',res);
    //     // this.props.saveUser(res.data.items)
    //     // 通知List更新状态
    //     // this.props.updateAppState({isFirst:false,users:res.data.items,isLoading:false})
    //     PubSub.publish('change',{isFirst:false,users:res.data.items,isLoading:false})
    //   },
    //   (error)=>{
    //     console.log('失败了');
    //     // 通知List更新状态
    //     // this.props.updateAppState({isFirst:false,err:error.message})
    //     PubSub.publish('change',{isFirst:false,err:error.message})
    //   }
    // )
    // 使用fetch发送网络请求

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${value}`)
      const data = await response.json();
      // console.log(data);
      PubSub.publish('change',{isFirst:false,users:data.items,isLoading:false})
    } catch (error) {
      console.log('请求出错',error);
      PubSub.publish('change',{isFirst:false,err:error.message})
    }


    // 使用fetch发送网络请求(未优化版本)
    // fetch(`https://api.github.com/search/users?q=${value}`).then(
    //   res=>{
    //     console.log('联系服务器成功');
    //     return res.json();
    //   },
    //   // error=>{
    //   //   console.log('联系服务器失败');
    //   //   // 如果第一个then没有返回值，那么它会返回一个undefined，
    //   //   // 而undefined所在的.then返回的promise则是一个成功状态的promise
    //   //   // 使用return new Promise();返回一个初始状态的Promise实例，则下面的then则不会走了
    //   //   return new Promise();
    //   // }
    // ).then(
    //   ress=>{
    //     // console.log(ress.items);
    //     PubSub.publish('change',{isFirst:false,users:ress.items,isLoading:false})
    //   },
    //   // error=>{
    //   //   console.log('获取数据失败');
    //   //   PubSub.publish('change',{isFirst:false,err:error.message})
    //   // }
    // ).catch((error)=>{
    //   console.log(error);
    // })

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
