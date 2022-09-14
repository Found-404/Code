import styles from './index.less';
import { DatePicker } from 'antd';


export default function IndexPage(props:any) {
  console.log(props);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <p>{props.match.params.id}</p>
      <DatePicker/>
    </div>
  );
}
