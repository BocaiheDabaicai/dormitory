<script setup>
import StaCard from "@/components/statistics/staCard.vue";
// 引入统计状态管理仓库
import { useStatisticStore } from "@/store/statistic";

let statisticStore = useStatisticStore();

const onCompare = function() {
    // 触发比较
    statisticStore.compareRef = true;
};
const onClearCompare = function() {
    // 清除比较
    statisticStore.clearCompareData();
    statisticStore.compareRef = false;
};

</script>

<template>
    <div class="main-container">
        <div class="option-buttons">
            <transition-group name="button">
                <var-button v-if="!statisticStore.compareRef" @click="onCompare">比较数据</var-button>
                <var-button v-else @click="onClearCompare">清除比较</var-button>
                <div v-if="statisticStore.compareRef" class="compareText">
                    <span>比较源:<span style="margin-left: 15px">{{ statisticStore.compareOrigin }}</span></span>
                    <span>比较对象:<span style="margin-left: 15px">{{ statisticStore.compareObject }}</span></span>
                </div>
            </transition-group>
        </div>

        <div class="detail-title">
            <div class="detail-title-left">
                提示灯
            </div>
            <div class="detail-title-right">
                <var-chip class="chip" type="success">达标</var-chip>
                <var-chip class="chip" type="warning">警告</var-chip>
                <var-chip class="chip" type="danger">危险</var-chip>
            </div>
        </div>
        <template v-for="item in statisticStore.dataBag">
            <StaCard :tableData="item" />
        </template>
    </div>
</template>

<style scoped>
.detail-title {
    margin: 20px 15px 20px;
}

.option-buttons {
    margin: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.compareText {
    display: flex;
    flex-direction: column;
    font-size: 14px;
}

.chip {
    margin-right: 5px;
}

.chip:last-child {
    margin-right: 0;
}

.button-enter-active {
    transition: all 0.5s ease;
}

.button-enter-from,
.button-leave-to {
    opacity: 0;
    transform: scale(0.1);
    position: absolute;
}
</style>