<script setup>
// 引入vue状态对象
import {ref,reactive} from "vue";

let {index} = defineProps({
  index:Number,
  title:String,
})

// 状态对象
let floating = ref(false)


// 计算颜色
const computeColor = () => index?'#2fbdbb':'#a6a0ff'

// 修改卡片展示的样式
const cardBackground = {
  '--card-background': index?'#def6f6':'#f0efff',
  '--card-border-radius':'10px'
}

// 动态展示进度条
const dynamicStyle = reactive({
  backgroundColor:computeColor()
})
setTimeout(()=>{
  dynamicStyle.width = '70vw'
},1000)

</script>

<template>
  <div class="card">
    <var-style-provider :style-vars="cardBackground">
      <var-card ripple elevation="0" v-model:floating="floating"
                @click="floating = true">
        <template #title>
          <h2 class="title" :style="{color:computeColor()}">{{ title }}</h2>
        </template>
        <template #description>
          <div class="card-detail">
            <div class="card-detail-number" :style="{color:computeColor()}">67/102</div>
            <div class="card-detail-loading">
              <div class="card-detail-loading-actual" :style="dynamicStyle"></div>
            </div>
          </div>
        </template>
        <template #floating-content>
          <var-divider dashed />

          <div class="card-example-text">
            如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~
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
.title{
  margin: 30px 20px 30px;
}
.card-detail{
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}
.card-detail-number{
  display: flex;
  justify-content: flex-end;
}
.card-detail-loading{
  margin: 0 auto;
  //border: 0.53vw solid black;
  background-color: #fff;
  border-radius: 10px;
  width: 82vw;
  height: 0.75vh;
}
.card-detail-loading-actual{
  border-radius: 10px;
  width: 1vw;
  height: 0.75vh;
  background-color: #333;
  transition: 0.3s all ease 0s;
}
</style>