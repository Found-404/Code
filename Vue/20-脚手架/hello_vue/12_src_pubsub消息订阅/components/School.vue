<template>
  <div class="demo">
      <h1>学校名称：{{name}}</h1>
      <h1>学校地址：{{address}}</h1>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';

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
        // this.$bus.$on('hello',(data)=>{
        //     console.log('我是school组件，收到了名字',data);
        // })
        this.pubid = pubsub.subscribe('hello',(msgName,data)=>{
            console.log('有人发布了hello消息，hello消息的回调执行了');
            console.log(msgName,data);
            // msgName是发布订阅名
            // data是传递的数据
        })
    },
    // 销毁之前钩子
    beforeDestroy(){
        // this.$bus.$off('hello')
        // 在组件销毁之前取消订阅
        pubsub.unsubscribe(this.pubid)

    }

}
</script>

<!-- scoped将该style内的样式变成局部 -->
<style scoped lang="css">
    .demo{
        background-color: skyblue;
    }
</style>

