<template>
  <div class="demo">
      <h1>学校名称：{{name}}</h1>
      <h1>学校地址：{{address}}</h1>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'FO',
            address:'河南'
        }
    },
}
</script>

<!-- scoped将该style内的样式变成局部 -->
<style scoped lang="css">
    .demo{
        background-color: skyblue;
    }
</style>

