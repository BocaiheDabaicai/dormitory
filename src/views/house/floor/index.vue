<script setup>
// 引入楼层卡片
import FloorCard from "@/components/house/floorCard.vue";
// 引入House、floor状态管理仓库
import { useHouseStore } from "@/store/house";

let houseStore = useHouseStore();

</script>

<template>
    <div v-show="houseStore.showFloor" class="floor-container">
            <template v-for="(item,index) in houseStore.floorArray" :key="index">
                <FloorCard :floorObject="item" />
            </template>
    </div>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
</template>

<style scoped>
.floor-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
}
</style>