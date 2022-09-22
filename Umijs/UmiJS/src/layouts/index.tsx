import React from 'react'
import { Link,NavLink } from 'umi'

const Index = (props:any) => {
  return (
    <div>
      <h1>Header</h1>
      {/* <Link to="/user/one">用户1</Link>
      <Link to="/user/two">用户2</Link> */}
      <hr />
      {/* <NavLink to="/user/one">用户1</NavLink>
      <NavLink to="/user/two">用户2</NavLink> */}

        {props.children}
      {/* <h1>Footer</h1> */}
    </div>
  )
}

export default Index
