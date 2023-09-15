<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import {mdiGenderMale, mdiGenderFemale} from '@mdi/js'

let {color} = defineProps({
  // 颜色属性
  color: String,
  border: String,
  // 对象属性
  id: String,
  avatar: String,
  sex: String,
  name: String,
  dormitoryNumber: String
})

</script>

<template>
  <div class="card-little" :style="{'border-color': color,'color':color}">
    <var-avatar :src="avatar"/>
    <svg-icon type="mdi" :path="sex === 'male' ? mdiGenderMale : mdiGenderFemale"></svg-icon>
    <p>{{ name }}</p>
    <p>{{ dormitoryNumber }}</p>
  </div>
</template>

<style scoped>
.card-little {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 78vw;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 15px;
}
</style>