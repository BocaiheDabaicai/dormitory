<script setup>
// 引入人员信息卡片
import infoCard from "@/components/house/infoCard.vue";

// 引入House状态管理仓库
import {useHouseStore} from "@/store/house";

let houseStore = useHouseStore()
</script>

<template>
<div>
  <template v-for="(item,index) in houseStore.personArray" :key="index">
    <infoCard :personObject="item"/>
  </template>
</div>
</template>

<style scoped>

</style>