<script setup>
// 引入统计状态管理对象
import { useStatisticStore } from "@/store/statistic";
// 引入vue状态管理对象
import { reactive } from "vue";
// 引入卡片颜色函数
import { getTableColor } from "@/utlis/getCardColor";

let { tableData } = defineProps({
    tableData: Object,
});
let { titleArray, dataArray } = tableData;

// 数据规范生成
// 每项数据有独立的id与data
let titleResult = reactive(Object.keys(titleArray).map((property, index) => ({
    id: index,
    data: titleArray[property],
})));
let dataResult = reactive(dataArray.map((item, index) => ({
        id: index,
        array: Object.keys(item).map(property => ({
            id: property,
            data: item[property],
            styleObj: {},
        })),
    }),
));

let statisticStore = useStatisticStore();

const onCompare = function(e) {
    // 实现颜色比较
    let judgeIndex = statisticStore.getCompareData(e.target.innerText);
    let result = titleResult.find(obj => obj.data === e.target.innerText);
    judgeIndex ? statisticStore.compareRecord = result.id : "";
    dataResult.forEach(obj => {
        if (judgeIndex) obj.array[result.id].styleObj.color = "black";
        else {
            console.log(obj.array[result.id].data, obj.array[statisticStore.compareRecord].data);
            obj.array[result.id].styleObj.color = getTableColor(obj.array[result.id].data, obj.array[statisticStore.compareRecord].data);
        }
    });
};
</script>

<template>
    <div class="table">
        <var-table :elevation="2">
            <thead>
            <tr>
                <th v-for="item in titleResult" :key="item.id" @click="onCompare">
                    {{ item.data }}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in dataResult" :key="item.id">
                <td v-for="data in item.array" :style="data.styleObj" :key="data.id">{{ data.data }}</td>
            </tr>
            </tbody>
        </var-table>
    </div>
</template>

<style scoped>
.table {
    margin: 0 15px 20px;
}

</style>