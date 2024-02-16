<template>
    <!-- logo nav button to appear when nav container is hidden -->
    <picture v-if="!showLoadingPage && !isNavbarVisible">
        <img src="@/assets/logo/a.png" alt="a-logo" class="logo logo-container" @click="toggleNavbar"/>
    </picture>
  
    <!-- container to make navbar visible/not visible -->
    <div class="navbar-vertical-fixed" :class="{ 'hidden': !isNavbarVisible }">
        <!-- navbar -->
        <nav id="navbar">
            <div class="nav-header">
                <div class="nav-logo">
                    <picture>
                        <img src="@/assets/logo/a.png" alt="a-logo" class="logo" @click="toggleNavbar"/>
                    </picture>
                </div>
                <div class="header-divider"><hr/></div>

                <div class="nav-title">
                    <h1 class="headline-small-2 line-height-low">DEV</h1>
                    <h1 class="headline-xsmall-2 line-height-low">INTERN</h1>
                </div>
            </div>
  
            <div class="nav-list-items">
                <router-link to="/" class="nav-item" @click="hideNavbarOnSmallScreens">HOME</router-link>
                <router-link to="/about" class="nav-item" @click="hideNavbarOnSmallScreens" >ABOUT</router-link>
                <router-link to="/skills" class="nav-item" @click="hideNavbarOnSmallScreens">SKILLS</router-link>
                <router-link to="/projects" class="nav-item" @click="hideNavbarOnSmallScreens">PROJECTS</router-link>
            </div>


            <!-- <router-view v-slot="{ Component }">
                <transition name="slide" mode="out-in">
                    <Component :is="Component" />
                </transition>
            </router-view> -->

  
            <div class="fidget-container"></div>
        </nav>
    </div>
</template>
  
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'NavBar',
  computed: {
    ...mapState(['isNavbarVisible']),

    isNavbarVisible() {
      return this.$store.state.isNavbarVisible;
    },
    showLoadingPage() {
      return this.$store.state.showLoading;
    },

  },
  methods: {
    ...mapMutations(['toggleNavbar']),
    hideNavbarOnSmallScreens() {
      if (window.innerWidth <= 900 && this.isNavbarVisible) {
        this.toggleNavbar();
      }
    },
    toggleNavbar() {
      this.$store.commit('toggleNavbar');
    },
  },

  mounted() {
    this.hideNavbarOnSmallScreens();
    window.addEventListener('resize', this.hideNavbarOnSmallScreens);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.hideNavbarOnSmallScreens);
  },
};
</script>

<style scoped>

    /* .slide-enter-from,
    .slide-leave-to {
        opacity: 0;
    }
    .slide-enter-active,
    .slide-leave-active {
        transition: slide 0.3s ease-out;
    } */


    .logo-container {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 1;
    }
    /* hide navbar when logo is clicked */
    .hidden {
        transform: translateX(-110%);
        transition: all 1s;
    }
    .navbar-vertical-fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
    }
    .header-divider {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
    }
    .nav-header {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.8rem;
    }
    #navbar {
        z-index: 1;
        background-color: #111111;
        padding: 1rem;
        height: 100svh;
        width: 6.5rem;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: inset 0 8px 60px rgba(0,0,0,0.1),
                    inset 0 8px 8px rgba(0,0,0,0.1),
                    inset 0 -4px 4px rgba(0,0,0,0.1);
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    }
    .nav-list-items {
        position: relative;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        transition: 0.2s;
    }
    .nav-item:hover {
        color: #0084ff;
    }
    .nav-item::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 0;
        left: 0;
        border-radius: 10px;
        margin-top: 20px;
        background-color: #0084ff;
        transition: all 0.2s ease;
    }
    .nav-item:hover::after {
        width: 75%;
        color: #0084ff;
    }
    .logo {
        width: 4.2rem;
        filter: invert(40%) sepia(130%) saturate(1000%) hue-rotate(200deg);
    }
    .logo:hover {
        color: #0084ff;
    }
    .nav-title {
        text-align: left;
        padding: 0.5rem;
    }
    hr {
        width: 3rem;
    }
    .fidget-container {
        height: 3rem;
    }
    @media only screen and (max-height: 500px) {
        .logo {
            width: 3.5rem;
        }
    }
    @media only screen and (max-width: 611px) {
        #navbar {
            width: 6rem;
        }
        .nav-header {
            justify-content: flex-start;
            align-items: flex-start;
        }
        .nav-item:hover::after {
            width: 0;
            color: #0084ff;
        }
        .logo {
            width: 3.5rem;
        }
        .nav-item{
            font-size: 0.7rem;

        }
    }

    /* filter: brightness(2) invert(1); */
    /* transition: 0.2s;}

    .navbar ul li a:hover {
        color: rgb(255, 146, 106);
    }
    .navbar ul li a::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 0;
        bottom: 0;
        left: 0;
        background-color: rgb(255, 146, 106);
        transition: all 0.2s ease;}

    .navbar ul li a:hover::after {
        width: 100%;
        color: rgb(255, 146, 106);} */
</style>

