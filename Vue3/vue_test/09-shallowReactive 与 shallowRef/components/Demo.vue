<template>
  <h4>当前x:{{x}}</h4>
  <button @click="x++">点我++</button>
  <hr>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>薪资:{{obj.a}}k</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="obj.a++">涨薪</button>
</template>

<script>
import {reactive,ref, toRef ,toRefs,shallowReactive,shallowRef} from 'vue'
export default {
  name: 'Demo',
  setup(){
    // let person = shallowReactive({}) 仅仅考虑对象类型第一层
    // let x = shallowRef(0)  仅限传入的值为对象以外的数据类型(基本数据类型)
    let person = shallowReactive({
      name:'张三',
      age:10,
      obj:{
        a:20
      }
    })

    let x = shallowRef(0)

    return {
      x,
      ...toRefs(person)
    }

  },
}
</script>
