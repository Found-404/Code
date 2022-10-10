import React from 'react'
import { Redirect } from 'umi';

const auth = (props:any) => {
  // 路由鉴权，判断当前为登陆状态
  const isLoadin = true;

  if (isLoadin) {
      return <div>{props.children}</div>
  }else{
      return <Redirect to="/login"/>
  }
}

export default auth
