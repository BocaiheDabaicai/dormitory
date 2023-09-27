<script setup>
// 引入楼层卡片
import FloorCard from "@/components/house/floorCard.vue";
// 引入House状态管理仓库
import {useHouseStore} from "@/store/house";

let houseStore = useHouseStore()


// 模拟楼层
let array = Array.from({length: 6}, (_, i) => i + 1)

console.log(array)
</script>

<template>
  <div v-show="houseStore.showFloor" class="floor-container">
    <template v-for="(item,index) in array" :key="index">
      <FloorCard :number="item"/>
    </template>

  </div>
  <router-view></router-view>
</template>

<style scoped>
.floor-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
</style>