<script setup>
// 引入信号灯组件、宿舍楼卡片
import HouseCard from "@/components/house/houseCard.vue";
// 导入图片
import Dormitory from "@/assets/house/dormitory.png";
import Hotel from "@/assets/house/hotel.png";

</script>

<template>
  <div class="house-body">
    <HouseCard name="员工宿舍" :count="107" :src="Dormitory" info="dormitory"/>
    <HouseCard name="招待所" :count="67" :src="Hotel" info="hotel"/>
  </div>
</template>

<style scoped>

</style>