<template>
  <div>
    <div class="darkmode">
      <img src="@/assets/logo/darkmode.svg" alt="dark-mode">
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
  @media only screen and (max-width: 611px) {
    .darkmode img {
      width: 25px;
      height: 25px;
    }
  }
</style>