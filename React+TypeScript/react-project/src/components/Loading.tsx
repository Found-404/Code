import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import './less/Loading.less'

function Loading() {
  return (
    <div className='loading'>
        <LoadingOutlined style={{color:'#40a9ff',fontSize:"80px"}}/>
    </div>
  )
}

export default Loading
