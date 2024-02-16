<!-- components/utilities/Loading.vue -->
<template>
  <div class="main-container">
    <!-- Your loading or intro content goes here -->
    <div>
      <img src="@/assets/misc/hour.gif" alt="#" class="hour-glass">
    </div>
    <h1 class="headline-small">Loading<span class="loading-dots"></span></h1>

  </div>
</template>

<script>
export default {
  name: 'LoadingCard',
  // mounted() {
  //   this.$store.commit('toggleNavbar');
  // }
};
</script>

<style scoped>
  .hour-glass {
      width: 150px;
      background-color: #0E0E0E;
      filter: invert(94.5%) hue-rotate(1deg);

  }
  .main-container {
    text-align: center;
    background-color: #0E0E0E;
    z-index: 1001;
  }
  .loading-dots::after {
    content: '';
    display: inline-block;
    animation: typingDots 1.5s steps(4, end) infinite;
  }
  @keyframes typingDots {
    0%, 20% {
      content: '';
    }
    40% {
      content: '.';
    }
    60% {
      content: '..';
    }
    80%, 100% {
      content: '...';
    }
  }
</style>
