<script setup>
// 引入信号灯组件、宿舍楼卡片
import HouseCard from "@/components/house/houseCard.vue";

// 引入公寓状态管理仓库
import {useHouseStore} from "@/store/house";

const houseStore = useHouseStore()
</script>

<template>
  <div class="house-body">
    <template v-for="(item,index) in houseStore.cardArray" :key="index">
      <HouseCard :houseObject="item"/>
    </template>
  </div>
</template>

<style scoped>

</style>