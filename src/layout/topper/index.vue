<script setup>

</script>

<template>
  <var-app-bar color="white" text-color="black"
               elevation="0" title-position="center" title="Home">
    <template #left>
      <var-menu>
        <var-button
            round
            text
        >
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <var-cell ripple>选项卡</var-cell>
          <var-cell ripple>选项卡</var-cell>
          <var-cell ripple>选项卡</var-cell>
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