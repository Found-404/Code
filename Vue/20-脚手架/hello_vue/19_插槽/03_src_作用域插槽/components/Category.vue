<template>
    <div class="category">
        <h3>{{title}}分类</h3>

        <!-- 定义一个插槽标签(挖个坑，等待组件的使用者填充)
        接收img
        -->
        <slot :games="games">默认内容</slot>
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data(){
         return {
          games:['csgo','彩虹六号','Minecraft','战地','GTA6'], 
      }
    }
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