<script setup>
import {useUserStore} from "@/store/user";
// 引入组件
import Topper from './topper/index.vue'
import Main from './main/index.vue'
import Bottom from './bottom/index.vue'

const userStore = useUserStore()

</script>

<template>
  <div class="container">
    <div class="topper">
      <Topper></Topper>
    </div>
    <div class="main">
      <Main></Main>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.topper {

}
.main{
  height: 80vh;
  overflow: scroll;
}
</style>