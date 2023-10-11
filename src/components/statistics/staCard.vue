<script setup>
let { tableData } = defineProps({
    tableData: Object,
});
let { titleArray, dataArray } = tableData;

// 数据规范生成
// 每项数据有独立的id与data
let titleResult = Object.keys(titleArray).map((property, index) => ({
    id: index,
    data: titleArray[property],
}));
let dataResult = dataArray.map((item, index) => ({
        id: index,
        array: Object.keys(item).map(property => ({
            id: property,
            data: item[property],
        })),
    }),
);

</script>

<template>
    <div class="table">
        <var-table :elevation="2">
            <thead>
            <tr>
                <th v-for="item in titleResult" :key="item.id">{{ item.data }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in dataResult" :key="item.id">
                <td v-for="data in item.array" :key="data.id">{{ data.data }}</td>
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