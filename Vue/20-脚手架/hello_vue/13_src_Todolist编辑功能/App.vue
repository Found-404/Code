<template>
    <div>
        <div class="todo-container">
            <div class="todo-wrap">
                <myHeader @addTodo="addTodo" />
                <List :todos="todos"/>
                <myFooter :todos="todos" @checkAlltodos="checkAlltodos" :clearAlltodo="clearAlltodo"/>
            </div>
        </div>
    </div>
</template>

<script>
// 引入组件
import pubsub from "pubsub-js";
import myHeader from './components/myHeader.vue'
import List from './components/List.vue'
import myFooter from './components/myFooter.vue'

export default {
    name:'App',
    components:{
        myHeader,
        List,
        myFooter,
    },
    data() {
        return {
            todos:JSON.parse(localStorage.getItem('todos')) || []     
        }
    },

    methods: {
        //添加todo
      addTodo(x){
          this.todos.unshift(x);
          // 接收header传递的数据并将数据添加到data的todos数组前
      },
        //勾选、取消勾选
      checkTodo(id){
            this.todos.forEach((todo) => {
                if (todo.id === id) {
                    todo.done = !todo.done
                }
            });
      },
      // 更新一个doto
      updataTodo(id,title){
            this.todos.forEach((todo) => {
                if (todo.id === id) {
                    todo.title = title
                }
            });
      },

      // 删除一个todo
      deleteTodo(_,id){
           this.todos = this.todos.filter((todo)=>{
              return todo.id !== id;
          })
      },
      //全选or取消全选
      checkAlltodos(ev){
            this.todos.forEach(todo=>{
                todo.done = ev;
            });
            // console.log(ev);
      },
      // 清除所有已经完成的todo
      clearAlltodo(){
          return this.todos = this.todos.filter(todo=>{
            return !todo.done
          })
      }
    },

    // 监视数据
    watch:{
      todos:{
          deep:true,
          handler(vale){
            localStorage.setItem('todos',JSON.stringify(vale))
         }
      }
    },

    //绑定事件
    mounted() {
      this.$bus.$on('checkTodo',this.checkTodo)
      this.$bus.$on('updataTodo',this.updataTodo)
      this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo)
    },
    //解绑事件
    beforeDestroy(){
      this.$bus.$off('checkTodo');
      pubsub.unsubscribe(this.pubId)
    }
}
</script>

<!-- app内添加样式是给所有子组件添加样式 -->
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #4992da;
  border: 1px solid #4992da;
  margin-right: 10px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit:hover {
  color: #fff;
  background-color: #2f7bbd;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>
