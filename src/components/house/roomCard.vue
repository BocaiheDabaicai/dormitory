<script setup>
// 引入路由器对象
import {useRouter} from "vue-router";

// 接收props参数
let {roomObject} = defineProps({
  roomObject: Object
})

let router = useRouter()
let {number, current, max} = roomObject
const changeRoute = function () {
  router.push({path: '/person'})
}

</script>

<template>
  <var-paper class="card" :elevation="2" radius="15" ripple>
    <div class="floor" @click="changeRoute">
      <span>{{ number }}</span>
      <span>{{ current }}/{{ max }}</span>
    </div>
  </var-paper>
</template>

<style scoped>
.card {
  padding: 15px;
  width: 24vw;
  background-color: #def6f6;
  font-size: 5vw;
  margin: 15px;
}

.floor {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>