<script setup>

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition
        name="wholePage"
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

.wholePage-enter-active,
.wholePage-leave-active{
    transition: all 0.46s ease;
}

.wholePage-enter-from,
.wholePage-leave-to {
    opacity: 0;
    transform: translateX(-80vw);
    position: absolute;
}
</style>