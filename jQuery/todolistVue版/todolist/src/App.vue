<template>
<div>
      <MyHeader @addTodo='addTodo'/>
      <MyItem :todos="todos"/>
      <footer>
          Copyright &copy; 2014 todolist.cn
      </footer>
</div>
</template>

<script>
// 引入组件和脚本
import pubsub from 'pubsub-js';
import MyHeader from "./components/MyHeader.vue";
import MyItem from "./components/MyItem.vue";


export default {
    name: 'App',
    components: {
        MyHeader,
        MyItem
    },
    data() {
      return {
        //   todos:[{id:'01',title:'demo1',done:false}],
          todos:JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    methods: {
      // 添加todo
      addTodo(x){
        //   接收到header传递的数据并添加在todos前面
          this.todos.unshift(x);
      },
      changeId(_,id){
            this.todos.forEach((todo) => {
                if (todo.id == id) {
                    todo.done = !todo.done
                }
            });
      },
      // 删除对应id的todos
      deleteTodos(_,id){
          this.todos=this.todos.filter((todo)=>{
              return todo.id !== id
          })
      }
    },
    //数据监听
    watch:{
        todos:{
            // 深度监听
            deep:true,
            handler(value){
                // value表示被更改后的新数据
                localStorage.setItem('todos',JSON.stringify(value));
                // 将数据储存在本地
            }
        }
    },
    // 挂载完毕钩子
    mounted() {
        this.pubId = pubsub.subscribe('changeId',this.changeId);
        this.pubdelet = pubsub.subscribe('deleteTodos',this.deleteTodos);
    },
    //解绑事件
    beforeDestroy(){
      pubsub.unsubscribe(this.pubId);
      pubsub.unsubscribe(this.pubdelet);
    }

}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    background: #CDCDCD;
}

header {
    height: 50px;
    background: #333;
    background: rgba(47, 47, 47, 0.98);
}

section {
    margin: 0 auto;
}

label {
    float: left;
    width: 100px;
    line-height: 50px;
    color: #DDD;
    font-size: 24px;
    cursor: pointer;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

header input {
    float: right;
    width: 60%;
    height: 24px;
    margin-top: 12px;
    text-indent: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24), 0 1px 6px rgba(0, 0, 0, 0.45) inset;
    border: none
}

input:focus {
    outline-width: 0
}

h2 {
    position: relative;
}
h2,ol,ul{
    transition: all 0.5s ease;
}

#donecount,
#todocount
{
    position: absolute;
    top: 2px;
    right: 5px;
    display: inline-block;
    padding: 0 5px;
    height: 20px;
    border-radius: 20px;
    background: #E6E6FA;
    line-height: 22px;
    text-align: center;
    color: #666;
    font-size: 14px;
}

ol,
ul {
    padding: 0;
    list-style: none;
}
#todolist{
    position: relative;
}
li input {
    position: absolute;
    top: 2px;
    left: 10px;
    width: 22px;
    height: 22px;
    cursor: pointer;
}

p {
    margin: 0;
}

li p input {
    top: 3px;
    left: 40px;
    width: 70%;
    height: 20px;
    line-height: 14px;
    text-indent: 5px;
    font-size: 14px;
}

li {
    height: 32px;
    line-height: 32px;
    background: #fff;
    position: relative;
    margin-bottom: 10px;
    padding: 0 45px;
    border-radius: 3px;
    border-left: 5px solid #629A9C;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
}

ol li {
    cursor: move;
}

ul li {
    border-left: 5px solid #999;
    opacity: 0.5;
}

li a {
    position: absolute;
    top: 2px;
    right: 5px;
    display: inline-block;
    width: 14px;
    height: 12px;
    border-radius: 14px;
    border: 6px double #FFF;
    background: #CCC;
    line-height: 14px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
}

footer {
    color: #666;
    font-size: 14px;
    text-align: center;
}

footer a {
    color: #666;
    text-decoration: none;
    color: #999;
}

@media screen and (max-device-width: 620px) {
    section {
        width: 96%;
        padding: 0 2%;
    }
}

@media screen and (min-width: 620px) {
    section {
        width: 600px;
        padding: 0 10px;
    }
}
</style>
