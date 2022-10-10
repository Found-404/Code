import { request } from "umi"
// 获取标签数据
const getTags = ()=>{
    return request('/api/tags')
}

export default {
    // 效用model的时候,通过命名空间调用,不要和其他model同名
    namespace: 'tags',
    // 状态,跟react中的state类似,和redux中保存的state一样
    state: {
        tagsList:[]
    },
    // 调用服务端接口,获取数据
    effects: {
        // payload：UI调用model传递的参数
        // callback：回调函数，执行其他操作就可以使用这个回调函数
        // put：将数据传递给reducers
        // call：访问外部的方法
        *fetchTags({payload,callback}:any,{put,call}:any){
            // 获取tags数据
            const response = yield call(getTags)

            // 调用reducers,传递数据
            yield put({
                type:'setTagList', // 类似于redux中action的type
                payload:response
            })
        }
    },
    // 更新 state
    reducers: {
        setTagList(state:any,action:any){
            return {...state,tagsList:action.payload}
        }
    },
}