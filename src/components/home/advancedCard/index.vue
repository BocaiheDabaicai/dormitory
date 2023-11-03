<script setup>
import "css-doodle";

</script>

<template>
    <var-card class="card">
        <template #title>
            <div style="display: inline-block">
                <div class="title">
                    <span class="title-span">宿舍</span>
                    <span class="title-span">数据分析</span>
                </div>
                <div class="sub-title">全面分析</div>
            </div>
        </template>
        <template #description>
            用于统计、总结、归纳、管理住宿人员以及管理员的重要信息，锚定管理员的参与度、付出度，确定住宿人员的入住品性
        </template>
    </var-card>
</template>

<style scoped>
.card {
    width: 90vw;
    margin-top: 10px;
    position: absolute;
    opacity: 0.8;
}

.title {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 120px;
    color: #6f6f6f;
}
.title-span{
    margin-top: 8px;
}
.sub-title{
    display: flex;
    justify-content: center;
    margin-top: 5px;
    color: #c3c2c4;
}
</style>

