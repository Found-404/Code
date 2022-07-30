<template>
    <div>
       <Student name="李四" sex="女" :age="18" />
       <Student name="王老五" sex="男" :age="100" />
    </div>
</template>

<script>
// 引入school组件
import Student from "./components/Student.vue"

export default {
    name:'App',
    components:{Student},

}
</script>
