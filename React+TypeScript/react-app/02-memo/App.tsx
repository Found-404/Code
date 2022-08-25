import React,{useState,memo} from 'react'


// 缓存组件 memory
const Sub = memo(()=>{
  console.log('子组件被触发');

  return <p>子组件被触发</p>
})

const App = () => {
  const [num,setnum] =useState(0);

  const handleClick = ()=>{
    setnum(num+1)
  }

  return (
    <div>
      <h2>{num}</h2>
      <button onClick={handleClick}>累加</button>
      <Sub/>
    </div>
  )
}

export default App
