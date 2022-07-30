<template>
  <div class="test">
      <h1>学生名称：{{name}}</h1>
      <h1>学生的性别：{{sex}}</h1>
      <button @click="sendStudentName">把学生名给app</button>
  </div>
</template>

<script>

export default {
    name:'Student',
    data() {
        return {
            name:'zs',
            sex:'男'
        }
    },
    methods: {
        sendStudentName(){
            // 触发Student组件实例对象身上的found事件
            this.$emit('found',this.name)
        }
    },
}
</script>

<style lang="css" scoped>
    .test{
        background-color: orange;
    }
</style>