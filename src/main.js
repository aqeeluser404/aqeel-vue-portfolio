import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import store from './store';
import LoadingCard from './components/utilities/LoadingCard.vue'; 
import NavBar from './components/utilities/NavBar.vue';
import './components/styles/Styles.css'

let showLoadingPage = true;
const loadingContainer = document.createElement('div');   
document.body.appendChild(loadingContainer);
store.commit('toggleNavbar');   

router.beforeResolve((to, from, next) => {
  if (showLoadingPage) {
    createApp(LoadingCard).mount(loadingContainer);

    setTimeout(() => {
      loadingContainer.remove();
      showLoadingPage = false;
      store.commit('toggleNavbar');
      next();
    }, 4000);
  } 
  else {
    next();
  }
});

router.afterEach(() => {
  store.commit('setShowLoading', false);
});

const app = createApp(App);
app.use(router);
app.use(store);
app.component('NavBar', NavBar);
app.mount('#app');
