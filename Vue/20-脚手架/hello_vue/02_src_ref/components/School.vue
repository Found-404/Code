<template>
  <div>
      <h1>学校的名称：{{name}}</h1>
      <h1>学校的地址：{{address}}</h1>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'FO',
            address:'地球'      
        }
    },
}
</script>

<style>
    .School{
       background-color: #afafaf;
    }
</style>