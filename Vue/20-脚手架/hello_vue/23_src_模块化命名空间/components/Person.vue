<template>
  <div>
      <h3>Count上方组件总和{{sum}}</h3>
      <h1>人员列表</h1>
      <h3>列表中第一个人的名字是{{firstPersonName}}</h3>
      <input type="text" placeholder="请输入名字" v-model="name">
      <button @click="add">添加</button>
      <button @click="addGiao">添加一个姓giao的人</button>
      <button @click="addPersonServer">添加一个语句</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
import { mapState } from 'vuex';
export default {
    name:'Person',
    data() {
        return {
            name:''
        }
    },

    computed:{
        personList(){
            return this.$store.state.b.personList
        },
        sum(){
            return this.$store.state.a.sum
        },
        firstPersonName(){
            return this.$store.getters['b/firstPersonName']
        }
    },
    methods: {
        add(){
            const personObj={
                id:nanoid(),
                name:this.name
            };
            this.$store.commit('b/ADD_PERSON',personObj);
            this.name='';

        },
        addGiao(){
             const personObj={
                id:nanoid(),
                name:this.name
            };
            this.$store.dispatch('b/addPersonWang',personObj);
            this.name='';
        },
        addPersonServer(){
            this.$store.dispatch('b/addPersonServer');
        }
    },
}
</script>

<style>

</style>