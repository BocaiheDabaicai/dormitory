<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

let activeIcon = ref(0)
let router = useRouter()

const jumpPage = function(path){
  router.push({path:path})
}


</script>

<template>
  <var-bottom-navigation
      class="bottom-navigation-example"
      v-model:active="activeIcon"
  >
    <var-bottom-navigation-item @click="jumpPage('/home')" label="首页" icon="home"/>
    <var-bottom-navigation-item @click="jumpPage('/house')" label="房间" icon="magnify"/>
    <var-bottom-navigation-item @click="jumpPage('/situation')" label="情况" icon="heart"/>
    <var-bottom-navigation-item @click="jumpPage('/statistics')" label="统计" icon="bell"/>

    <template #fab>
      <var-icon name="heart"/>
    </template>
  </var-bottom-navigation>
</template>

<style scoped>

</style>