import React,{useState} from 'react'

import {Navigate} from 'react-router-dom'


export default function Home() {
  const [sum,setSum] = useState(1)
  return (
    <div>
      <h1>我是Home</h1>
      {sum === 2 ? <Navigate to="/about" replace/> : <h4>当前sum值:{sum}</h4>}
      <button onClick={()=>setSum(2)}>点我将sum变为2</button>
    </div>
  )
}
