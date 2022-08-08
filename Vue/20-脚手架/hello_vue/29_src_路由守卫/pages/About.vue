<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',

    // 通过路由规则 进入该组件时被调用
    beforeRouteEnter(){
       if (to.meta.isAuth) { //控制判断是否需要鉴权
           if (localStorage.getItem('school') == 'found') {
                 next();
          } else {
                 alert('学校名不对');
          }
          } else {
             next();
     }
    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave(){
        next();
    }
}
</script>

<style>

</style>