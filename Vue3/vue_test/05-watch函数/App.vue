<template>
  <h2>当前求和:{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前信息为:{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
</template>

<script>
import { ref,watch,reactive } from 'vue'
export default {
  name: 'App',
  watch:{
    // 简写：
    // sum(newValue,oldValue){
    //   console.log('sum值变化',newValue,oldValue);
    // }
    // 完整写法:
    // sum:{
    //   immediate:true, //默认执行一次
    //   deep:true, //深度监视
    //   handler(newValue,oldValue){
    //     console.log('sum值变化',newValue,oldValue);
    //   }
    // }
  },

  setup(){
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name:'张三',
      age:10
    })

    // 监视 
    // 情况一：监视ref所定义的一个响应式数据
    // watch(sum,(newvalue,oldvalue)=>{
    //   console.log('sum值变化',newvalue,oldvalue);
    // },{immediate:true,deep:true})

    // 情况二：监视ref所定义的多个响应式数据
    // watch([sum,msg],(newvalue,oldvalue)=>{
    //   console.log('多个值变化',newvalue,oldvalue);
    // })

    // 情况三：监视复杂数据类型
    //   注意：此处无法正确的获取oldValue
    //   注意：强制开启了深度监视(deep配置无效)
    // watch(person,(newvalue,oldvalue)=>{
    //   console.log('多个值变化',newvalue,oldvalue);
    // },{deep:false}) //deep配置无效

    // 情况四：监视reactive所定义的一个响应式数据中的某个属性
    // watch(()=>person.age,(newvalue,oldvalue)=>{
    //   console.log('age值变化',newvalue,oldvalue);
    // })

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    // watch([()=>person.name,()=>person.age],(newvalue,oldvalue)=>{
    //   console.log('age值变化',newvalue,oldvalue);
    // })

    // 返回一个对象(常用)
    return {
      msg,
      sum,
      person
    }
  },
}
</script>
