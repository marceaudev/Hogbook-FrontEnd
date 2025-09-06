<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import LeftMenu from './components/LeftMenu.vue'
</script>

<template>
  <Header />
  <LeftMenu />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  padding-top: calc(var(--header-height) + 35px);
  height: calc(100dvh - var(--header-height));
  overflow: auto;
}
</style>
