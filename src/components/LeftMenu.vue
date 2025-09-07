<script setup>
import { RouterLink } from 'vue-router'
import LogoutBtn from './LogoutBtn.vue'

function isAuthenticated() {
  return !!localStorage.getItem('token')
}
</script>

<template>
  <div class="leftMenu">
    <nav>
      <div class="navMenu">
        <RouterLink :to="{ name: 'home' }"><i class="fa-solid fa-house"></i> Accueil</RouterLink>
        <RouterLink :to="{ name: 'login' }" v-if="!isAuthenticated()">
          <i class="fa-solid fa-user"></i>Connexion</RouterLink
        >
        <LogoutBtn />
      </div>
    </nav>
  </div>
</template>

<style scoped>
.leftMenu {
  position: fixed;
  top: var(--header-height);
  left: 0;
  bottom: 0;
  width: 250px;
  overflow: auto;
  border-right: 1px solid var(--main-grey);
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 30px;
  z-index: 9;
}

.navMenu {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.navMenu a {
  color: var(--main-black);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
}

.navMenu i {
  color: var(--main-purple);
}
</style>
