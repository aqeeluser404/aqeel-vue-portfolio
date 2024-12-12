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
import axios from 'axios';

  export default {
    name: 'App',
    methods: {
      fetchHealthStatus() { 
        axios.get('https://send-email-api-o1hh.onrender.com/health')
        // axios.get('http://localhost:5000/health')
          .then(response => { 
            console.log('Health status:', response.data); 
          }).catch(error => { 
            console.error('Error fetching health status:', error); 
          }); 
      }
    },
    mounted() {
      this.fetchHealthStatus()
    },
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
