<script setup>

let {color} = defineProps({
  // 颜色属性
  color:String,
  border:String,
  // 房间属性
  id: String,
  dormitoryNumber: String,
  current: Number,
  max: Number
})

</script>

<template>
  <div class="card-little" :style="{'border-color': color,'color':color}">
    <p>{{ dormitoryNumber }}</p>
    <p>{{ current }}/{{ max }}</p>
  </div>
</template>

<style scoped>
.card-little{
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15vw;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
}
</style>