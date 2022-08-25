import React,{useState} from 'react'

// 定义接口
interface IProps {
    count:number;
    setcount:(count:number)=>void
}

// 定义传递参数的数据类型
// const Sub = (props:IProps)=>{
//     return (
//         <h2>数字为:{props.count}</h2>
//     )
// }

const Sub:React.FC<IProps> = (props)=>{
    
    return (
        <>
            <h2>数字为:{props.count}</h2>
            <button onClick={()=>props.setcount(props.count+1)}>点击</button>
        </>)
}

// 将当前组件声明为 Function Component
const App1:React.FC = () => {
  const [count,setcount] = useState<number>(0);


  return (
    <div>
      <Sub count={count} setcount={setcount}/>
    </div>
  )
}

export default App1
