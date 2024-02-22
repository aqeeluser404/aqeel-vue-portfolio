<template>
    <!-- main container -->
    <div class="main-container">

        <h1 class="headline-small-blue weight-bold">
            <b>Thank you!</b>
        </h1><br>
        
        <div class="font-inter-medium-black">We'll be in touch soon.</div>
        
        <br><br>
        
        <!-- button to go home -->
        <button class="button-hover-white" @click="GoToHome">Go Back</button>
    </div>
</template>

<script>
import store from '../store';

    export default {
        name: 'ThankCard',
        methods: {
            GoToHome() {
                this.$router.push('/')
            },
        },
        mounted() {
            setTimeout(() => {
                store.commit('toggleNavbar');
            }, 1) 
            
        },
        beforeUnmount() {
            store.commit('toggleNavbar');
        },
    }
</script>