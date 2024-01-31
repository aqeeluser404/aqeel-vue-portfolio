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
        gap: 1rem;
    }
    .logo {
        width: 5rem;
        filter: hue-rotate(90deg);
    }
    .nav-title {
        text-align: left;
        padding: 0.5rem;
    }
</style>