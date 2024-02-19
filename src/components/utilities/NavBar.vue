<template>
    <!-- logo below navbar -->
    <picture v-if="!showLoadingPage && !isNavbarVisible">
        <img src="@/assets/logo/a.png" alt="a-logo" class="logo logo-container" @click="toggleNavbar"/>
    </picture>
  
    <!-- navbar visible/not visible -->
    <div class="navbar-vertical-fixed" :class="{ 'hidden': !isNavbarVisible }">

        <!-- navbar -->
        <nav id="navbar">

            <!-- nav header -->
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
  
            <!-- nav items -->
            <div class="nav-list-items">
                <router-link to="/" class="nav-item" @click="hideNavbarOnSmallScreens">HOME</router-link>
                <router-link to="/about" class="nav-item" @click="hideNavbarOnSmallScreens" >ABOUT</router-link>
                <router-link to="/skills" class="nav-item" @click="hideNavbarOnSmallScreens">SKILLS</router-link>
                <router-link to="/projects" class="nav-item" @click="hideNavbarOnSmallScreens">PROJECTS</router-link>
            </div>
            <div class="filler-container"></div>
        </nav>
    </div>

    <!-- router animation -->
    <router-view v-slot="{ Component, route }">
        
        <!-- slide transition -->
        <transition name="slide" mode="out-in">
            <div :key="route.name">
                <component :is="Component"></component>
            </div>
        </transition>
    </router-view>
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

            // close navbar once screen reaches 900px
            ...mapMutations(['toggleNavbar']),
            hideNavbarOnSmallScreens() {
                if (window.innerWidth <= 900 && this.isNavbarVisible) {
                    this.toggleNavbar();
                }
            },

            // committing a mutation toggleNavbar to the Vuex store. 
            toggleNavbar() {
                this.$store.commit('toggleNavbar');
            },
        },
        // inserting an addEventListener into the DOM
        mounted() {
            this.hideNavbarOnSmallScreens();
            window.addEventListener('resize', this.hideNavbarOnSmallScreens);
        },
        // removing
        beforeUnmount() {
            window.removeEventListener('resize', this.hideNavbarOnSmallScreens);
        },
    };
</script>

<style>

    /* router animation style */

    .slide-enter-active,
    .slide-leave-active {
        transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    }
    .slide-enter-from,
    .slide-leave-to {
        opacity: 0;
        transform: translateX(10vw);
    }
    .slide-enter-to,
    .slide-leave-from {
        opacity: 1;
        transform: translateX(0);
    }

    /* navbar */

    .navbar-vertical-fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
    }
    #navbar {
        background-color: #111111;
        padding: 1rem;
        height: 100svh;
        width: 6.5rem;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    }

    /* logo */

    .logo-container {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 1;
    }
    .logo {
        width: 4.2rem;
        filter: invert(40%) sepia(130%) saturate(1000%) hue-rotate(200deg);
    }

    /* nav header */

    .nav-header {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.8rem;
    }
    .header-divider {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
    }
    hr {
        width: 3rem;
    }
    .nav-title {
        text-align: left;
        padding: 0.5rem;
    }

    /* nav item list */

    .nav-list-items {
        position: relative;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        transition: 0.2s;
    }
    .nav-item.router-link-exact-active {
        color: #5E9FFF;
    }

    /* container to center the nav list */

    .filler-container {
        height: 3rem;
    }

    /* hide navbar when logo is clicked */

    .hidden {
        transform: translateX(-110%);
        transition: all 1s;
    }

    /* ============================================================================  */
    
    /* media queries */

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
        .logo {
            width: 3.5rem;
        }
    }
</style>

