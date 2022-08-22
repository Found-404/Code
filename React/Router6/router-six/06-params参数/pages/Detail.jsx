import React from 'react'
import { useParams } from 'react-router-dom'



export default function Detail() {

  const {id,title,content} = useParams() 

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
