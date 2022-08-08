<template>
  <div class="test">
      <h1>学生名称：{{name}}</h1>
      <h1>学生的性别：{{sex}}</h1>

      <button @click="sentStudentName">把学生名给school组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';


export default {
    name:'Student',
    data() {
        return {
            name:'张三',
            sex:'男',
        }
    },
    methods: {
        sentStudentName(){
            // this.$bus.$emit('hello',this.name)
            pubsub.publish('hello',666)
        }
    },
}
</script>

<style lang="css" scoped>
    .test{
        background-color: orange;
    }
</style>