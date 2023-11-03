<script setup>
// 引入一般卡片组件、高级卡片组件
import HomeCard from "@/components/home/homeCard/index.vue";
import AdvancedCard from "@/components/home/advancedCard/index.vue";
// 引入首页状态管理仓库
import { useHomeCardStore } from "@/store/homeCard";


let homeCardStore = useHomeCardStore();


</script>

<template>
    <div class="main-container">
        <div class="header">
            <h2 class="header-title">欢迎回来！</h2>
            <span class="header-fix">Hi! 开发者</span>
        </div>
        <div class="detail-title">
            <div class="detail-title-left">公寓情况</div>
            <div class="detail-title-right">{{ homeCardStore.date }}</div>
        </div>
        <div class="cards">
            <template v-for="item in homeCardStore.homeCardArray" :key="item.index">
                <HomeCard v-bind="item"></HomeCard>
            </template>
        </div>
        <div class="detail-title">
            <div class="detail-title-left">高级功能</div>
            <div class="detail-title-right">致力于深度分析宿舍情况</div>
        </div>
        <div class="cards">
            <AdvancedCard/>
        </div>
    </div>
</template>

<style scoped>
.header {
    margin: 0 15px;
}

.header-title {
    margin-bottom: 10px;
    letter-spacing: 2px;
}

.header-fix {
    color: #b2b6bb;
    letter-spacing: 2px;
}

.cards {
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
</style>