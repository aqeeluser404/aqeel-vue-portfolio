<template>
    <!-- <div class="wrapper-container"> -->
        <div class="main-container">
            <div class="text-container">
                <h1 class="font-xs color-blue family-lekton line-height-low">Hi there,</h1>
                <h1 class="font-l color-white family-koulen line-height-low">I'm Aqeel Hanslo</h1>
                <h1 class="font-m color-blue family-lekton line-height-low">  &lt;Software Developer/&gt; </h1>
                <p class="font-s color-white family-plus-code">
                    <span class="opacity-full"><br> The design of an application or website usually </span>
                    <span class="opacity-half"><br> mirrors the thought process of the creator. Tell me </span>  
                    <span class="opacity-quarter"><br> what to do and I'll try to visualize your ideas</span>
                </p>
            </div>
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
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/logo/instagram.svg" alt="github-logo" class="social-icon">
                    </a>
                    <a href="https://www.linkedin.com/in/aqeel-hanslo-234961210" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/logo/linkedin.svg" alt="linkedin-logo" class="social-icon unique">
                    </a>
                </div>
            </div>
            <div class="page-number">
                <h1 class="font-xs color-blue family-lekton">01</h1>
            </div>
            <video autoplay muted loop id="video-background">
                <source src="@/assets/wallpaper/video-wallpaper.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    <!-- </div> -->

</template>

<script>
export default {
    name: 'HomeCard',
    methods: {
        GotoContact() {
            console.log('GotoContact method called');
            this.$router.push('/contact');
        }
    },
};
</script>

<style scoped>
    /* .wrapper-container {
        background-color: rgba(0, 0, 0, 0);
    } */
    .main-container {
        align-items: flex-end;
        justify-content: center;
        padding-top: 8%;
        padding-right: 8%;
        position: relative;
    }
    #video-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }
    .text-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: right;
    }

    /* links container============================================================================== */
    .links-container {
        width: 50vw;
        display: flex;
        justify-content: flex-end;
        gap: 9rem;
    }
    .social-links {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 9rem;
        
    }
    .social-icon {
        width: 2.2rem;
        text-decoration: none;
        filter: invert(30%) sepia(130%) saturate(1000%) hue-rotate(200deg);
    }
    .unique {
        width: 2.7rem;
    }
    @media only screen and (max-width: 1441px) and (max-width: 1500px) {
        .links-container {
            /* width: 25vw; */
            gap: 5rem;
        }
        .social-links {
            gap: 5rem;
        }
    }
    @media only screen and (max-width: 611px) {
        .main-container {
            padding: 9rem 3rem;
            align-items: center;
            justify-content: flex-start;
            gap: 4rem;
            height: 100%;
        }
        .text-container {
            width: 100%;
            line-height: 1.4;
        }
        .links-container {
            flex-direction: column-reverse;
            gap: 1rem;
            width: 100%;
        }
        .social-links {
            justify-content: center;
            gap: 2rem;
        }
        /* .wrapper-container {
            justify-content: center;
            align-items: center;
            height: 100vh;
        } */
        .styled-button {
            justify-content: center;
        }
    }
</style>