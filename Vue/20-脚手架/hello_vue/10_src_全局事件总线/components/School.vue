<template>
  <div class="demo">
      <h1>学校名称：{{name}}</h1>
      <h1>学校地址：{{address}}</h1>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'FO',
            address:'河南'
        }
    },
    
    // 挂载完毕钩子
    mounted(){
        this.$bus.$on('hello',(data)=>{
            console.log('我是school组件，收到了名字',data);
        })
    },
    // 销毁之前钩子
    beforeDestroy(){
        this.$bus.$off('hello')
    }

}
</script>

<!-- scoped将该style内的样式变成局部 -->
<style scoped lang="css">
    .demo{
        background-color: skyblue;
    }
</style>

