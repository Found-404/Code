<template>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>薪资:{{obj.a}}k</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="obj.a++">涨薪</button>
</template>

<script>
import {reactive, toRef ,toRefs} from 'vue'
export default {
  name: 'Demo',
  setup(){
    let person = reactive({
      name:'张三',
      age:10,
      obj:{
        a:20
      }
    })
    // ---toRef写法---
    // 模板中直接使用
    // return {
    //   name:toRef(person,'name'),
    //   age:toRef(person,'age'),
    //   a:toRef(person.obj,'a'),
    // }

    // ---toRefs写法---
    // 虽然只会展开一层，但是也省去很多重复
    return {
      ...toRefs(person)
    }

  },
}
</script>
