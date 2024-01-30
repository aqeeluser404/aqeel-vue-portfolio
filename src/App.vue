<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from './components/navigation/NavBar.vue'
  export default {
    name: 'App',
    components: {
      NavBar,
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
  margin-top: 60px;
}
</style>
