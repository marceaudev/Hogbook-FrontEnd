<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')
const route = useRoute()
const router = useRouter()

const showPw = ref(false)

function isAuthenticated() {
  return !!localStorage.getItem('token')
}

onMounted(() => {
  if (isAuthenticated()) {
    router.replace({ name: 'home' })
  }
})

async function onSubmit() {
  loading.value = true
  errorMsg.value = ''
  try {
    const { data } = await axios.post('http://localhost:1337/api/auth/local', {
      identifier: email.value,
      password: password.value,
    })
    localStorage.setItem('token', data.jwt)
    localStorage.removeItem('guest')
    const redirect = route.query.redirect || { name: 'home' }
    router.replace(redirect)
  } catch (e) {
    errorMsg.value = 'Identifiants invalides.'
  } finally {
    loading.value = false
  }
}

function continueAsGuest() {
  localStorage.setItem('guest', '1')
  router.replace({ name: 'home' })
}
</script>

<template>
  <main class="container">
    <div class="hero">
      <img src="../assets/imgs/logo.webp" alt="Logo de Hogbook" />
    </div>
    <form class="loginForm" @submit.prevent="onSubmit">
      <input v-model="email" type="email" required placeholder="Email" />
      <div class="password">
        <input :type="showPw ? 'text' : 'password'" v-model="password" placeholder="Mot de passe" />
        <div class="showpass" @click="showPw = !showPw">
          <i class="fa-solid fa-eye" v-if="!showPw"></i>
          <i class="fa-solid fa-eye-slash" v-else></i>
        </div>
      </div>

      <button type="submit" :disabled="loading" class="submit">
        {{ loading ? 'Connexion…' : 'Se connecter' }}
      </button>

      <p v-if="errorMsg" class="error">{{ errorMsg }}</p>

      <router-link :to="{ name: 'register' }">Créer un compte</router-link>
      <div class="line"></div>
      <p class="ghost" @click="continueAsGuest">Continuer sans se connecter</p>
    </form>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  justify-content: center;
}

.loginForm {
  width: 100%;
  max-width: 420px;
  box-shadow: var(--main-shadow);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
}

.name {
  width: 100%;
  display: flex;
  gap: 12px;
}

.loginForm input {
  position: relative;
  display: flex;
  align-items: center;
  height: 35px;
  background: var(--main-grey);
  border-radius: 8px;
  border: none;
  width: 100%;
  text-align: center;
}

.password {
  display: flex;
  width: 100%;
  position: relative;
  height: 35px;
}

.password input {
  border-radius: 8px 0 0 8px;
}

.showpass {
  height: 100%;
  background-color: var(--main-grey);
  border: 1px solid var(--grey-darker);
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-black);
  border-radius: 0 10px 10px 0;
}

.submit {
  background-color: var(--main-purple);
  height: 35px;
  border-radius: 8px;
  border: none;
  color: var(--main-white);
  padding: 0 15px;
  font-weight: 600;
}

.error {
  color: var(--main-red);
}

a {
  color: var(--main-purple);
}

.ghost {
  text-decoration: underline;
  cursor: pointer;
}

.line {
  height: 2px;
  width: 75%;
  background-color: var(--main-grey);
}
</style>
