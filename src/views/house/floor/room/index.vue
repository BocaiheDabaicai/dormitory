<script setup>
// 引入人员卡片
import RoomCard from "@/components/house/roomCard.vue";

// 模拟楼层
let array = Array.from({length: 21}, (_,i) => i+1+200)

</script>

<template>
<div class="room-container">
  <template v-for="(item,index) in array" :key="index">
    <RoomCard :number="item"/>
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