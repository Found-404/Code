<template>
        <li>
            <input type="checkbox" :checked="todoList.done" @change="handleCheck(todoList.id)">
            <p>{{todoList.title}}</p>
            <!-- 删除 -->
            <a href="javascript:;" @click="deleteTodo(todoList.id)"></a>
        </li>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name:"List",
    props:['todoList'],
    methods: {
        // 点击勾选
        handleCheck(id){
            // 将被勾选的任务li中的done值取反
            pubsub.publish('changeId',id);
            
        },
        // 点击删除
        deleteTodo(id){
            // 触发点击删除事件
           pubsub.publish('deleteTodos',id);
        }
    },
}
</script>

<style>

</style>