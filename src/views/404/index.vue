<script setup>
// 引入路由器对象
import {useRouter} from "vue-router";

let router = useRouter()


const changeRoute = function () {
  router.replace({path: '/login'})
}
</script>

<template>
  <div class="nullPage">
    <var-result class="result" type="empty" title="页面不存在捏~" description="点击下面的按钮回到登录界面吧">
      <template #footer>
        <var-button
            color="var(--result-empty-color)"
            text-color="#fff"
            size="large"
            @click="changeRoute"
        >
          知道了
        </var-button>
      </template>
    </var-result>
  </div>
</template>

<style scoped>
.nullPage {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>