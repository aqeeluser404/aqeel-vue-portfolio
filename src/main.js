import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import NavBar from './components/navigation/NavBar.vue'
import './assets/styles/Styles.css'
import './assets/styles/MediaQueries.css'

createApp(App).use(router).component('NavBar', NavBar).mount('#app')