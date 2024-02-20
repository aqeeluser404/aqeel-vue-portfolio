<template>
    <!-- main container -->
    <div class="main-container" :style="getAdjustedWidth">
        
        <!-- text container -->
        <div class="text-container">
            <h1 class="headline-large">Projects</h1>
            <p class="font-inter-medium-white"> 
                <span class="opacity-full"><br> I've always been the type of person who can spend hours</span>
                <span class="opacity-half"><br> designing stuff.   </span>  
                <!-- <span class="opacity-quarter"><br> Trying to solve a problem is the real objective</span> -->
            </p>
        </div>

        <div class="icon-container">
            <div class="icon-circle">
                <i class="devicon-spring-original icon"></i>
            </div>
            <div class="icon-circle">
                <i class="devicon-vuejs-plain icon"></i>
            </div>
            <div class="icon-circle">
                <i class="devicon-githubactions-plain icon"></i>
            </div>
            <div class="icon-circle">
                <i class="devicon-mysql-original icon"></i>
            </div>
            <div class="icon-circle">
                <i class="devicon-aftereffects-plain icon"></i>
            </div>
            <div class="icon-circle">
                <i class="devicon-npm-original-wordmark icon"></i>
            </div>
        </div>

        <!-- projects container -->
        <div class="card-row">
            <div class="card">
                <img src="../assets/projects/first-portfolio.png" class="card-img" alt="#">
                <div class="card-body">
                    <h1 class="card-title headline-small-blue">First Portfolio</h1>
                    <p class="card-sub-title font-inter-medium">Static - HTML - CSS - JS <br> <b>(No Framework)</b></p>
                    <p class="card-info font-inter-medium-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p>
                    <button class="button">Source Code</button>
                </div>
            </div>
            <div class="card">
                <img src="../assets/projects/animeapp.png" class="card-img" alt="#">
                <div class="card-body">
                    <h1 class="card-title headline-small-blue">Anime Web App</h1>
                    <p class="card-sub-title font-inter-medium">Java - Springboot - Workbench <br> <b>(Vue Framework)</b> </p>
                    <p class="card-info font-inter-medium-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p>
                    <button class="button">Source Code</button>
                </div>
            </div>
            <div class="card">
                <img src="../assets/projects/bankapp2.png" class="card-img" alt="#">
                <div class="card-body">
                    <h1 class="card-title headline-small-blue">Python Bank App</h1>
                    <p class="card-sub-title font-inter-medium">Python - Custom Tkinter - Gui <br> <b>(CapaCiTi Project)</b></p>
                    <p class="card-info font-inter-medium-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p>
                    <button class="button">Source Code</button>
                </div>
            </div>
        </div>

        <!-- view all projects -->
        <button class="button">View GitHub</button>

        <!-- components -->
        <!-- number -->
        <div class="page-number">
            <h1 class="headline-xsmall">04</h1>
        </div>

        <!-- video wallpaper -->
        <video autoplay muted loop id="video-background" style="width: 100%; height: 100vh;">
            <source src="@/assets/wallpaper/video-wallpaper.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        name : 'ProjectsCard',
        computed: {
            ...mapState(['isNavbarVisible']),
            getAdjustedWidth() {
                return {
                    width: this.isNavbarVisible ? 'calc(100% - 6.5rem)' : '100%',
                    position: 'relative',
                    left: this.isNavbarVisible ? '6.5rem' : '0'
                };
            },
        },
        data: () => {
            return {
                typeValue: '',
                typeStatus: false,
                typeArray: ['Willing to implement new ideas.', 'Learning new things.'],
                typingSpeed: 200,
                erasingSpeed: 100,
                newTextDelay: 500,
                typeArrayIndex: 0,
                charIndex: 0
            }
        },
        methods: {
            typeText() {
                if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                    if(!this.typeStatus)
                        this.typeStatus = true;

                    this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                    this.charIndex += 1;
                    setTimeout(this.typeText, this.typingSpeed);
                }
                else {
                    this.typeStatus = false;
                    setTimeout(this.eraseText, this.newTextDelay);
                }
            },
            eraseText() {
                if (this.charIndex > 0) {
                    if (!this.typeStatus)
                        this.typeStatus = true;
                    this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                    this.charIndex -= 1;
                    setTimeout(this.eraseText, this.erasingSpeed);
                }
                else {
                    this.typeStatus = false;
                    this.typeArrayIndex += 1;
                    if (this.typeArrayIndex >= this.typeArray.length)
                        this.typeArrayIndex = 0;
                    setTimeout(this.typeText, this.typingSpeed + 1000);
                }
            }
        },
        created() {
            setTimeout(this.typeText, this.newTextDelay + 200);
        }
    }
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
        padding: 9rem 3rem;
        padding-top: 25vh;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 100%;
        width: 100%;
        gap: 5rem;
    }
    .text-container {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .icon-container {
    display: flex;
    width: 100%;
    max-width: 40vw;
    overflow: hidden; /* Hide the icons overflowing from the container */
    }

    .icon-circle {
    padding: 1rem;
    width: 100%; /* Occupy the full width of the container */
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box; /* Include padding and border in the width */
    animation: moveIcons 20s linear infinite;
    }

    .icon {
    font-size: 3rem;
    opacity: 75%;
    }

    @keyframes moveIcons {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
    }

    /* project cards */

    .card-row { 
        display: flex;
        gap: 1rem; 
    }
    .card {
        width: 320px;
        border-radius: 2rem;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
        height: 400px;
        overflow: hidden;
        position: relative;
    }
    .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
    }

    /* card text body */
    
    .card-body {
        border-radius: 2rem;
        width: 100%;
        height: 100%;
        bottom: 0;
        right: 0;
        transform: scale(50%);
        opacity: 0;
        position: absolute;
        background: #000000b9;
        backdrop-filter: blur(5px);
        color: #fff;
        padding: 30px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        transition: ease-in-out 0.5s;
    }
    .card-title {
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 500;
    }
    .card-sub-title {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 300;
    }
    .card-info {
        font-family: 'M PLUS 1 Code', monospace;
        font-size: 16px;
        line-height: 25px;
        margin: 40px 0;
        font-weight: 400;
    }

    /* card animation */

    .card:hover .card-body {
        transform: scale(1);
        opacity: 100%;
    }

    /* media queries============================================================================= */

    @media only screen and (max-width: 736px) {
        .text-container {
            padding-top: 100px;
        }
    }
    
    @media only screen and (max-width: 984px) {
        .main-container {
            padding: 9rem 3rem;
            padding-bottom: 300px;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            gap: 2rem;
            height: 100%;
        }
        .text-container {
            text-align: left;
            gap: 2rem;
            width: 70vw;
            height: 100%;
        }
        .card-row {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 70vw;
            padding-top: 75px;
            height: 100%;
        }
    }
</style>