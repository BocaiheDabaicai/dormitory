<script setup>
// 引入bottom状态管理仓库
import { useBottomStore } from "@/store/bottom";
// 引入vue状态管理对象
import { ref, reactive } from "vue";
// 引入结果界面
import Result from "@/components/dragCard/result.vue";
import { Snackbar } from "@varlet/ui";

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

// 控制结果弹窗
const openResult = () => success.value = true
const closeResult = () => success.value = false
const successResult = () => {
    success.value = false;
    bottomStore.closeRoom(index);
    Snackbar.success(`${personObject.name}--入住完成!`)
}

let personObject = reactive({
    // titleObj:{
    //     type:'error',
    //     title:'失败了捏~'
    // },
    // buttonObj:{
    //   type:'danger',
    //   message:'重新输入一下吧'
    // },
    titleObj:{
        type:'success',
        title:'成功!:)~'
    },
    buttonObj:{
        type:'success',
        message:'入住吧'
    },
    name:'刘刘刘',
    sex:'男',
    card:'522223200010260451',
    phone:'15951733081',
    area:'员工宿舍',
    floor:'二楼',
    room:'A204',
    date:'2023年10月18日',
    remark:'无',
    result:'数据验证成功！！',
    // close:closeResult,
    close:successResult,
})

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
                        @click="openResult">校验
            </var-button>
        </var-paper>
        <var-popup :default-style="false" v-model:show="success">
            <Result :personObject="personObject"/>
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

</style>