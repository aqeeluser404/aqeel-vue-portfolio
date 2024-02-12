<template>
    <!-- logo nav button to appear when nav container is hidden -->
    <picture v-if="!isNavbarVisible">
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
  
            <div class="fidget-container"></div>
        </nav>
    </div>
</template>
  
<script>
    export default {
        name: 'NavBar',
        data() {
            return {
                isNavbarVisible: true,
            };
        },
        methods: {
            toggleNavbar() {
                this.isNavbarVisible = !this.isNavbarVisible;
            },
            hideNavbarOnSmallScreens() {
                if (window.innerWidth <= 900) {
                    this.isNavbarVisible = false;
                }
            },
        },
        mounted() {
            this.hideNavbarOnSmallScreens();
            window.addEventListener('resize', this.hideNavbarOnSmallScreens);
        },
        beforeUnmount() {
            // Removes the event listener when the component is destroyed
            window.removeEventListener('resize', this.hideNavbarOnSmallScreens);
        },
    };
</script>

<style scoped>
    .logo-container {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 1;
    }
    /* make nav bar responsive and hidden when button pressed */
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
        background-color: #111111;
        padding: 1rem;
        height: 100vh;
        width: 6.5rem;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .nav-list-items {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }
    .logo {
        width: 4.2rem;
        filter: invert(40%) sepia(130%) saturate(1000%) hue-rotate(200deg);

        /* filter: brightness(2) invert(1); */
    }
    .logo:hover {
        color: #0084ff;
    }
    .nav-title {
        text-align: left;
        padding: 0.5rem;
    }
    hr {
        width: 4rem;
    }
    .nav-item:hover {
        color: rgb(206, 206, 206);
    }
    .fidget-container {
        height: 3rem;
    }
    @media only screen and (max-width: 611px) {
        #navbar {
            width: 100vw;
        }
        .nav-header {
            justify-content: flex-start;
            align-items: flex-start;
        }
    }
</style>