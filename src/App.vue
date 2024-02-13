<template>
  <div>
    <MouseCursor />
    <router-view />
    <NavBar />
    <DarkMode />
  </div>
</template>

<script>
// component imports
import NavBar from './components/utilities/NavBar.vue'
import DarkMode from './components/utilities/DarkMode.vue'
import MouseCursor from './components/utilities/MouseCursor.vue';

  export default {
    name: 'App',
    components: {
      NavBar,
      DarkMode,
      MouseCursor
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
    height: 100%;
  }
</style>
