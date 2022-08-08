// 该文件用于创建vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex';
// 引入axios
import axios from 'axios';
import { nanoid } from 'nanoid';


// 使用Vuex插件
Vue.use(Vuex);

// 求和相关的配置
const countOptions = {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 1, //当前的和
        school: 'FOUND',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
};
// 人员管理相关的配置
const peopleOptions = {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {

            }
        },
        addPersonServer(context) {
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data });
                },
                error => {
                    alert(error.message);
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            state.personList.unshift(personObj);
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
};


// 创建并暴露store
export default new Vuex.Store({

    // 模块化
    modules: {
        a: countOptions,
        b: peopleOptions
    }

});