import React from 'react'
import { useSearchParams } from 'react-router-dom'



export default function Detail() {

  const [search,setSearch] = useSearchParams() 
  const id = search.get('id');
  const title = search.get('title');
  const content = search.get('content');

  return (
    <div>
      <ul>
          <li>
              <button onClick={()=>setSearch('id=10080&title=haha&content=xixi')}>点我更改</button>
          </li>
          <li>id:{id}</li>
          <li>title:{title}</li>
          <li>content:{content}</li>
      </ul>
    </div>
  )
}
