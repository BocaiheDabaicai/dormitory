<script setup>
// 引入情况状态管理对象
import {useSituationStore} from "@/store/situation";

let situationStore = useSituationStore()
let {situationObject} = defineProps({
  situationObject: Object,
})
let {color, title, content, date} = situationObject

const clearMessage = function () {
  // 清除选中的消息卡片
  situationStore.messageArray = situationStore.messageArray.filter(item => item !== situationObject)
}
const topMessage = function () {
  // 置顶选中的卡片
  let tempObject = situationObject
  situationStore.messageArray = situationStore.messageArray.filter(item => item !== situationObject)
  situationStore.messageArray.unshift(tempObject)
}
</script>

<template>
  <div class="infoCard">
    <var-paper :elevation="1" :radius="10">
      <var-chip :type="color" :round="false" block>
        <div class="head">
          <var-icon name="radio-blank"/>
          <span class="head-text">{{ title }}</span>
        </div>
      </var-chip>
      <div class="infoBody">
        <var-icon name="content-copy" :size="30" :color="`var(--color-${color})`"/>
        <span class="infoBody-text">{{ content }}</span>
      </div>
      <var-divider/>
      <div class="detail-title">
        <div class="detail-title-left">
          <var-space :size="20">
            <var-button elevation="0" class="buttonText" size="small" @click="clearMessage">清除</var-button>
            <var-button elevation="0" class="buttonText" size="small" @click="topMessage">置顶</var-button>
          </var-space>
        </div>
        <div class="detail-title-right">{{ date }}</div>
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

.buttonText {
  font-size: 16px;
}
</style>