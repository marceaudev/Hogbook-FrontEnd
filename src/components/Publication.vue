<script setup>
import { ref } from 'vue'

const props = defineProps({
  firstname: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  avatar: { type: Object },
  content: { type: String, required: true },
  verified: { type: Boolean, required: true },
  media: { type: Object },
})

const avatarLoaded = ref(false)
const mediaLoaded = ref(false)
</script>

<template>
  <section class="publication">
    <div class="usersPb">
      <div v-if="avatar && !avatarLoaded" class="skeleton skeleton-avatar"></div>
      <img
        v-if="avatar"
        :src="'http://localhost:1337' + avatar.url"
        :alt="username"
        @load="avatarLoaded = true"
        v-show="avatarLoaded"
      />
      <div class="usersInfos">
        <div class="usersFullName">
          <p>{{ firstname }}</p>
          <p>{{ name }}</p>
          <div v-if="verified" class="verified tooltip">
            <i class="fa-solid fa-circle-check"></i>
            <span class="tooltip-text">Vérifié</span>
          </div>
        </div>
        <p class="username">@{{ username }}</p>
      </div>
    </div>
    <div class="contentPb">
      <p>{{ content }}</p>
      <div v-if="media && !mediaLoaded" class="skeleton skeleton-media"></div>
      <img
        v-if="media"
        :src="'http://localhost:1337' + media.url"
        :alt="username"
        @load="mediaLoaded = true"
        v-show="mediaLoaded"
      />
    </div>
    <div class="actionPb">
      <i class="fa-regular fa-thumbs-up"></i>
      <i class="fa-regular fa-thumbs-down"></i>
      <i class="fa-regular fa-comment"></i>
      <i class="fa-regular fa-share-from-square"></i>
    </div>
  </section>
</template>

<style scoped>
.publication {
  width: 50%;
  border: 1px solid var(--main-grey);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.usersPb {
  display: flex;
  align-items: center;
}

.usersPb img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 10px;
}

.usersInfos {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.usersFullName {
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: 600;
}

.username {
  font-weight: 400;
  color: var(--grey-darker);
  font-size: 12px;
}

.contentPb {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contentPb img {
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
}

.actionPb {
  display: flex;
  width: 50%;
  justify-content: space-between;
}

.verified {
  color: var(--main-purple);
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: default;
  cursor: pointer;
}

.tooltip-text {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 25px;
  background-color: var(--main-black);
  color: #fff;
  font-size: 12px;
  padding: 5px 8px;
  border-radius: 4px;
  white-space: nowrap;
  transition: opacity 0.3s;
  z-index: 10;
}

.verified:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.skeleton {
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
}

.skeleton-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.skeleton-media {
  width: 100%;
  height: 200px;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
