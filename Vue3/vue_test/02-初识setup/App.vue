<template>
  <h1>一个人的信息</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>性别:{{sex}}</h2>
  <button @click="sayHello">说话(Vue3配置)</button>
  <br>
  <br>
  <button @click="sayWelcome">说话(Vue2配置)</button>
</template>

<script>
import { h } from 'vue'

export default {
  name: 'App',
  // 此处只是测试setup 暂时不考虑响应式
  setup(){
    // 数据
    let name = '张三'
    let age = 18

    // 方法
    function sayHello(){
      alert(`我叫${name},我${age}岁了,你好啊！`)
    }

    // 返回一个对象(常用)
    return {
      name,
      age,
      sayHello
    }

    // 返回一个函数，我们称之为(渲染函数)
    // return ()=>{
    //   return h('h1','尚硅谷')
    // }
  },

  data() {
    return {
      sex:'男'
    }
  },
  methods:{
    sayWelcome(){
      alert('Hello Vue3')
    }
  }

}
</script>
