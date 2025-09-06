<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <div class="logoSearchBloc">
        <RouterLink :to="{ name: 'home' }">
          <div class="logoBloc">
            <img src="../assets/imgs/mobileLogo.webp" alt="Logo de Hogbook" />
          </div>
        </RouterLink>
        <div class="searchBloc">
          <label for="search"><i class="fa-solid fa-magnifying-glass"></i></label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Rechercher une personne, un groupe..."
          />
        </div>
      </div>
      <nav class="navBloc">
        <RouterLink :to="{ name: 'home' }"
          >Connexion | Inscription <i class="fa-solid fa-user"></i
        ></RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  height: var(--header-height);
  box-shadow: var(--main-shadow);
}

.container {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}

.logoSearchBloc {
  display: flex;
  align-items: center;
  gap: 5px;
}

.logoBloc {
  height: 100%;
  display: flex;
  align-items: center;
}

.logoBloc img {
  height: 35px;
}

.searchBloc {
  position: relative;
  display: flex;
  align-items: center;
  width: 250px;
  height: 35px;
  background: var(--main-grey);
  border-radius: 8px;
}

.searchBloc label {
  width: 15%;
  height: 100%;
  position: absolute;
  font-size: 16px;
  color: var(--grey-darker);
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
}

.searchBloc input {
  display: flex;
  padding: 0 10px;
  height: 100%;
  width: 85%;
  border: none;
  border-radius: 8px;
  text-overflow: ellipsis;
  background: var(--main-grey);
}

.searchBloc input:focus {
  outline: none;
  box-shadow: none;
}

.searchBloc input::placeholder {
  color: var(--grey-darker);
}

.navBloc {
  display: flex;
  gap: 20px;
}

.navBloc a {
  color: var(--main-black);
  text-decoration: none;
  font-size: 14px;
}
</style>
