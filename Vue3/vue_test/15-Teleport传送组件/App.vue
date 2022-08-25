<template>
  <div class="app">
      <h3>我是App</h3>
      <Child/>
  </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
    name:'App',
    components:{Child},
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

