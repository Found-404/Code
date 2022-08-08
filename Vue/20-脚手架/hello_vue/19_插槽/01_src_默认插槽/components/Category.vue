<template>
    <div class="category">
        <h3>{{title}}分类</h3>

        <!-- 定义一个插槽标签(挖个坑，等待组件的使用者填充)
        接收img
        -->
        <slot>我是默认值，当组建的使用者没有传递具体结构的时候，我再出现</slot>

    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title']
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
   h3{
    text-align: center;
    background-color: rgb(163, 164, 239);
    padding: 5px 0px;
    color: #fff;
  }
  ul{
      color: #fff;
  }
</style>