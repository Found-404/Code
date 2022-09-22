import type { DatePickerProps } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import React from 'react';
import styles from './index.less';
import { Space,DatePicker ,Button} from 'antd';
import { request } from 'umi';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const IndexPage:React.FC =(props:any)=> {

  const [size, setSize] = React.useState<SizeType>('large');

  const getData = async()=>{
    // 请求数据
    // 1.写法一
    // request('/api/index').then(res=>{
    //   console.log(res);
    // })
    // 2.写法二
    const data = await request('/api/tags');
    console.log(data);
    
  }

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <p>{props.match.params.id}</p>
      <Space direction="vertical">
        {/* <DatePicker onChange={onChange} picker="week"/> */}
      </Space>

      <Button type="primary" size={size} onClick={getData}>
        点我获取数据
      </Button>
    </div>
  );
}

export default IndexPage
