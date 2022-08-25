<template>
  <div class="app">
      <h3>我是App</h3>
      <!-- <Child/> -->
  </div>
</template>

<script>
import { ref, reactive,toRefs, readonly,isRef,isReactive,isReadonly,isProxy } from 'vue'
import Child from './components/Child.vue'
export default {
    name:'App',
    components:{Child},
    setup() {
        let car = reactive({name:'大奔',price:'40w' })

        let sum = ref(0)

        let car2 = readonly(car)

        console.log(isRef(sum));
        console.log(isReactive(car));
        console.log(isReadonly(car2));
        console.log(isProxy(car));
        console.log(isProxy(car2));


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

