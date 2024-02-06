<template>
    <!-- logo nav button to appear when nav container is hidden -->
    <picture v-if="!isNavbarVisible">
      <img src="@/assets/logo/a.png" alt="a-logo" class="logo logo-container" @click="toggleNavbar">
    </picture>

    <!-- container to make navbar visible/not visible -->
    <div class="navbar-vertical-fixed" :class="{ 'hidden': !isNavbarVisible }">
        <!-- navbar -->
        <nav id="navbar">
            <div class="nav-header">
                <div class="nav-logo">
                    <picture>
                        <img src="@/assets/logo/a.png" alt="a-logo" class="logo" @click="toggleNavbar">
                    </picture>
                </div>
                <hr>
                <div class="nav-title">
                    <h1 class="font-m color-white family-koulen line-height-low">DEV</h1>
                    <h1 class="font-xxs color-blue family-koulen line-height-low">INTERN</h1>
                </div>
            </div>

            <div class="nav-list-items">
                <router-link to="/" class="nav-item">Home</router-link>
                <router-link to="/about" class="nav-item">About</router-link>
                <router-link to="/skills" class="nav-item">Skills</router-link>
                <router-link to="/projects" class="nav-item">Projects</router-link>
            </div>

            <div class="empty-container"></div>
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
        position: absolute;
        top: 1rem;
        left: 1rem;
        z-index: 1001;
    }
    /* make nav bar responsive and hidden when button pressed */
    .hidden {
        transform: translateX(-100%);
    }
    .navbar-vertical-fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
    }
    .nav-header {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }
    #navbar {
        background-color: #111111;
        padding: 1rem;
        height: 100vh;
        width: 6vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .nav-list-items {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    .logo {
        width: 4.2rem;
        filter: brightness(2) invert(1);
    }
    .nav-title {
        text-align: left;
        padding: 0.5rem;
    }
    hr {
        width: 2rem;
    }
    .nav-item {
        color: white;
        text-decoration: none;

        font-size: 1.2rem;
        font-family: 'Inter', sans-serif;
    }
    .nav-item:hover {
        color: rgb(206, 206, 206);
    }
</style>