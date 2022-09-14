import React from 'react'
import {withRouter} from 'next/router';
import Link from 'next/link'
import axios from 'axios';



const Chuancan = ({router,data})=>{
    return (
        <>
            <div>{router.query.name}</div>
            <div>
                {
                    data.map(ele=>{
                        return <p key={ele.title}>{ele.title}</p>
                    })
                }
            </div>
            <Link href='/'><a>返回首页</a></Link>
        </>
    )
}

Chuancan.getInitialProps = async ()=>{
    const promise = new Promise((resolve)=>{
        axios('http://192.168.210.146:9527/api/goodList?page=1').then((res)=>{
            console.log('数据:',res);
            resolve(res)
        })
    })

    return await promise
}



export default withRouter(Chuancan)
