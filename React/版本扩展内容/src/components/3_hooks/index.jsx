import React from 'react'
// 引入ReactDOM渲染页面
// import ReactDOM from 'react-dom';


// 引入root的路径自己根据情况更改
import root from '../../index'


// 类式组件
// class Demo extends React.Component {
//     state={
//         count:0
//     }
//     myRef = React.createRef()

//     add=()=>{
//         this.setState((state)=>{
//             return {
//                 count:state.count+1
//             }
//         })
//     }

//     show=()=>{
//         alert(this.myRef.current.value)
//     }

//     unmount=()=>{      
//         //在要执行卸载的组件的方法中执行这个方法
//         root.unmount()
//     }

//     componentDidMount(){
//         this.timer = setInterval(() => {
//             this.setState(state=>({count:state.count+1}))
//         }, 400);
//     }
//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef}/>
//         <h2>当前求和{this.state.count}</h2>
//         <button onClick={this.add}>点我加一</button>
//         <button onClick={this.unmount}>卸载组件</button>
//         <button onClick={this.show}>点击提示数据</button>
//       </div>
//     )
//   }
// }

function Demo() {

    const [count,setCount] = React.useState(0); //数组
    const myRef =  React.useRef();

    function show() {
        alert(myRef.current.value)
    }




    // 定时器
    React.useEffect(()=>{
        let timer = setInterval(() => {
            setCount(count=>count+1)
        }, 400);
        return ()=>{
            clearInterval(timer)
        }
    },[])


    // 加的回调
    function add() {
        // setCount(count+1)//第一种写法
        setCount((count)=>{
            return count+1
        })
    }

    // 卸载组件的回调
    function unmount(){
        //在要执行卸载的组件的方法中执行这个方法
        root.unmount()
    }


    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和:{count}</h2>
            <button onClick={add}>点我加一</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}

export default Demo