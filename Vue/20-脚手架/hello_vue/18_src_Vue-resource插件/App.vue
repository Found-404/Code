<template>

    <div class="container">
      <Search/>
      <List/>
    </div>

</template>

<script>
// 引入组件

import List from './components/List';
import Search from './components/Search';

// import bootstorp from './assets/css/bootstrap.css';

export default {
    name: "App",
    methods: {

    },
    components: { List,Search }
}
</script>


<style>

</style>