<template>
  <div>
      <h1 @click="showName">学生名称：{{name}}</h1>
      <h1>学生的性别：{{sex}}</h1>
  </div>
</template>

<script>
// 引入一个混合mixin
import { mixin,mixin2 } from './mixin'

export default {
    name:'Student',
    data() {
        return {
            name:'zs',
            sex:'男'
        }
    },
    mixins:[mixin,mixin2] 
}
</script>

<style>

</style>