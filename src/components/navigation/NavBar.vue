<template>
    <div class="navbar-vertical-fixed">
        <nav id="navbar">
            <div class="nav-header">
                <div class="nav-logo">
                    <picture>
                        <router-link to="/">
                            <img src="@/assets/logo/a.png" alt="a-logo" class="logo">
                        </router-link>
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
                <router-link to="/about-card" class="nav-item">About</router-link>
                <router-link to="/skills-card" class="nav-item">Skills</router-link>
                <router-link to="/projects-card" class="nav-item">Projects</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name : 'NavBar'
}
</script>

<style scoped>
    .nav-header {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }
    .logo {
        width: 5rem;
        filter: brightness(2) invert(1);

    }
    .nav-title {
        text-align: left;
        padding: 0.5rem;
    }
    .navbar-vertical-fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
    }
    #navbar {
        background-color: #0E0E0E;
        padding: 2%;
        height: 100vh;
        width: 8vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10rem;
    }
    .nav-list-items {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
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