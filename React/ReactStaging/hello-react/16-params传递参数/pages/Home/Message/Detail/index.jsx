import React, { Component } from 'react'

const DetailData=[
    {id:'1',content:'你好,世界'},
    {id:'2',content:'你好,world'},
    {id:'3',content:'你好,found'}
]
export default class Detail extends Component {
  render() {
    const {id,title}= this.props.match.params;
    console.log(this.props);
    const findResult = DetailData.find((datailObj)=>{
        return datailObj.id === id //不能全等
    })
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
