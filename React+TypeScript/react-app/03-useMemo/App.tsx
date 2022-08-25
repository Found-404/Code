import React,{useState,memo,useCallback,useMemo} from 'react'

interface IProps{
  handleClick:()=>void
}


// 缓存组件 memory
const Sub = memo((props:IProps)=>{
  console.log('子组件被触发');

  return (
   <> 
    <button onClick={props.handleClick}>累加</button>
    <p>子组件被触发</p>
   </>
  )
})

const App = () => {
  const [num,setnum] =useState(0);

  //真正被触发的函数
  const handleClick = useMemo(()=>{
    return ()=> setnum(item=>{
        return item+1
      })
  },[])

  return (
    <div>
      <h2>{num}</h2>
      <Sub handleClick={handleClick}/>
    </div>
  )
}

export default App
