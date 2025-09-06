<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import LeftMenu from './components/LeftMenu.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <LeftMenu />
  <div class="container">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.container {
  padding-top: calc(var(--header-height) + 35px);
  height: calc(100dvh - var(--footer-height));
  overflow: auto;
}
</style>
