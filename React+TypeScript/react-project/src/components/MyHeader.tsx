import React from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';






export default function MyHeader() {

const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="!#" onClick={(e)=>e.preventDefault()}>
              修改资料
            </a>
          ),
        },
        {
          type: 'divider',
        },
        {
          key: '2',
          danger: true,
          label: '退出登录',
        },
      ]}
    />
);


  return (
    <header className="header">
      <div className='logo'>
        <h1 style={{fontWeight:800,margin:0}}>后台管理</h1>
      </div>
      <div className='right'>
        <Dropdown overlay={menu}>
          <a onClick={e => e.preventDefault()}>
            <Space>
              <img className='userImg' src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.pp-sp.com%2FUploadFiles%2Fimg_2_188149577_2949073731_26.jpg&refer=http%3A%2F%2Fwww.pp-sp.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664173819&t=2a0f540469e157931baba2f6d3a335fc" alt="" />
              Hover me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </header>
  )
}

