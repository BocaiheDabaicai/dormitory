<script setup>
import StaCard from "@/components/statistics/staCard.vue";
// 引入统计状态管理仓库
import { useStatisticStore } from "@/store/statistic";

let statisticStore = useStatisticStore();

</script>

<template>
    <div class="main-container">
        <div class="detail-title">
            <div class="detail-title-left">
                提示灯
            </div>
            <div class="detail-title-right">
                <var-chip type="success">达标</var-chip>
                <var-chip type="warning">警告</var-chip>
                <var-chip type="danger">危险</var-chip>
            </div>
        </div>
        <template v-for="item in statisticStore.dataBag">
            <StaCard :tableData="item" />
        </template>
    </div>
</template>

<style scoped>
.detail-title {
    margin: 0 15px 20px;
}
</style>