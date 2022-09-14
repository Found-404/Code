import React from 'react'
import { Redirect } from 'umi';

const auth = (props:any) => {
  const isLoadin = true;
  if (isLoadin) {
      return <div>{props.children}</div>
  }else{
      return <Redirect to="/"/>
  }
}

export default auth
