import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import store from './store';
import LoadingCard from './components/utilities/LoadingCard.vue'; 
import NavBar from './components/utilities/NavBar.vue';
import './components/styles/Styles.css'

// LoadingCard component
let showLoadingPage = true;
const loadingContainer = document.createElement('div');   // div to mount the loading container
document.body.appendChild(loadingContainer);
store.commit('toggleNavbar');   // Set isNavbarVisible to true initially

// Define a global beforeResolve guard
router.beforeResolve((to, from, next) => {
  // Show loading component before entering the first route
  if (showLoadingPage) {
    createApp(LoadingCard).mount(loadingContainer);

    // Simulate a delay (3 seconds in this example)
    setTimeout(() => {
      loadingContainer.remove(); // Remove the loading component
      showLoadingPage = false;
      // Set isNavbarVisible to false after loading to hide the navigation initially
      store.commit('toggleNavbar');
      next();
    }, 4000);
  } 
  else {
    next();
  }
});

router.afterEach(() => {
  // Hide loading component after the route has been entered
  store.commit('setShowLoading', false);
});

const app = createApp(App);
app.use(router);
app.use(store);
app.component('NavBar', NavBar);
app.mount('#app');
