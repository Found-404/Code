<template>
  <h4>当前x:{{x}}</h4>
  <button @click="x++">点我++</button>
  <hr>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>薪资:{{obj.a}}k</h2>
  <h2>宝驾:{{person.car}}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="obj.a++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
</template>

<script>
import {reactive,toRefs,ref,toRaw,markRaw} from 'vue'
export default {
  name: 'Demo',
  setup(){ 
    let x = ref(0);
    let person = reactive({
        name:'张三',
        age:10,
        obj:{
          a:20
        }
    })

    function showRawPerson() {
      // 将被代理处理过的数据还原成原始的数据
      // 仅仅处理reactive生成的
      const p = toRaw(person)
      console.log(p);
    }

    function addCar() {
        let car = {name:"奔驰",price:"40w"}
        // markRaw标记car永远不会成为响应式对象
        person.car = markRaw(car)
    }


    return {
      x,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    }

  },
}
</script>
