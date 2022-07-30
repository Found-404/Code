<template>
  <div>
      <h1 @click="showName">学校名称：{{name}}</h1>
      <h1>学校地址：{{address}}</h1>
  </div>
</template>

<script>
// 引入一个混合mixin
import { mixin,mixin2 } from './mixin'

export default {
    name:'School',
    data() {
        return {
            name:'FO',
            address:'河南'
        }
    },
    mixins:[mixin,mixin2]
}
</script>

<style>

</style>