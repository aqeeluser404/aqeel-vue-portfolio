<template>
    <div class="main-container">
        <h2 class="headline-small-blue weight-bold"><b>Thank you!</b></h2>
        <br>
        <div class="headline-small-black">We'll be in touch soon.</div>
        <br>
        <br>
        <button class="button-2" @click="GoToHome">Go Back</button>
    </div>
</template>

<script>
    export default {
        name: 'ThankCard',
        methods: {
            GoToHome() {
                this.$router.push('/')
            }
        }
    }
</script>