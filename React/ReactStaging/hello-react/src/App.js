import React, { Component } from 'react'
// 引入你想使用的组件
import {Button,DatePicker,ConfigProvider} from 'antd'
// 引入官方样式
import 'antd/dist/antd.css'
// 引入语言包 官方默认英文
import zhCN from 'antd/es/locale/zh_CN';
// 引入你想使用的icon图标组件
import {
  GithubOutlined
} from '@ant-design/icons'

export default class App extends Component {
  // 根据官方api配置方法
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Button type="primary">Primary Button</Button>
        <GithubOutlined style={{fontSize:'50px'}}/>
        <ConfigProvider locale={zhCN}>
          <DatePicker onChange={this.onChange} />
        </ConfigProvider>
      </div>
    )
  }
}
