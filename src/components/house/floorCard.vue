<script setup>
// 引入路由器对象
import {useRouter} from "vue-router";
// 引入House状态管理仓库
import {useHouseStore} from "@/store/house";

// 接收props参数
defineProps({
  number:Number
})

let houseStore = useHouseStore()
let router = useRouter()

const changeRouter = function(){
  houseStore.changeShowFloor()
  router.push({path:'/room'})
}

</script>

<template>
  <var-paper :elevation="2" class="card" radius="15" ripple @click="changeRouter">
    <div class="floor">
      <span>{{ number }}层</span>
      <span>12/22</span>
    </div>
  </var-paper>
</template>

<style scoped>
.card {
  padding: 15px;
  width: 42vw;
  background-color: #def6f6;
  font-size: 5vw;
  margin: 15px;
}
.floor{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>