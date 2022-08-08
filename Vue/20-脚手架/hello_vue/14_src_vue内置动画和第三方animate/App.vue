<template>
    <div class="app">
        <Test/>
        <test2/>
        <test3/>
    </div>
</template>

<script>
// 引入school组件
import Test from './components/test.vue'
import test2 from './components/test2.vue'
import test3 from './components/test3.vue'

export default {
    name:'App',
    components:{ Test,test2,test3 },
    data() {
        return{
        }
    },
}
</script>

<!-- app内添加样式是给所有子组件添加样式 -->
<style>

</style>
