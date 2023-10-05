<script setup>
// 引入人员信息卡片
import PersonCard from "@/components/house/personCard.vue";

// 引入House状态管理仓库
import {useHouseStore} from "@/store/house";

let houseStore = useHouseStore()
</script>

<template>
<div>
  <template v-for="(item,index) in houseStore.personArray" :key="index">
    <PersonCard :personObject="item"/>
  </template>
</div>
</template>

<style scoped>

</style>