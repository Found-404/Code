<template>
  <div class="demo">
      <h1>学校名称：{{name}}</h1>
      <h1>学校地址：{{address}}</h1>
      <button @click="sendSchoolName">把学校名给app</button>
  </div>
</template>

<script>
export default {
    name:'School',
    props:['getSchoolNane'],
    data() {
        return {
            name:'FO',
            address:'河南'
        }
    },
    methods:{
        sendSchoolName(){
            this.getSchoolNane(this.name)
        }
    }
}
</script>

<!-- scoped将该style内的样式变成局部 -->
<style scoped lang="css">
    .demo{
        background-color: skyblue;
    }
</style>

