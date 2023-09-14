<script setup>
// 引入vue状态对象
import {ref, reactive} from "vue";
// 引入宿舍人员描述组件、宿舍人员卡片
import PersonDes from './personDes/index.vue'
import PersonCard from './personCard/index.vue'

let {index} = defineProps({
  index: Number,
  title: String,
})

// 状态对象
let floating = ref(false)
let loading = ref(false)


// 计算颜色
const computeColor = () => index ? '#2fbdbb' : '#a6a0ff'
// 改变状态,发生逻辑是：先显示加载框、当扩展页面加载完毕之后、结束加载框
const changeFloating = () => {
  floating.value = true

  // 当前方法不令人满意
  loading.value = true
  setTimeout(() => loading.value = false, 700)
}


// 修改卡片展示的背景颜色、边框
const cardBackground = {
  '--card-background': index ? '#def6f6' : '#f0efff',
  '--card-border-radius': '10px'
}


// 动态展示进度条--实验性
const dynamicStyle = reactive({
  backgroundColor: computeColor()
})

setTimeout(() => {
  dynamicStyle.width = '70vw'
}, 1000)

</script>

<template>
  <div class="card">
    <var-style-provider :style-vars="cardBackground">
      <var-card ripple elevation="0" v-model:floating="floating"
                @click="changeFloating">
        <template #title>
          <h2 class="title" :style="{color:computeColor()}">{{ title }}</h2>
        </template>
        <template #description>
          <div v-if="!floating" class="card-detail">
            <div class="card-detail-number" :style="{color:computeColor()}">67/102</div>
            <div class="card-detail-loading">
              <div class="card-detail-loading-actual" :style="dynamicStyle"></div>
            </div>
          </div>
          <var-loading v-if="loading" type="wave" :color="computeColor()"/>
        </template>
        <template #floating-content>
          <div class="floating-container">
            <div class="floating-description">
              <PersonDes></PersonDes>
            </div>
            <var-divider/>
            <div class="floating-cards">
              <PersonCard :color="computeColor()"></PersonCard>
              <PersonCard :color="computeColor()"></PersonCard>
              <PersonCard :color="computeColor()"></PersonCard>
              <PersonCard :color="computeColor()"></PersonCard>
              <PersonCard :color="computeColor()"></PersonCard>
              <PersonCard :color="computeColor()"></PersonCard>
            </div>
          </div>
        </template>
      </var-card>
    </var-style-provider>
  </div>
</template>

<style scoped>
.card {
  width: 90vw;
  margin-top: 10px;
}

.title {
  margin: 30px 20px 30px;
}

.card-detail {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}

.card-detail-number {
  display: flex;
  justify-content: flex-end;
}

.card-detail-loading {
  margin: 0 auto;
//border: 0.53vw solid black; background-color: #fff; border-radius: 10px; width: 82vw; height: 0.75vh;
}

.card-detail-loading-actual {
  border-radius: 10px;
  width: 1vw;
  height: 0.75vh;
  background-color: #333;
  transition: 0.3s all ease 0s;
}
.floating-container{
  margin: 0 30px;
  display: flex;
  flex-direction: column;
}
.floating-description{
  margin:20px 0;
}
.floating-cards{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>