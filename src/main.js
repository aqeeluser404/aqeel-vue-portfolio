import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import NavBar from './components/navigation/NavBar.vue'
import '../src/assets/styles/style.css';

createApp(App).use(router).component('NavBar', NavBar).mount('#app')