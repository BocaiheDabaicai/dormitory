<script setup>
// 引入人员信息卡片
import PersonCard from "@/components/house/personCard.vue";


</script>

<template>
<div>
  <PersonCard :label="true"/>
  <PersonCard :label="false"/>
</div>
</template>

<style scoped>

</style>