<template>
  <div>
    <div class="darkmode">
      <img src="@/assets/logo/darkmode.svg" alt="dark-mode">
    </div>
    <div class="page-number">
      <h1 class="font-xs color-blue family-lekton">01</h1>
    </div>
  </div>
</template>

<style scoped>
  .darkmode {
    position: fixed;
    top: 10px;
    right: 10px;
  }
  .darkmode img {
    filter: brightness(1) invert(0);
  }
</style>