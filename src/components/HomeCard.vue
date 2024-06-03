<template>
    <!-- main container -->
    <div class="main-container" :style="getAdjustedWidth">

        <!-- text container -->
            <div class="text-container">
                <h1 class="headline-xsmall">Hi there,</h1>
                <h1 class="headline-large">I'm Aqeel Hanslo</h1>
                <h1 class="headline-medium">  &lt;Software Developer/&gt; </h1>
                <p class="font-inter-medium">
                    <span class="opacity-full"><br>The design of an application or website usually </span>
                    <span class="opacity-half"><br>mirrors the thought process of the creator. Tell me </span>  
                    <span class="opacity-quarter"><br> what to do and I'll try to visualize your ideas</span>
                </p>
            </div>

        <!-- links container -->
        <div class="links-container">
            
            <!-- custom button -->
            <div class="styled-button">
                <div class="left">
                    <div class="box-1"></div>
                    <div class="box-2"></div>
                    <div class="box-3"></div>
                </div>
                    <div class="middle">
                        <div class="box-4"></div>
                        <div class="box-5">
                            <button class="button" @click="GotoContact">Get In Touch</button>
                        </div>
                        <div class="box-6"></div>
                    </div>
                <div class="right">
                    <div class="box-7"></div>
                    <div class="box-8"></div>
                    <div class="box-9"></div>
                </div>
            </div>

            <!-- social links -->
            <div class="social-links">
                <a href="https://github.com/aqeeluser404" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/logo/github.svg" alt="github-logo" class="social-icon">
                </a>
                <a href="https://www.instagram.com/aqeeluser404/" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/logo/instagram.svg" alt="github-logo" class="social-icon">
                </a>
                <a href="https://www.linkedin.com/in/aqeel-hanslo-234961210" target="_blank" rel="noopener noreferrer">
                    <img src="@/assets/logo/linkedin.svg" alt="linkedin-logo" class="social-icon unique-icon">
                </a>
            </div>
        </div>

        <!-- components -->
        <!-- number -->
        <div class="page-number">
            <h1 class="headline-xsmall">01</h1>
        </div>
        
        <!-- video wallpaper -->
        <video autoplay muted loop id="video-background" style="width: 100%; height: 100vh;">
            <source src="@/assets/wallpaper/video-Wallpaper-low.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video> 
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'HomeCard',
    computed: {
        ...mapState(['isNavbarVisible']),
        getAdjustedWidth() {
            return {
                width: this.isNavbarVisible ? 'calc(100% - 6.5rem)' : '100%',
                position: 'relative',
                left: this.isNavbarVisible ? '6.5rem' : '0',   
            };
        },
    },
    methods: {
        GotoContact() {
            console.log('GotoContact method called');
            this.$router.push('/contact');
        },
    },
};
</script>

<style scoped>

    /* components */

    #video-background {
        position: fixed;
        top: -2px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        object-fit: cover;
        z-index: -1;
        transform: scale(1.02);
    }

    /* main container */

    .main-container {
        align-items: flex-end;
        justify-content: center;
        position: relative;
        min-height: 100svh;
        height: 100%;
        overflow-x: hidden;

    }

    /* text container */

    .text-container {
        display: flex;
        flex-direction: column;
        padding-top: 12%;
        padding-right: 8%;
        gap: 1rem;
        text-align: right;
        animation: slide 1s 1;
    }

    /* links container */

    .links-container {
        width: 50vw;
        display: flex;
        padding-right: 8%;
        justify-content: flex-end;
        gap: 9rem;

    }
    .social-links {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 6rem;  
        animation: slide 1s 1;
    }
    .social-icon {
        width: 2.2rem;
        text-decoration: none;
        filter: invert(30%) sepia(130%) saturate(1000%) hue-rotate(200deg);
    }
    .unique-icon {
        width: 2.7rem;
    }

    /* animations */
    @keyframes fillBars{ from{ width: 0; }to{ width: 100%; } }
    @keyframes slide{ from{ transform: translateX(100%); }to{ transform: translateX(0); } }
    @keyframes slide-bottom-up{ from{ transform: translateY(100%);}to{ transform: translateY(0);}}


    /* media queries============================================================================= */
    
    /* container fix queries */

    @media only screen and (max-width: 900px) {
        .social-links {
            gap: 3rem;
        }
        .links-container {
            gap: 4rem;
        }
    }

    /* mobile sized queries */

    @media only screen and (max-width: 736px) {

        /* fonts */

        .headline-xsmall {
            font-size: 1.5rem;
        }
        .headline-medium {
            font-size: 2rem;
        }
        .headline-large {
            font-size: 5rem;
            text-align: right;
            padding-bottom: 2rem;
        }
        .text-container p {
            text-align: right;
        }

        /* containers */

        .main-container {
            padding: 12rem 3rem;
            align-items: center;
            justify-content: space-between;
            gap: 6.5rem;
            height: 100%;
        }
        .text-container {
            width: 70vw;
            line-height: 1.4;
            gap: 1rem;
            text-align: right;
            padding-top: 0%;
            padding-right: 0%;
        }
        .links-container {
            flex-direction: column;
            justify-content: space-between;
            gap: 7rem;
            width: 100%;
            padding-right: 0;
        }

        /* icons */
        
        .social-icon {width: 2rem;} .unique-icon {width: 2.7rem;}
        .social-links {
            justify-content: center;
            gap: 3rem;
        }
        .styled-button {
            justify-content: center;
        }
    }
</style>