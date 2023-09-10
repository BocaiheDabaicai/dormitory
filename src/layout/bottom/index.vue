<script setup>
import {ref} from 'vue'
// 引入路由器对象
import {useRouter} from "vue-router";

let activeIcon = ref('Home')
let router = useRouter()

const jumpPage = function(name){
  router.push({name:name})
}


</script>

<template>
  <var-bottom-navigation
      class="bottom-navigation-example"
      v-model:active="activeIcon"
  >
    <var-bottom-navigation-item @click="jumpPage" name="Home"  label="首页" icon="home"/>
    <var-bottom-navigation-item @click="jumpPage" name="House"  label="房间" icon="magnify"/>
    <var-bottom-navigation-item @click="jumpPage" name="Situation"  label="情况" icon="heart"/>
    <var-bottom-navigation-item @click="jumpPage" name="Statistics"  label="统计" icon="bell"/>

    <template #fab>
      <var-icon name="heart"/>
    </template>
  </var-bottom-navigation>
</template>

<style scoped>

</style>