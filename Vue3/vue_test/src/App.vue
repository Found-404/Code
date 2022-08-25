<template>
  <div class="app">
      <h3>我是App</h3>
      <Suspense>
          <template v-slot:default>
              <Child/>
          </template>
          <template v-slot:fallback>
              <h3>lodaing....</h3>
          </template>
      </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
//静态引入
// import Child from './components/Child.vue' 

//异步引入
const Child = defineAsyncComponent(()=>import('./components/Child.vue'))

export default {
    name:'App',
    components:{ Child, Child },
    setup() {

    }
}

</script>

<style scoped>
    .app{
        background: gray;
        padding: 10px;
    }
</style>

