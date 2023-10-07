<script setup>
import StaCard from "@/components/statistics/staCard.vue";

let array = [
  {name: '员工宿舍', item1: 124, item2: 99},
  {name: '招待所', item1: 56, item2: 40}]
</script>

<template>
  <div class="main-container">
    <div class="detail-title">
      <div class="detail-title-left">
        提示灯
      </div>
      <div class="detail-title-right">
        <var-chip type="success">达标</var-chip>
        <var-chip type="danger">危险</var-chip>
        <var-chip type="warning">警告</var-chip>
      </div>
    </div>
    <StaCard headName="区域名称"
             headItem1="总入住人数"
             headItem2="实到人数"
             :itemObject="array"
    />
    <StaCard headName="区域名称"
             headItem1="总入住人数"
             headItem2="实到人数"
             :itemObject="array"
    />
    <StaCard headName="区域名称"
             headItem1="总入住人数"
             headItem2="实到人数"
             :itemObject="array"
    />
  </div>
</template>

<style scoped>
.detail-title {
  margin: 0 15px 20px;
}
</style>