<script setup>
// 引入vue状态对象
import {ref, reactive} from "vue";
// 引入宿舍人员描述组件、宿舍人员卡片
import PersonDes from './personDes/index.vue'
import PersonCard from './personCard/index.vue'
// 引入宿舍房间描述组件、宿舍房间卡片
import DormitoryDes from './dormitoryDes/index.vue'
import DormitoryCard from './dormitoryCard/index.vue'
// 引入首页状态管理仓库
import {useHomeCardStore} from "@/store/homeCard";

let {index, current, max} = defineProps({
  index: Number,
  title: String,
  current: Number,
  max: Number
})

// 状态仓库
let homeCardStore = useHomeCardStore()


// 状态对象
let floating = ref(false)
let loading = ref(false)


// 改变状态,发生逻辑是：先显示加载框、当扩展页面加载完毕之后、结束加载框
const changeFloating = () => {
  floating.value = true

  // 当前方法不令人满意
  loading.value = true
  setTimeout(() => loading.value = false, 700)
}

// 动态展示进度条--实验性
const dynamicStyle = reactive({
  backgroundColor: homeCardStore.computeColor(index)
})

setTimeout(() => {
  dynamicStyle.width = homeCardStore.computeWidth(current,max)
}, 1000)

</script>

<template>
  <div class="card">
    <var-style-provider :style-vars="homeCardStore.cardBackground(index)">
      <var-card ripple elevation="0" v-model:floating="floating"
                @click="changeFloating">
        <template #title>
          <!--      渲染标题     -->
          <h2 class="title" :style="{color:homeCardStore.computeColor(index)}">{{ title }}</h2>
        </template>
        <template #description>
          <!--      渲染进度条      -->
          <div v-if="!floating" class="card-detail">
            <div class="card-detail-number" :style="{color:homeCardStore.computeColor(index)}">{{ current }}/{{ max }}</div>
            <div class="card-detail-loading">
              <div class="card-detail-loading-actual" :style="dynamicStyle"></div>
            </div>
          </div>
          <var-loading v-if="loading" type="wave" :color="homeCardStore.computeColor(index)"/>
        </template>
        <template #floating-content>
          <div class="floating-container">
            <!--      渲染对应的描述      -->
            <div class="floating-description">
              <PersonDes v-if="index === 0"></PersonDes>
              <DormitoryDes v-else></DormitoryDes>
            </div>
            <var-divider/>
            <!--      渲染对应的卡片      -->
            <div v-if="index===0" class="floating-person-cards">
              <div v-for="item in homeCardStore.personArray" :key="item.id">
                <PersonCard v-bind="item" :color="homeCardStore.computeColor(index)"></PersonCard>
              </div>

            </div>
            <div v-else class="floating-dormitory-cards">
              <div v-for="item in homeCardStore.roomArray" :key="item.id">
                <DormitoryCard v-bind="item" :color="homeCardStore.computeColor(index)"></DormitoryCard>
              </div>
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
  //border: 0.53vw solid black;
  background-color: #fff;
  border-radius: 10px;
  width: 82vw;
  height: 0.75vh;
}

.card-detail-loading-actual {
  border-radius: 10px;
  width: 1vw;
  height: 0.75vh;
  background-color: #333;
  transition: 0.3s all ease 0s;
}

.floating-container {
  margin: 0 30px;
  display: flex;
  flex-direction: column;
}

.floating-description {
  margin: 20px 0;
}

.floating-person-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.floating-dormitory-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
</style>