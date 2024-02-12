import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import NavBar from './components/utilities/NavBar.vue'
import store from './store';
import './assets/styles/Styles.css'
import './assets/styles/MediaQueries.css'

createApp(App).use(router).use(store).component('NavBar', NavBar).mount('#app')