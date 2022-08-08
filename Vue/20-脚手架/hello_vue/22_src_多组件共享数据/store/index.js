// 该文件用于创建vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex';

// 使用Vuex插件
Vue.use(Vuex);

// 准备actions
// 用于响应组件中的动作
const actions = {
    // jia(context, value) {
    //     // console.log('actions中的jia被调用', context, value);
    //     // context 上下文
    //     // value   组件传递过来的值
    //     context.commit('JIA', value);
    // },
    // jian(context, value) {
    //     context.commit('JIAN', value);
    // },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value);
        }
    },
    jiaWite(context, value) {
        setTimeout(() => {
            context.commit('JIA', value);
        }, 300);
    }
};

// 准备Mutations
// 用于操作数据(state)
const mutations = {
    JIA(state, value) {
        // console.log('mutations中的JIA被调用', state, value);
        // state  存放sum数据的容器
        // value  传递的值
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, personObj) {
        state.personList.unshift(personObj);
    }
};

// 准备state
// 用于存储数据
const state = {
    sum: 1, //当前的和
    school: 'FOUND',
    subject: '前端',
    personList: [
        { id: '001', name: '张三' }
    ]
};

// getters
// 用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});