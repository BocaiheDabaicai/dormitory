<script setup>
// 引入路由器对象
import {useRouter} from "vue-router";
// 引入房间状态管理对象
import {useHouseStore} from "@/store/house";

let {houseObject} = defineProps({
  houseObject:Object
})

let router = useRouter()
let houseStore = useHouseStore()
let {name, count, src, info} = houseObject  // 二次解构

const changeRouter = function () {
  houseStore.updateArea(name)
  router.push({name:'Floor'})
}


</script>

<template>
  <var-paper class="card" :elevation="2" :radius="20" ripple @click="changeRouter">
    <div class="card-left">
      <var-image
          width="105px"
          height="105px"
          fit="cover"
          :radius="10"
          :src="src"
      />
      <div class="detail">
        <h3>{{ name }}</h3>
        <span>可用房间 {{ count }} 间</span>
      </div>
    </div>
    <var-button class="button" type="info" color="#2fbbbc">></var-button>
  </var-paper>
</template>

<style scoped>
.card {
  padding: 15px;
  width: 90vw;
  background-color: #def6f6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
}

.card-left {
  display: flex;
}

.detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
}

.detail span {
  font-size: 14px;
  color: #b2b6bb;
}

.button {
  height: 50px;
}
</style>