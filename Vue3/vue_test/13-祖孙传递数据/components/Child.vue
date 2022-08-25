<template>
  <div class="Child">
      <h3>我是Child</h3>
      <Son/>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
    name: "Child",
    components: { Son },
}
</script>

<style scoped>
    .Child{
        background: pink;
        padding: 10px;
    }
</style>