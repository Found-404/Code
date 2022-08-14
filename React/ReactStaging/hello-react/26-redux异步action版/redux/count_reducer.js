// 1.该组件用于创建一个为Count组件服务的reducer。reducer的本质就是一个函数
// 2.reducer函数会接到连个参数分别是：
//          1.之前的状态（preState）
//          2.动作对象（action）

import {INCREMENT,DECREMENT} from './constant'

// 组件初始化状态为0
const initState = 0;
export default function countReducer(preState = initState,action) {
    // 从action对象中获取：type，data
    const {type,data} = action;
    // 根据type决定如何加工数据
    switch (type) {
        case INCREMENT: //如果是加
            return preState + data;
        case DECREMENT: //如果是减
            return preState - data;
        default:
            return preState;
    }
}