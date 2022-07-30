<template>
    <div>
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
    components:{Student,School},

}
</script>

<!-- app内添加样式是给所有子组件添加样式 -->
<style>
    .title{
        color:red;
    }
</style>
