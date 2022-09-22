// 1.创建一个UI组件

// 2.创建 model

// 3.将UI组件和model进行链接

import React from 'react';

import { connect } from 'umi';
import { Button } from 'antd';

const dva = (props) => {
  // console.log(props);
  const {dispatch} = props;
  const getData = ()=>{
    // 使用model更新获取数据
    dispatch({
        type:'tags/fetchTags',  // model的命名空间 / 方法
        payload:null
    })
  }
  return (
    <div>
      <h1>Dva组件</h1>
      <Button onClick={getData}>获取列表数据</Button>
    </div>
  )
}

export default connect(( {tags} )=>({tags}))(dva);
