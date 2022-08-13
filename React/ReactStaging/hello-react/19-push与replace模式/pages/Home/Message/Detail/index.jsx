import React, { Component } from 'react'
// import qs from 'query-string'

const DetailData=[
    {id:'1',content:'你好,世界'},
    {id:'2',content:'你好,world'},
    {id:'3',content:'你好,found'}
]
export default class Detail extends Component {
  render() {
    //   1.接收params参数
    // const {id,title}= this.props.match.params;

    //   2.接收search参数
    // console.log(this.props);
    // const {search} = this.props.location;
    // const {id,title} = qs.parse(search.slice(1))

    //   3.接收state参数
    console.log(this.props);
    const {id,title} = this.props.location.state || {}





    const findResult = DetailData.find((datailObj)=>{
        return datailObj.id === id //不能全等
    }) || {}
    // console.log(findResult);
    return (
        <ul>
            <li>ID:{id}</li>
            <li>TITLE:{title}</li>
            <li>CONTENT:{findResult.content}</li>
        </ul>
    )
  }
}
