<template>
      <ul class="todo-main">
          <transition-group name="todo" appear>
              <Item 
                  v-for="todoObj in todos" 
                  :key="todoObj.id" 
                  :todoitem="todoObj" 
              />
          </transition-group>
      </ul>
</template>

<script>

import Item from './Item.vue';

export default {
    name:'List',
    props:[
        'todos'
    ],
    components:{ Item },

}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
  overflow: hidden;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

    .todo-enter-active{
        animation: shoW 1s;

    }
    .todo-leave-active{
        animation: shoW 1s reverse;
    }

    @keyframes shoW {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>