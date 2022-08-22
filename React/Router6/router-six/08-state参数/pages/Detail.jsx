import React from 'react'
import { useLocation } from 'react-router-dom'



export default function Detail() {

    const {state:{id,title,content}} =useLocation()


  return (
    <div>
      <ul>
          <li>id:{id}</li>
          <li>title:{title}</li>
          <li>content:{content}</li>
      </ul>
    </div>
  )
}
