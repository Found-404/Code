<template>
  <div>
      <button @click="isShow=true">点我弹窗</button>
        <teleport  to="body">
            <div class="mask" v-if="isShow">
              <div class="dialog" >
                  <h3>我是一个弹窗</h3>
                  <h4>一些内容</h4>
                  <h4>一些内容</h4>
                  <h4>一些内容</h4>
                <button @click="isShow=false">关闭弹窗</button>
              </div>
            </div>
        </teleport>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name:'Dialog',
    setup() {
        let isShow = ref(false);
        return {isShow}
    }
}
</script>

<style>
    .mask{
        position: absolute;
        top: 0px;
        bottom: 0px;
        left:0px;
        right: 0px;
        background-color: #afafafd7;
    }
    .dialog{
        position: absolute;
        top: calc(50% - 150px);
        left: calc(50% - 150px);
        width: 300px;
        height: 300px;
        background: skyblue;
    }
</style>