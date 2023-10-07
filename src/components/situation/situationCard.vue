<script setup>
import {timer} from "@/utlis/timer";


defineProps({
  color:String
})
</script>

<template>
  <div class="infoCard">
    <var-paper :elevation="1" :radius="10">
      <var-chip :type="color" :round="false" block>
        <div class="head">
          <var-icon name="radio-blank"/>
          <span class="head-text">维修请求</span>
        </div>
      </var-chip>
      <div class="infoBody">
        <var-icon name="content-copy" :size="30" :color="`var(--color-${color})`"/>
        <span class="infoBody-text">当前存在3个维修请求未处理</span>
      </div>
      <var-divider/>
      <div class="detail-title">
        <div class="detail-title-left">12</div>
        <div class="detail-title-right">{{ timer() }}</div>
      </div>
    </var-paper>
  </div>
</template>

<style scoped>
.infoCard {
  margin: 0 15px 30px;
}

.head {
  display: flex;
  align-items: center;
}

.head-text {
  margin-left: 10px;
}

.infoBody {
  margin: 20px 10px;
  display: flex;
  align-items: center;
}

.infoBody-text {
  margin-left: 20px;
  font-size: 18px;
}

.detail-title {
  margin: 20px 15px;
  display: flex;
  justify-content: space-between;
}
</style>