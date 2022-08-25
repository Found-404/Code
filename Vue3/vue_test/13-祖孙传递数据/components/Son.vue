<template>
  <div class="Son">
      <h3>我是Son,{{car.name}}----{{car.price}}</h3>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
    name:'Son',
    setup() {
        let car = inject('car')
        return {car}
    }
}
</script>

<style scoped>
    .Son{
        background: white;
        padding: 10px;
    }
</style>