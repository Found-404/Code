<template>

    <div>
        <Count/>
<hr>
        <Person/>
    </div>

</template>

<script>
// 引入组件

import Count from './components/Count';
import Person from './components/Person.vue';

export default {
    name: "App",
    data() {
      return {
    
      }
    },
    components: { Count, Person }
}
</script>


<style lang="css" scoped>

</style>