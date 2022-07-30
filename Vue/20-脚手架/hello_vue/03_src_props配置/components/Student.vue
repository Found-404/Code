<template>
  <div>
      <h1>{{msg}}</h1>
      <h1>学生名称：{{name}}</h1>
      <h1>学生的性别：{{sex}}</h1>
      <h1>学生的年龄：{{myAge}}</h1>
      <button @click="updataAge">增加年龄</button>
  </div>
</template>

<script>

export default {
    name:'School',
    data() {
        return {
            msg:'你好',
            myAge:this.age
        }
    },
    methods: {
        updataAge(){
            this.myAge++;    
        }
    },
    // 1.简单声明接受（开发中写得多）
    props:['name','sex','age']

    // 2.接收的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }

    // 3.接收的同时对数据进行类型限制+默认值的指定+必要性的限制（正规的开发）
    // props:{
    //     name:{
    //         type:String,//name类型字符串
    //         required:true,//name是必要的，与required一般不一起写
    //     },
    //     age:{
    //         type:Number,
    //         default:99//默认值
    //     },
    //     sex:{
    //         type:String,
    //         required:true
    //     }
    // }
}
</script>

<style>

</style>