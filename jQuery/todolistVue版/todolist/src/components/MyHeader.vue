<template>
      <header>
          <section>
              <label for="title">ToDoList</label>
              <input @keyup.enter="add" type="text" id="title" name="title" placeholder="添加ToDo" required="required" autocomplete="off" />
          </section>
    </header>
</template>

<script>
import {nanoid} from 'nanoid';

export default {
    name:'MyHeader',
    
    
    methods: {
        // 回车添加任务
        // 使用evevt获取输入框内容
        add(eve){
            if (!eve.target.value.trim()) {
                return alert('输入不能为空');
            }
            // 将数据包装成一个对象用来发给App
            const todoObj={
                // 使用nanoid生成不重复id
                id:nanoid(),
                title:eve.target.value,
                done:false
            };
            //清空表单
            eve.target.value='';
            //触发事件将数据传给App组件
            this.$emit('addTodo',todoObj);
        }
    },
}
</script>

<style>

</style>