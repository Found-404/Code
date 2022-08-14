// 该文件专门用于暴露一个store对象，整个应用只有一个store对象


// 引入createStore专门用于创建redux中最为核心的store对象
// 旧版：import {createStore} from 'redux'
// 现在要这样写
import { legacy_createStore as createStore,applyMiddleware,combineReducers } from "redux"; 


// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';

// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'


// 引入为Count组件服务的reducer
import countReducer from './reducers/reducer'
// 引入为Count组件服务的reducer
import personReducer from './reducers/person'

// 汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
    count:countReducer,
    person:personReducer
});

// 暴露store
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)));