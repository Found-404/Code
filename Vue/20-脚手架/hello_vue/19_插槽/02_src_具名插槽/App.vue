<template>

    <div class="container">

      <Category title="美食" >
        <img slot="center" src="https://ftp.bmp.ovh/imgs/2020/12/a3f405032b1db71a.png" alt="">
        <a href="#" slot="footer">美食</a>
      </Category>

      <Category title="游戏" >
        <ul slot="center">
            <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ul>
         <div slot="footer" class="foot">
           <a href="#">游戏</a>
           <a href="#">游戏</a>
          </div>
      </Category>

      <Category title="动画" >
        <img slot="center" src="https://ftp.bmp.ovh/imgs/2020/12/a3f405032b1db71a.png" alt="">

        <template v-slot:footer>
           <div slot="footer" class="foot">
             <a href="#">动画</a>
             <a href="#">动画</a>
           </div>
           <h4>欢迎</h4>
        </template>

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
  .container,.foot{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  img{
    width: 100%;
    height: 80px;
  }
  h4{
    text-align: center;
  }

</style>