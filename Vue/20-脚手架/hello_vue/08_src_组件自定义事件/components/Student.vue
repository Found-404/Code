<template>
  <div class="test">
      <h1>学生名称：{{name}}</h1>
      <h1>学生的性别：{{sex}}</h1>
      <h2>当前求和为{{number}}</h2>

      <button @click="add">点我number++</button>

      <button @click="sendStudentName">把学生名给app</button>

      <button @click="Unbind">解绑found事件</button>

      <button @click="death">销毁当前studnt组件示例对象</button>
  </div>
</template>

<script>

export default {
    name:'Student',
    data() {
        return {
            name:'zs',
            sex:'男',
            number:0
        }
    },
    methods: {
        add(){
            console.log('add回调被调用');
            this.number++
        },
        sendStudentName(){
            // 触发Student组件实例对象身上的found事件
            this.$emit('found',this.name);
            // this.$emit('demo');

        },
        Unbind(){
            // 1.仅适用于解绑一个事件
            this.$off('found');

            // 2.解绑多个自定义事件
            // this.$off(['found','demo']);

            // 3.解绑所有自定义事件
            // this.$off();
        },
        death(){
            this.$destroy();//销毁了当前的student组件实例
            // 销毁后所有student实例的自定义事件全都不奏效
        }
    },
}
</script>

<style lang="css" scoped>
    .test{
        background-color: orange;
    }
</style>