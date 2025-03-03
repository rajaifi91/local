<script setup lang="ts">

import AppMainLayout from './layouts/AppMainLayout.vue'

</script>

<template>

  <AppMainLayout />
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
main {
  min-height: 80vh;
}
</style>
