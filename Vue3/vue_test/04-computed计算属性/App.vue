<template>
  <h1>一个人的信息</h1>
  <span>姓:</span>
  <input type="text" v-model="person.firstName">
  <br>
  <span>名:</span>
  <input type="text" v-model="person.name">
  <br>
  <span>全名：{{person.fullName}}</span>
  <br>
  <input type="text" v-model="person.fullName">
</template>

<script>
import { reactive,computed } from 'vue'
export default {
  name: 'App',
  // 此处只是测试setup 暂时不考虑响应式

  // Vue2计算属性
  // computed:{
  //   fullname(){
  //     return this.person.firstName+this.person.name
  //   }
  // },

  setup(){
    // 数据
    let person = reactive({
      firstName:'张',
      name:'三'
    })

    // 计算属性-简写形式(没有考虑计算属性被修改的情况)
    // person.fullName = computed(()=>{
    //   return person.firstName + person.name
    // })

    // 计算属性-完整写法(考虑计算属性被修改的情况)
    person.fullName = computed({
      get(){
        return person.firstName +'-'+ person.name
      },
      set(value){
        const nameArr = value.split('-')
        person.firstName= nameArr[0]
        person.name = nameArr[1]
      }
    })


    // 返回一个对象(常用)
    return {
      person,
    }
  },
}
</script>
