<template>
    <li>
        <label>
            <input type="checkbox" :checked="todoitem.done" @change="handleCheck(todoitem.id)"/>
            <span v-show="!todoitem.isEdit">{{todoitem.title}}</span>
            <input v-show="todoitem.isEdit" 
            type="text" 
            :value="todoitem.title" 
            @blur="handleBlur(todoitem,$event)" ref="ipttitle">
        </label>
        <button class="btn btn-danger" @click="handleDelete(todoitem.id)">删除</button>
        <button v-show="!todoitem.isEdit" class="btn btn-edit" @click="handleEdit(todoitem)">编辑</button>
    </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
    name:'Item',
    // 声明接收todo对象
    props:['todoitem'],
    methods: {
        handleCheck(id){
            //通知app组件将对应的todo对象的done值取反   
            // this.checkTodo(id);
            this.$bus.$emit('checkTodo',id)
        },
        // 删除方法
        handleDelete(id){
            if (confirm('确认删除吗?')) { 
                // 通知app删除对应id的项
                // this.deleteTodo(id);
                // this.$bus.$emit('deleteTodo',id)
                pubsub.publish('deleteTodo',id)
            }
        },
        handleEdit(todoitem){
          if (todoitem.hasOwnProperty('isEdit')) {
            todoitem.isEdit = true;
          }else{
            this.$set(todoitem,'isEdit',true)
          }
          
          // nextTick所指定的回调会在dom节点更新之后执行
          this.$nextTick(function(){
            this.$refs.ipttitle.focus();
          })

          // todoitem.isEdit=true;
        },

        // 失去焦点回调（真正执行修改逻辑）
        handleBlur(todoitem,e){
          todoitem.isEdit = false;
          if (e.target.value) {
            this.$bus.$emit('updataTodo',todoitem.id,e.target.value)
          }else{
            alert('不可为空');
          }
          
        }
    },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  transition: all 0.3s ease;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #d5d5d5;
}
li:hover button{
  display: block;
}

</style>