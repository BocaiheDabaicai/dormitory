<script setup>
let { personObject } = defineProps({
    personObject: Object,
});
// 成功!:)
let { titleObj, buttonObj,close, name, sex, card, phone, area, floor, room, date, remark, result } = personObject;
</script>

<template>
    <var-result class="result" :type="titleObj.type" :title="titleObj.title">
        <template #footer>
            <var-button :type="buttonObj.type" @click="close">{{ buttonObj.message }}</var-button>
        </template>
        <template #description>
            <div class="user-detail">
                <hr />
                <span>姓名：{{ name }}</span>
                <span>性别：{{ sex }}</span>
                <span>身份证：{{ card }}</span>
                <span>手机号码：{{ phone }}</span>
                <span>入住区域：{{ area }}</span>
                <span>入住楼层：{{ floor }}</span>
                <span>入住房间：{{ room }}</span>
                <span>入住时间：{{ date }}</span>
                <span>备注：{{ remark }}</span>
                <hr />
                <span>{{ result }}</span>
            </div>
        </template>
    </var-result>
</template>

<style scoped>
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