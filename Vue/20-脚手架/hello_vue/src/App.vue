<template>
    <div class="app">
        <h1>你好啊</h1>
<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolNane="getSchoolNane"/>

<!-- 通过父组件给子组件绑定自定义事件实现：子给父传递数据(第一种写法：使用@或者v-on) -->
       <Student v-on:found="getStudentNane"/>
       <Student @found="getStudentNane"/>

<!-- 通过ref获取到这个组件(第二种写法：使用ref) -->
       <!-- <Student ref="student"/> -->

    </div>
</template>

<script>
// 引入school组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
    name:'App',
    components:{Student,School},
    methods: {
        getSchoolNane(name){
            console.log('app收到学校名',name);
        },
        getStudentNane(name){
            console.log('app收到学生名',name);
        }
    },

    // 挂载完毕
    mounted() {
        // this.$refs.student.$on('found',this.getStudentNane) //绑定自定义事件
        this.$refs.student.$once('found',this.getStudentNane)//绑定自定义事件(仅触发一次)
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
