import React,{useState} from 'react';


function Jspang() {
    const [color,setColor] = useState();


    const changeColor=()=>{
        setColor(color==='blue'?'red':'blue')
    }

    return (
        <>
            <div>测试文本</div>
            <div><button onClick={changeColor}>改变颜色</button></div>

            <style jsx>
                {`
                    div{color:${color};}               
                `}
            </style>
        </>
    )
}

export default Jspang