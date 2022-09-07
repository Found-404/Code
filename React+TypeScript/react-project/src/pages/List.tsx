import React from 'react'
import { Space, Table, Button  } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export default function List() {

  interface DataType {
    key: string;
    title: string;
    time: number;
    tags: string[];
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: '文章标题',
      dataIndex: 'title',
      key: 'name',
      width:'60%'
    },
    {
      title: '发布时间',
      dataIndex: 'time',
      key: 'time',
      width:'20%'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type='primary'>编辑</Button>
          <Button type='primary' danger>删除</Button>
        </Space>
      ),
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. !',
      time: 32,
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. !',
      time: 42,
      tags: ['loser'],
    },
    {
      key: '3',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. !',
      time: 32,
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. !',
      time: 32,
      tags: ['cool', 'teacher'],
    },
    {
      key: '5',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. !',
      time: 32,
      tags: ['cool', 'teacher'],
    },
    {
      key: '6',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. !',
      time: 32,
      tags: ['cool', 'teacher'],
    },
    {
      key: '7',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. !',
      time: 32,
      tags: ['cool', 'teacher'],
    },
    {
      key: '8',
      title: 'Joe Black',
      time: 32,
      tags: ['cool', 'teacher'],
    },
  ];


  return (
    <div>
      <Table 
      columns={columns} 
      dataSource={data} 
      showHeader={false}
      />
    </div>
  )
}
