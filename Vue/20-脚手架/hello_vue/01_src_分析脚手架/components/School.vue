<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h2>学校名称:{{schoolName}}</h2>
         <h2>学校地址:{{address}}</h2>
         <h2>{{n}}</h2>
         <button @click="add">点我n++</button>
    </div>
</template>

<!-- 组件交互相关的代码（数据，方法，等等） -->
<script>
    // 暴露第二种写法
    export default {
        name:'school-name',
        data() {
            return {
                 schoolName: 'zhiyou',
                 address: '郑州',
                 n:0
            }
        },
        methods: {
            add(){
                this.n++;
            }
        },
    };
    // 暴露第一种写法
    // export default {school};
</script>

<!-- 组件的样式 -->
<style>
    .demo{
        background-color: orange;
    }
</style>