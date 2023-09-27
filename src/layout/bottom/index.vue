<script setup>
import {ref} from 'vue'
// 引入路由器对象
import {useRoute, useRouter} from "vue-router";
// 引入Home、House状态仓库
import {useHomeStore} from "@/store/home";
import {useHouseStore} from "@/store/house";

let router = useRouter()
let route = useRoute()
let homeStore = useHomeStore()
let houseStore = useHouseStore()

let activeIcon = ref(route.matched[1].name)

const jumpPage = function(name){
  houseStore.showFloor = true
  houseStore.updateArea('')
  homeStore.changeTile(name)
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
    <var-bottom-navigation-item @click="jumpPage" name="Situation"  label="情况" icon="checkbox-marked-outline"/>
    <var-bottom-navigation-item @click="jumpPage" name="Statistics"  label="统计" icon="notebook"/>

    <template #fab>
      <var-icon name="heart"/>
    </template>
  </var-bottom-navigation>
</template>

<style scoped>

</style>