<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiGenderMale,mdiGenderFemale } from '@mdi/js'

let {color} = defineProps({
  color:String,
  border:String
})

</script>

<template>
<div class="card-little" :style="{'border-color': color,'color':color}">
  <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
  <svg-icon type="mdi" :path="mdiGenderMale"></svg-icon>
  <p>王小明</p>
  <p>A306</p>
</div>
</template>

<style scoped>
.card-little{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 78vw;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
}
</style>