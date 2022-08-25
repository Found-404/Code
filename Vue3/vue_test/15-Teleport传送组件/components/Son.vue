<template>
  <div class="Son">
      <h3>我是Son</h3>
      <Dialog/>
  </div>
</template>

<script>
import Dialog from './Dialog.vue';
export default {
    name:'Son',
    components:{ Dialog },
    setup() {
    }
}
</script>

<style scoped>
    .Son{
        background: white;
        padding: 10px;
    }
</style>