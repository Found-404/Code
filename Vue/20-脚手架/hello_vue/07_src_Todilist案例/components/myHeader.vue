<template>
      <div class="todo-header">
        <input @keyup.enter="add" type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
</template>

<script>
import {nanoid} from 'nanoid'


export default {
    name:'myHeader',
    // data() {
    //     return {
    //         title:''
    //     }
    // },
    props:['addTodo'],
    methods:{
        // 1.使用event对象获取输入框内容
        add(e){
            if (!e.target.value.trim()) {
                return alert('输入不能为空');
            }
            // 将用户的输入包装成一个todo对象
            const todoObj={
                // 使用nanoid生成不重复id
                id:nanoid(),
                title:e.target.value,
                done:false
            };
            e.target.value='';
            this.addTodo(todoObj);
            // 将子组件header产生的数据传递给app父组件
        }
        // 2.使用v-model="title"双向绑定一个数据
        // add(){
        //     console.log(this.title);
        // }
    }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>