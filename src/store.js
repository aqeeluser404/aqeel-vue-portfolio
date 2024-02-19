import { createStore } from 'vuex';

export default createStore({
  state: {
    // ensuring both the navbar and loading screen state is visible
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
