<script setup>
// 引入bottom状态管理仓库
import { useBottomStore } from "@/store/bottom";

let {index} = defineProps({
    index:Number
})

let bottomStore = useBottomStore();

const removeDragCard = function() {
    // 移除拖拽卡片
    bottomStore.closeRoom(index);
};
</script>

<template>
    <var-drag style="top:40%;left: 15%" teleport=".container">
        <var-paper class="drag-paper" :radius="15">
            <div class="detail-card-title">
                <div class="detail-card-title-left">添加入住人员</div>
                <div class="detail-card-title-right">
                    <var-button @click="removeDragCard" size="small" text>
                        <var-icon name="window-close" />
                    </var-button>
                </div>
            </div>
            <var-divider style="background-color: #e0e1e6"/>
            <h2>我是拖拽卡片</h2>
        </var-paper>
    </var-drag>
</template>

<style scoped>
.drag-paper {
    background-color: #202d4e;
    width: 70vw;
    padding: 15px;
    color: #e0e1e6;
}
</style>