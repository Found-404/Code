<template>
        <section>
          <!-- 正在进行的 -->
          <h2>正在进行
            <span id="todocount" >{{calculate()}}</span>
          </h2>
          <ol id="todolist" class="demo-box">
     <transition-group 
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceInLeft"
      leave-active-class="animate__fadeOutDown"
      >
            <List v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todoList="todoObj"
            v-show="!todoObj.done"
            />
      </transition-group>
          </ol>
          <!-- 已经完成的 -->
          <h2>已经完成
            <span id="donecount">{{todos.length - calculate()}}</span>
          </h2>
          <ul id="donelist">
    <transition-group 
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeInDown"
      leave-active-class="animate__fadeOutDown"
      >
            <List v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todoList="todoObj"
            v-show="todoObj.done"
            />
      </transition-group>
          </ul>
      </section>
</template>

<script>
// 引入组件
import 'animate.css';

import List from "./List";

export default {
    name:'MyItem',
    props:['todos'],
    components:{
        List
    },
    methods: {
      // 获取done为false的数量
      calculate(){
        let index=0;
        this.todos.forEach(ele => {
          if (ele.done==false) {
            index++
          }
        });
        // console.log(index);
        return index;
      },


    },
}
</script>

<style>

</style>