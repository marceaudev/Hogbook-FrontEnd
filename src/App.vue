<script setup>
import { RouterView, useRoute } from 'vue-router'
import Header from './components/Header.vue'
import LeftMenu from './components/LeftMenu.vue'
import Footer from './components/Footer.vue'
const route = useRoute()
</script>

<template>
  <Header v-if="!route.meta.hideChrome" />
  <LeftMenu v-if="!route.meta.hideChrome" />
  <div class="routerWrapper" :class="{ 'auth-wrapper': route.meta.hideChrome }">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.routerWrapper {
  padding-top: calc(var(--header-height) + 35px);
  height: calc(100dvh - var(--footer-height));
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.routerWrapper::-webkit-scrollbar {
  display: none;
}

.auth-wrapper {
  padding-top: 0;
  height: calc(100dvh - var(--footer-height));
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
