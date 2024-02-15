// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    isNavbarVisible: true,
    showLoading: true
  },
  mutations: {
    toggleNavbar(state) {
      state.isNavbarVisible = !state.isNavbarVisible;
    },
    setShowLoading(state, value) {
      state.showLoading = value;
    },
  },
});
