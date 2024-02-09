<template>
  <div>
    <WallpaperComponent />
    <router-view />
    <NavBar />
    <DarkMode />
  </div>
</template>

<script>

// component imports
import NavBar from './components/navigation/NavBar.vue'
import DarkMode from './components/components/DarkMode.vue'
import WallpaperComponent from './components/components/WallpaperComponent.vue';

  export default {
    name: 'App',
    components: {
      NavBar,
      DarkMode,
      WallpaperComponent
    }
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
