<template>
  <div class="test">
      <h1 class="title">学生名称：{{name}}</h1>
      <h1>学生的性别：{{sex}}</h1>
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
}
</script>

<style lang="css" scoped>
    .test{
        background-color: orange;
    }
</style>