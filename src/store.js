// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    isNavbarVisible: true,
    showLoading: true
  },
  mutations: {
    setShowLoading(state, value) {
      state.showLoading = value;
    },
    toggleNavbar(state) {
      state.isNavbarVisible = !state.isNavbarVisible;
    },
  },
});
