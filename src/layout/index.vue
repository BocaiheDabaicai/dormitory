<script setup>
// 引入User、Bottom状态管理仓库
import { useUserStore } from "@/store/user";
import { useBottomStore } from "@/store/bottom";
// 引入组件
import Topper from "./topper/index.vue";
import Main from "./main/index.vue";
import Bottom from "./bottom/index.vue";
import DragCard from "@/components/dragCard.vue";

const userStore = useUserStore();
const bottomStore = useBottomStore();

</script>

<template>
    <div class="container">
        <div class="topper">
            <Topper></Topper>
        </div>
        <div class="main">
            <Main></Main>
        </div>
        <Bottom></Bottom>
        <template v-for="item in bottomStore.roomCardNumber" :key="item">
            <DragCard :index="item"></DragCard>
        </template>
    </div>
</template>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #f9f9f9;
}

.main {
    height: 90vh;
    overflow: scroll;
    margin-top: 20px;
}

.dragAnimate-enter-active,
.dragAnimate-leave-active {
    transition: all 0.5s ease;
}

.dragAnimate-enter-from,
.dragAnimate-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

</style>