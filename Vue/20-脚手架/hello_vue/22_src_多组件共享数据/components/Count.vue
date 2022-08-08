<template>
    <div class="category">
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大十倍:{{bigSum}}</h3>
        <h3>我在{{school}}，学习{{subject}}</h3>
        <h3>Person组件的总人数是{{personList.length}}</h3>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="JIA(n)">+</button>
      <button @click="JIAN(n)">-</button>
      <button @click="jiaOdd(n)">当前和为奇数再加</button>
      <button @click="jiaWite(n)">等一等再加</button>
    </div>
</template>

<script>

import {mapState,mapGetters,mapMutations,mapActions  } from 'vuex'

export default {
    name:'Count',
    data(){
         return {
             n:1,//用户选择的数字

        }
    },
    computed:{
        //借助mapState生成计算属性，从state中读取数据。（对象写法）
        // ...mapState({he:'sum',svexiao:'school',xveke:'subject'}),

        //借助mapState生成计算属性，从state中读取数据。（数组写法）
        ...mapState(['sum','school','subject','personList']),


        //借助mapGetters生成计算属性，bigSum。（对象写法）
        // ...mapGetters({bigSum:"bigSum"}),

        //借助mapGetters生成计算属性，bigSum。（数组写法）
        ...mapGetters(["bigSum"]),    

    },  


    methods: {
        // increment(){
        //     // this.$store.dispatch('jia',this.n);
        //     this.$store.commit('JIA',this.n);
        // },
        // decrement(){
        //     // this.$store.dispatch('jian',this.n);
        //     this.$store.commit('JIAN',this.n);
        // },
        
        // 借助mapMutations生成对应的写法，方法中会调用commit去联系mutations(对象写法)
        // ...mapMutations({increment:'JIA',decrement:'JIAN'}),
        
        // 借助mapMutations生成对应的写法，方法中会调用commit去联系mutations(数组写法)
        ...mapMutations(['JIA','JIAN']),

        // ################################################

        // incrementOdd(){
        //     this.$store.dispatch('jiaOdd',this.n);
        // },
        // incrementWait(){
        //     this.$store.dispatch('jiaWite',this.n);
        // },
        // 借助mapActions生成对应的写法，方法中会调用commit去联系Actions(对象写法)
        // ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWite'}),
    
        // 借助mapActions生成对应的写法，方法中会调用commit去联系Actions(数组写法)
        ...mapActions(['jiaOdd','jiaWite']),

    },
    mounted() {
        
    },
}
</script>

<style>
    button{
        border: none;
        width: 120px;
        height: 30px;
        margin: 0px 5px;
        font-size: 13px;
        font-weight: 600;
        background-color: #bda0f3;
        color: #fff;
        cursor: pointer;
    }
</style>