<template>

    <div class="container">

          <Category title="游戏" >
              <template scope="games">      
                    <ul>
                        <li v-for="(g,index) in games.games" :key="index">{{g}}</li>
                    </ul>
             </template>
          </Category>

         <Category title="游戏" >
                <template scope="{games}">
                      <ol>
                        <li v-for="(g,index) in games" :key="index">{{g}}</li>
                    </ol>
                </template>
          </Category>

          <Category title="游戏" >
                <template scope="games"> 
                  <h4 v-for="(g, index) in games.games" :key="index">{{g}}</h4>
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
        // games:['csgo','彩虹六号','Minecraft','战地','GTA6'],    
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