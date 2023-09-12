<script setup>
let {index} = defineProps({
  index:Number,
  title:String,
})

const cardBackground = {
  '--card-background': +index?'#def6f6':'#f0efff',
  '--card-border-radius':'10px'
}
</script>

<template>
  <div class="card">
    <var-style-provider :style-vars="cardBackground">
      <var-card ripple elevation="0">
        <template #description>
          <div>{{ title }}</div>
        </template>
      </var-card>
    </var-style-provider>
  </div>
</template>

<style scoped>
.card {
  width: 44vw;
  margin-top: 10px;
}
</style>