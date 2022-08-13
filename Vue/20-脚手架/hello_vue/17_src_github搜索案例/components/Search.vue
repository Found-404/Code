<template>
      <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input v-model="keyWorld" type="text" placeholder="enter the name you search"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name:'Search',
    data() {
        return {
            keyWorld:''
        }
    },
    methods: {
        searchUsers(){
            // 请求前更新list的数据
            this.$bus.$emit('upDateListDate',{isFirst:false,isLoading:true,errMsg:'',users:[]});
            axios.get(`https://api.github.com/search/users?q=${this.keyWorld}`).then(
                response=>{
                    console.log('请求成功');
                    console.log(response.data.items);
                     this.$bus.$emit('upDateListDate',{isLoading:false,errMsg:'',users:response.data.items});
                },
                error=>{
                    console.log('请求失败后');
                    this.$bus.$emit('upDateListDate',{
                        isLoading:false,
                        errMsg:error.message,
                        users:[]
                    });
                }
            )
        }
    },

}
</script>

<style>

</style>