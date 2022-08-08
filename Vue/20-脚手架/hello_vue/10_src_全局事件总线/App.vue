<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School/>
        <Student/>
    </div>
</template>

<script>
// 引入school组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
    name:'App',
    components:{ Student, School, School },
    data() {
        return{
            msg:'你好'
        }
    },
}
</script>

<!-- app内添加样式是给所有子组件添加样式 -->
<style>
    .app{
        padding: 5px;
        background-color: #afafaf;
        box-shadow: 0px 0px 10px black;
    }
</style>
