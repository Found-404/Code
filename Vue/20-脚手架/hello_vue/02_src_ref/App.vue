<template>
    <div>
       <h1 v-text="msg" ref="title"></h1>
       <button @click="showDom" ref="btn">点我输出上方的DOM元素</button>
       <School id="sch"/>
    </div>
</template>

<script>
// 引入school组件
import School from "./components/School.vue"

export default {
    name:'App',
    components:{School},
    data() {
        return {
            msg:'欢迎'
        }
    },
    methods:{
        showDom(){
            // 获取具有ref标签标注的标签
            console.log(this.$refs);
            console.log(this.$refs.title);//真实dom元素
            console.log(this.$refs.btn);//真实dom元素
            console.log(this.$refs.sch);//School组件的实例对象（vc）

        }
    }
}
</script>
