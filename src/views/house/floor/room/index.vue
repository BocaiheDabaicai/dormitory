<script setup>
// 引入人员卡片
import RoomCard from "@/components/house/roomCard.vue";

// 引入House状态管理仓库
import {useHouseStore} from "@/store/house";

let houseStore = useHouseStore()
</script>

<template>
<div class="room-container">
  <template v-for="(item,index) in houseStore.roomArray" :key="index">
    <RoomCard :roomObject="item"/>
  </template>
</div>
</template>

<style scoped>
.room-container{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
</style>