<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function isAuthenticated() {
  return !!localStorage.getItem('token')
}

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('guest')
  router.replace({ name: 'login' })
}
</script>

<template>
  <p @click="logout" v-if="isAuthenticated()"><i class="fa-solid fa-door-open"></i>Déconnexion</p>
</template>

<style scoped>
p {
  display: flex;
  gap: 5px;
}

i {
  color: var(--main-purple);
}
</style>
