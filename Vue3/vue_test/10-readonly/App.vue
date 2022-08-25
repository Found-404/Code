<template>
  <button @click="isshow = !isshow">显示/隐藏</button>
  <Demo v-if="isshow"/>
</template>

<script>
import { ref, } from 'vue'
import Demo from './components/Demo.vue';
export default {
    name: "App",
    setup() {
        let isshow = ref(true);
        return {
            isshow,
        };
    },
    components: { Demo }
}
</script>
