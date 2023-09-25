<script setup>
let {type} = defineProps({
  type: String,
  value: Number
})


</script>

<template>
  <var-tooltip content="test" trigger="click" placement="top">
    <var-badge style="padding:10px;font-size: 4.5vw;margin: 0 4px" :type="type" :value="value"/>
  </var-tooltip>
</template>

<style scoped>

</style>