<script setup>
// 引入房间状态仓库
import {useHouseStore} from "@/store/house";
// 引入信号灯组件、宿舍楼卡片
import Lamp from "@/components/house/lamp.vue";
// 引入路由对象
import {useRoute, useRouter} from "vue-router";
import {useHomeStore} from "@/store/home";

const houseStore = useHouseStore() // 暂时无用
const homeStore = useHomeStore()
const route = useRoute()
const router = useRouter()

const changeRoute = function (path) {
  houseStore.showFloor = true
  houseStore.updateArea('')
  router.push({path})
}
// console.log(route.matched)
</script>

<template>
  <div class="main-container">
    <div class="head">
      <div class="head-left">
        <var-breadcrumbs separator="/">
          <var-breadcrumb v-for="(item,index) in route.matched.slice(1)" :key="index" @click="changeRoute(item.path)">
            {{ item.meta.title }}
          </var-breadcrumb>
        </var-breadcrumbs>
      </div>
      <div class="head-right">
        <Lamp type="success" :value="122"/>
        <Lamp type="warning" :value="112"/>
        <Lamp type="danger" :value="132"/>
      </div>
    </div>
    <div class="detail-title">
      <div class="detail-title-left">公寓类型</div>
      <div class="detail-title-right">{{ houseStore.getRightName }}</div>
    </div>
    <router-view v-slot="{ Component }">
      <component :is="Component"/>
    </router-view>
  </div>
</template>

<style scoped>
.head {
  margin: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.head-left {
  border: 1px solid #6a7895;
  border-radius: 10px;
  padding: 10px;
  width: 160px;
  text-align: center;
}

.house-body {
  margin: 20px 15px 10px;
}
</style>