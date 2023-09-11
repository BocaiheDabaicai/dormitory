<script setup>
// 引入状态对象
import {ref} from "vue";
// 引入Home仓库、User仓库
import {useHomeStore} from "@/store/home";
import {useUserStore} from "@/store/user";


let homeStore = useHomeStore()
let userStore = useUserStore()

let showLeftBar = ref(false)

// 退出登录
const logout = async function(){
  await userStore.logout()

}
</script>

<template>
  <var-app-bar color="white" text-color="black"
               elevation="0" title-position="center" :title="homeStore.title">
    <template #left>
      <var-menu placement="bottom-end" v-model:show="showLeftBar">
        <var-button text>
          <var-icon name="account-circle" :size="24" />
        </var-button>

        <template #menu>
          <var-cell ripple @click="logout">退出登录</var-cell>
        </template>
      </var-menu>
    </template>

    <template #right>
      <var-button
          round
          text
      >
        <var-icon name="bell-outline" />
      </var-button>
    </template>

  </var-app-bar>
</template>

<style scoped>

</style>