// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', meta: { hideChrome: true }, component: LoginView },
  { path: '/register', name: 'register', meta: { hideChrome: true }, component: RegisterView },
  { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

function isAuthenticated() {
  return !!localStorage.getItem('token')
}
function isGuestMode() {
  return localStorage.getItem('guest') === '1'
}

router.beforeEach((to) => {
  const authed = isAuthenticated()
  const guest = isGuestMode()

  if (to.name === 'home' && !authed && !guest) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  if ((to.name === 'login' || to.name === 'register') && authed) {
    return { name: 'home' }
  }
})

export default router
