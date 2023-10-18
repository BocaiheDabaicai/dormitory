<script setup>
// 引入bottom状态管理仓库
import { useBottomStore } from "@/store/bottom";
// 引入vue状态管理对象
import { ref, reactive } from "vue";

let { index } = defineProps({
    index: Number,
});

let bottomStore = useBottomStore();
let inputObj = reactive({
    code: "",
    area: "",
    room: "",
});
let success = ref(false);

const removeDragCard = function() {
    // 移除拖拽卡片
    bottomStore.closeRoom(index);
};
</script>

<template>
    <var-drag style="top:35%;left: 15%" teleport=".container">
        <var-paper class="drag-paper" :radius="15">
            <div class="detail-card-title">
                <div class="detail-card-title-left">添加入住人员</div>
                <div class="detail-card-title-right">
                    <var-button @click="removeDragCard" size="small" text>
                        <var-icon name="window-close" />
                    </var-button>
                </div>
            </div>
            <var-divider style="background-color: #e0e1e6" />
            <var-input variant="outlined" :maxlength="6" placeholder="请输入入住人员编码" v-model="inputObj.code" />
            <var-select class="select" variant="outlined" clearable placeholder="请选择入住区域"
                        v-model="inputObj.area">
                <var-option label="员工宿舍" />
                <var-option label="招待所" />
            </var-select>
            <var-input class="select" v-if="inputObj.code.length===6&&inputObj.area" variant="outlined" :maxlength="4"
                       placeholder="请输入入住房间编码" v-model="inputObj.room" />
            <var-button block v-if="inputObj.code.length===6&&inputObj.area&&inputObj.room.length===4"
                        @click="success = true">校验
            </var-button>
        </var-paper>
        <var-popup :default-style="false" v-model:show="success">
            <var-result class="result" type="success" title="成功!:)">
                <template #footer>
                    <var-button type="success" @click="success = false">入住吧</var-button>
                </template>
                <template #description>
                    <div class="user-detail">
                        <hr/>
                        <span>姓名：刘刘刘</span>
                        <span>性别：男</span>
                        <span>身份证：522223200010260451</span>
                        <span>手机号码：15951733081</span>
                        <span>入住区域：员工宿舍</span>
                        <span>入住楼层：二楼</span>
                        <span>入住房间：A204</span>
                        <span>入住时间：2023年10月18日</span>
                        <span>备注：无</span>
                        <hr/>
                        <span>数据验证成功！！</span>
                    </div>
                </template>
            </var-result>
        </var-popup>
    </var-drag>
</template>

<style scoped>
.drag-paper {
    background-color: #f3eddf;
    width: 70vw;
    padding: 15px;
    box-shadow: 0 1px 1px 0.1px #6a7895;
}

.select {
    margin: 1.25vh 0;
}
.result{
    width: 70vw;
    border-radius: 15px;
}
.user-detail{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>