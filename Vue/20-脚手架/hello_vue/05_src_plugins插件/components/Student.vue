<template>
  <div>
      <h1>学生名称：{{name}}</h1>
      <h1>学生的性别：{{sex}}</h1>
      <input type="text" v-fbind:value="name">
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

<style>

</style>