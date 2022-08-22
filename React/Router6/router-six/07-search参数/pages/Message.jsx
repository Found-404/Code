import React,{useState}from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function Message() {
  const [message] = useState([
    {id:'001',title:'消息1',content:'one'},
    {id:'002',title:'消息2',content:'two'},
    {id:'003',title:'消息3',content:'three'},
  ])

  return (
    <div>
          <ul>
              {
                message.map((m)=>{
                  return (
                    <li key={m.id}>
                      <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>
                    </li>
                  )
                })
              }
          </ul>
          <hr />
          {/* 指定路由组件的展示位置 */}
          <Outlet/>
    </div>
  )
}
