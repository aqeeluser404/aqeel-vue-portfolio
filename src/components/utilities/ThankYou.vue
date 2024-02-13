<template>
    <div class="main-container">
        <h2 class="headline-small-blue">Thanks you!</h2>
        <div class="headline-small-black">We'll be in touch soon.</div>
        <br>
        <button class="button" @click="GoToHome">Go Back</button>
    </div>
</template>

<script>
    export default {
        name: 'ThankYou',
        methods: {
            GoToHome() {
                this.$router.push('/')
            }
        }
    }
</script>