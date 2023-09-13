<script setup>
// 引入vue状态对象
import {ref} from "vue";
// 引入规范化时间
import {timer} from "@/utlis/timer";
// 引入卡片组件
import HomeCard from '@/components/home/homeCard/index.vue'

let date = timer()
let floating = ref(false)

</script>

<template>
  <div class="main-container">
    <div class="header">
      <h2 class="header-title">欢迎回来！</h2>
      <span class="header-fix">Hi! 开发者</span>
    </div>
    <div class="detail-title">
      <div class="detail-title-left">公寓情况</div>
      <div class="detail-title-right">{{ date }}</div>
    </div>
    <div class="cards">
      <HomeCard :index="0" title="宿舍人员"></HomeCard>
      <HomeCard :index="1" title="宿舍房间"></HomeCard>
    </div>
  </div>
</template>

<style scoped>
.header {
  margin: 0 15px;
}

.header-title {
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.header-fix {
  color: #b2b6bb;
  letter-spacing: 2px;
}

.cards {
  margin: 0 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>