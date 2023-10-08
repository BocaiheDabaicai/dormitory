<script setup>
let {lampObject} = defineProps({
  lampObject:Object
})

let {type, value, content} = lampObject

</script>

<template>
  <var-tooltip :content="content" trigger="click" placement="top">
    <var-badge style="padding:10px;font-size: 4.5vw;margin: 0 4px" :type="type" :value="value"/>
  </var-tooltip>
</template>

<style scoped>

</style>