<template>
  <footer>
    <div class="container">
      <div class="infoNav">
        <ul>
          <li>Infos 1</li>
          <li>Infos 1</li>
          <li>Infos 1</li>
          <li>Infos 1</li>
          <li>Infos 1</li>
        </ul>
        <ul>
          <li>Infos 1</li>
          <li>Infos 1</li>
          <li>Infos 1</li>
          <li>Infos 1</li>
          <li>Infos 1</li>
        </ul>
        <ul>
          <li>Infos 1</li>
          <li>Infos 1</li>
          <li>Infos 1</li>
          <li>Infos 1</li>
          <li>Infos 1</li>
        </ul>
        <ul>
          <li>Infos 1</li>
          <li>Infos 1</li>
          <li>Infos 1</li>
          <li>Infos 1</li>
          <li>Infos 1</li>
        </ul>
      </div>
      <div class="websiteInfo">
        <p class="hogbookInfo">
          <img src="../assets/imgs/mobileLogo.webp" alt="Logo de Hogbook" width="12px" />Hogbook©
        </p>
        <p>Made by <span>marceaudev</span></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  height: var(--footer-height);
  box-shadow: var(--main-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.infoNav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: var(--main-purple);
}

.websiteInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 12px;
}

.hogbookInfo {
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: bold;
}

span {
  font-weight: bold;
}
</style>
