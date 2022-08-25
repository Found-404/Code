<template>
  <div class="app">
      <h3>我是App,{{name}}----{{price}}</h3>
      <Child/>
  </div>
</template>

<script>
import { reactive,toRefs,provide } from 'vue'
import Child from './components/Child.vue'
export default {
    name:'App',
    components:{Child},
    setup() {
        let car = reactive({
           name:'大奔',
           price:'40w' 
        })

        // 给自己的后代组件传递数据
        provide('car',car)

        return {
            ...toRefs(car)
        }
    }
}

</script>

<style scoped>
    .app{
        background: gray;
        padding: 10px;
    }
</style>

