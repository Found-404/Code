<template>
    <input type="text" v-model="keyWord"/>
    <h3>{{keyWord}}</h3>
</template>

<script>
import { ref,customRef } from 'vue'

export default {
    name: "App",
    setup() {
        // 自定义一个ref
        function myRef(value) {
            let timer;
            return customRef((track,trigger)=>{
                return {
                    get(){
                        // 有人读取这个value
                        track();// 通知Vue追踪数据的变化(提前和get商量，让其认为value是有用)
                        return value
                    },  
                    set(newValue){
                        // 有人要修改这个value
                        clearTimeout(timer);
                       timer = setTimeout(()=>{
                            value = newValue
                            trigger()//通知vue重新解析模板
                       },500)
                    }
                }
            });
        }


        // let keyWord = ref('Hello'); //使用Vue提供的ref
        let keyWord = myRef('Hello'); //使用程序员自定义的ref
        return {
            keyWord,
        };
    },
}
</script>
