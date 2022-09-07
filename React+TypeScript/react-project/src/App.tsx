import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom';
import { UserOutlined, UnorderedListOutlined, SettingOutlined,FormOutlined,TeamOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import MyHeader from 'components/MyHeader';
import './App.less'


const { Content, Sider } = Layout;


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
export default function App(){

  const navigate = useNavigate();

  const items2: MenuProps['items'] = [
    getItem('查看文章列表', 'list', <UnorderedListOutlined />),
  
    getItem('文章编辑', 'edit', <FormOutlined />),
  
    getItem('修改资料', 'means', <SettingOutlined />),
  
    getItem('管理员', 'opBox', <UserOutlined />, [
      getItem('小编名单', 'op',<TeamOutlined />),
    ]),
  ];


  function clickMenu(ev:{
    key:string
  }){
      console.log(ev.key);
      navigate('/'+ev.key)
  }
  

  return (
    <Layout className='container'>
      <MyHeader/>
      <Layout className='container_content'>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['list']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
            theme="dark"
            onSelect={(ev)=>clickMenu(ev)}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background section"
            style={{
              padding: 5,
              margin: 0,
              minHeight: 280,
              overflow:""
            }}
          >
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
  
      <footer style={{
        textAlign:'center',
        color:'#fff',
        height:'70px',
        lineHeight:'70px',
        backgroundColor:'#001529',
        zIndex:1000
      }}>Lorem ipsum dolor sit amet consectetur ...</footer>
    </Layout>
  );
}
