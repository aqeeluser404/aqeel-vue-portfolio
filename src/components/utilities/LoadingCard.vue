<!-- components/utilities/Loading.vue -->
<template>
  <div class="main-container">
    <!-- Your loading or intro content goes here -->
    <h1 class="headline-small-blue">Loading<span class="loading-dots"></span></h1>

  </div>
</template>

<script>
export default {
  name: 'LoadingCard',
};
</script>

<style scoped>
  .main-container {
    text-align: center;
    background-color: #0E0E0E;
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
