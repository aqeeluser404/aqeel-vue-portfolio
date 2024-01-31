<template>
  <div>
    <router-view />
    <NavBar />
    <LayoutComponent />
  </div>
</template>

<script>

// component imports
import NavBar from './components/navigation/NavBar.vue'
import LayoutComponent from './components/components/LayoutComponent.vue'

  export default {
    name: 'App',
    components: {
      NavBar,
      LayoutComponent
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
  }
</style>
