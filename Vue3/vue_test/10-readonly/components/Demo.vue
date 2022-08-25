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
import {reactive,toRefs,shallowRef,readonly,shallowReadonly} from 'vue'
export default {
  name: 'Demo',
  setup(){ 
    let x = shallowRef(0);
    let person = reactive({
        name:'张三',
        age:10,
        obj:{
          a:20
        }
    })

    // 修改person使其不能被修改仅仅只读
    // person = readonly(person)

    // 修改person使其不能被修改仅仅只读第一层,但是obj下面的a是可以修改的
    person = shallowReadonly(person)


    return {
      x,
      ...toRefs(person)
    }

  },
}
</script>
