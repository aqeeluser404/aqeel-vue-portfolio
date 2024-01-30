<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about-card">About</router-link>
        <router-link to="/skills-card">Skills</router-link>
        <router-link to="/projects-card">Projects</router-link>
    </nav>
</template>

<script>
export default {
    name : 'NavBar'
}
</script>

<style scoped>
    nav {
        background-color: #333;
        padding: 10px;
        display: flex;
        justify-content: space-around;
    }

    router-link {
        color: white;
        text-decoration: none;
    }
</style>