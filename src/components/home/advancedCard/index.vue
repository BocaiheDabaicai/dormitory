<script setup>
// 状态管理对象
import {reactive} from "vue";
// 路由器对象
import {useRouter} from "vue-router";

let styleVars = reactive({
    '--card-background':'#21181b'
})
const router = useRouter()
const onChange = function(){
    router.push({
        name:'advance'
    })
}
</script>

<template>
    <var-style-provider :style-vars="styleVars">
        <var-card class="card" ripple @click="onChange">
            <template #title>
                <div class="detail">
                    <div class="left">
                        <div class="title">
                            <span class="title-span">宿舍</span>
                            <span class="title-span">数据分析</span>
                        </div>
                        <div class="sub-title"><span>统计全面</span><span>数据分析</span></div>
                    </div>
                    <var-divider vertical margin="25px" style="background-color: #9f9fa1"/>
                    <div class="right">
                        <p>统计重要信息</p>
                        <p>锚定参与度、付出度</p>
                        <p>确定入住品性</p>
                    </div>
                </div>
            </template>
        </var-card>
        <div class="stripe"></div>
    </var-style-provider>
</template>

<style scoped>
.card {
    width: 90vw;
    margin-top: 10px;
    background-color: #21181b;
}

.detail {
    display: flex;
    flex-direction: row;
}

.left {
    width: 140px;
    display: flex;
    flex-direction: column;
}

.title {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 130px;
    color: #e5f6fd;
    margin-top: 10px;
}

.title-span {
    margin-top: 8px;
}

.sub-title {
    display: flex;
    justify-content: space-evenly;
    margin-top: 5px;
    color: #6f7074;
}

.right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #9f9fa1;
}

.right p:before{
    content: "o";
    display: inline;
    margin-right: 5px;
}

.stripe{
    height: 5px;
    border-radius: 20px;
    animation: stripe-animation 2.3s linear infinite alternate;
}

@keyframes stripe-animation {
    0%{
        background-color: #8ba6d3;
    }
    35%{
        background-color: #8A93C7;
    }
    70%{
        background-color: #8D80B7;
    }
    100%{
        background-color: #916CA3;
    }
}


</style>

