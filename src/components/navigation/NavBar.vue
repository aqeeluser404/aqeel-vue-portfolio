<template>
    <div class="navbar-vertical-fixed">
        <nav id="navbar">
            <div class="nav-header">
                <div class="nav-logo"></div>
                <div class="nav-title"></div>
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

</style>