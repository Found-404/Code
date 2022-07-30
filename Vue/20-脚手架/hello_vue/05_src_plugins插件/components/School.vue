<template>
  <div>
      <h1>学校名称：{{name | mySlice}}</h1>
      <h1>学校地址：{{address}}</h1>
      <button @click="test">点我弹窗</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'FO123456',
            address:'河南'
        }
    },
    methods:{
        test(){
            this.hello();
        }
    }
}
</script>

<style>

</style>