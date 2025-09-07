<script setup>
import Publication from '@/components/Publication.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const publicationsList = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'http://localhost:1337/api/publications?populate[users][populate]=avatar&populate=Media',
    )
    publicationsList.value = data.data
    console.log(publicationsList.value)
  } catch (error) {
    console.log(error.message)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="container">
    <div v-if="loading" class="loader">Chargement des publications...</div>
    <Publication
      v-else
      v-for="publication in publicationsList"
      :key="publication.id"
      :firstname="publication.users.firstname"
      :name="publication.users.name"
      :username="publication.users.username"
      :verified="publication.users.verified"
      :avatar="publication.users.avatar"
      :content="publication.Content"
      :media="publication.Media"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding-bottom: 35px;
}
</style>
