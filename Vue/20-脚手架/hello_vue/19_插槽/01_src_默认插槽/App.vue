<template>

    <div class="container">
      
      <Category title="美食" >
        <img src="https://ftp.bmp.ovh/imgs/2020/12/a3f405032b1db71a.png" alt="">
      </Category>

      <Category title="游戏" >
        <ul>
            <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ul>
      </Category>

      <Category title="动画" >
        <img src="https://ftp.bmp.ovh/imgs/2020/12/a3f405032b1db71a.png" alt="">
      </Category>

    </div>

</template>

<script>
// 引入组件

import Category from './components/Category';

// import bootstorp from './assets/css/bootstrap.css';

export default {
    name: "App",
    data() {
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],  
        games:['csgo','彩虹六号','Minecraft','战地','GTA6'],  
        films:['《瑞克和莫蒂》','《南方公园》','《辛普森一家》','《飞出未来》'],  
      }
    },
    components: { Category }
}
</script>


<style lang="css" scoped>
  .container{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

</style>