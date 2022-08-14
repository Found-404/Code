// 创建一个容器组件
// 引入Count的UI组件
import CountUI from '../../components/Count'

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux';

// 1. mapStateToProps函数返回的是一个对象:
// 2. 返回的对象中的key就作为传递给UI组件props的key, value就作为传递给UI组件props的value
// 3. mapStateToProps用于传递状态
const mapStateToProps = (state)=>{
    return {count:state}
}

// 1. mapDispatchToProps函数返回的是一个对象;
// 2. 返回的对象中的key就作为传递给UI组件props的key, value就作为传递给UI组件props的value
// 3. mapDispatchToProps用于传递操作状态的方法
const mapDispatchToProps = (dispatch)=>{
    return {
        add:(number)=>{
           // 通知redux执行加法
           dispatch(createIncrementAction(number))
        },
        jian:(number)=>{
           dispatch(createDecrementAction(number))
        },
        addAsync:(number,time)=>{
           dispatch(createIncrementAsyncAction(number,time))
        }
    }
}


// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI);



