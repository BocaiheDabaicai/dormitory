<script setup>

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition
        name="animation"
        enter-active-class="animate__animated animate__zoomIn"
        leave-active-class="animate__animated animate__zoomOut"
    >
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style scoped>
.main{
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9fbfb;
}
</style>