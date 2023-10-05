<script setup>
// 引入性别图标
import SvgIcon from '@jamescoyle/vue-icon'
import {mdiLightbulbOnOutline, mdiLightbulb} from '@mdi/js'

// 引入传递参数
let {personObject} = defineProps({
  personObject:Object
})

let {avatar, name, phone, status} = personObject

let property = {
  color:status?'#02c490':'#f44438',
  icon:status?mdiLightbulbOnOutline:mdiLightbulb
}

</script>

<template>
<div class="card">
  <var-avatar size="large" :src="avatar" :round="false"/>
  <div class="text">
    <span>姓名:{{ name }}</span>
    <span>手机号码:{{ phone }}</span>
  </div>
  <svg-icon :style="{color: property.color}" size="48" type="mdi" :path="property.icon"></svg-icon>
</div>
</template>

<style scoped>
.card{
  background-color: #e5e5e5;
  padding: 10px;
  margin: 15px;
  border-radius: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.text{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 30px 0 20px;
  height: 60px;
  letter-spacing: 1px;
}
</style>