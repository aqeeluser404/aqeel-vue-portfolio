<template>
  <div>
    <MouseCursor />
    <!-- <router-view /> -->
    <NavBar />
    <NoiseBackground />
  </div>
</template>

<script>
// component imports
import NavBar from './components/utilities/NavBar.vue'
import MouseCursor from './components/utilities/MouseCursor.vue';
import NoiseBackground from './components/utilities/NoiseBackground.vue';

  export default {
    name: 'App',
    components: {
    NavBar,
    MouseCursor,
    NoiseBackground
},
  }
</script>

<style>
  #app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    min-height: 100%;
  }
</style>
