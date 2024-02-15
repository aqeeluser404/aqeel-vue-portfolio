<template>
    <!-- main container -->
    <div class="main-container" :style="getAdjustedWidth">
        
        <!-- row 1============================================================================== -->
        <div class="text-container">
            <h1 class="headline-large">Projects</h1>
            <br>
            <p class="alt-font-2"> 
                    <span class="opacity-full"><br> I've always been the type of person who can spend hours designing stuff. </span>
                    <span class="opacity-half"><br> I simply enjoy being able to illustrate my thoughts into something visually appealing. </span>  
                    <span class="opacity-quarter"><br> That being said, I am knowledgeable in most languages, including some backend code.</span>
                </p>

        </div>

        <!-- row 2============================================================================== -->
        <div class="card-row">
            <div class="card">
                <img src="../assets/projects/first-portfolio.png" class="card-img" alt="#">
                <div class="card-body">
                    <h1 class="card-title headline-small-blue">First Portfolio</h1>
                    <p class="card-sub-title alt-font-medium">Static - HTML - CSS - JS <br> <b>(No Framework)</b></p>
                    <p class="card-info alt-font-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p>
                    <button class="button">Source Code</button>
                </div>
            </div>
            <div class="card">
                <img src="../assets/projects/animeapp.png" class="card-img" alt="#">
                <div class="card-body">
                    <h1 class="card-title headline-small-blue">Anime Web App</h1>
                    <p class="card-sub-title alt-font-medium">Java - Springboot - Workbench <br> <b>(Vue Framework)</b> </p>
                    <p class="card-info alt-font-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p>
                    <button class="button">Source Code</button>
                </div>
            </div>
            <div class="card">
                <img src="../assets/projects/bankapp2.png" class="card-img" alt="#">
                <div class="card-body">
                    <h1 class="card-title headline-small-blue">Python Bank App</h1>
                    <p class="card-sub-title alt-font-medium">Python - Custom Tkinter - Gui <br> <b>(CapaCiTi Project)</b></p>
                    <p class="card-info alt-font-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p>
                    <button class="button">Source Code</button>
                </div>
            </div>
        </div>

        <button class="button">View GitHub</button>

        <!-- components -->
        <!-- number -->
        <div class="page-number">
            <h1 class="headline-xsmall">04</h1>
        </div>

        <!-- video wallpaper -->
        <video autoplay muted loop id="video-background">
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

    /* components================================================================================ */

    /* #video-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    } */

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

    /* containers================================================================================ */

    .main-container {
        padding: 9rem 3rem;
        padding-top: 25vh;
        align-items: center;
        justify-content: center;
        position: relative;
        /* scrolling */
        height: 100%;
        width: 100%;
        gap: 5rem;
        /* padding-top: 25vh; */

    }
    .text-container {
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    .card-row {
        display: flex;
        gap: 1rem;
    }

    /* content=================================================================================== */

    /* text animation styling */
    span.typed-text {
        color: #0084ff;
    }
    span.cursor {
        display: inline-block;
        margin-left: 3px;
        width: 4px;
        background-color: #0084ff;
        animation: cursorBlink 1s infinite;
    }
    span.cursor.typing {
        animation: none;
    }
    .card {
        width: 320px;
        border-radius: 2rem;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
        height: 400px;
        overflow: hidden;
        /* border: 4px solid #ffffff2d; */
        position: relative;
    }
    .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
    }
    .card-body {
        /* font-family: 'Koulen', sans-serif; */
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
    .card:hover .card-body{
        transform: scale(1);
        opacity: 100%;
        /* right: 0; */
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
    .card-btn {
        color: #5E9FFF;
        background: none;
        padding: 10px 20px;
        width: 120px;
        text-transform: capitalize;
        border: 1px solid #5E9FFF;
        outline: none;
        font-weight: 500;
        cursor: pointer;
    }

    /* media queries============================================================================= */

    @media only screen and (max-width: 984px) {
        .main-container {
            padding: 9rem 3rem;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            gap: 2rem;
            height: 100%;
        }
        .text-container {
            text-align: center;
            width: 70vw;
            padding-top: 100px;
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