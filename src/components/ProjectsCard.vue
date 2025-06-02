<template>
    <!-- main container -->
    <div class="main-container" :style="getAdjustedWidth">
        
        <!-- text container -->
        <div class="text-container">
            <h1 class="headline-large">Projects</h1>
            <p class="font-inter-medium-white"> 
                <!-- <span class="opacity-full"><br> I've always been the kind of person who can spend hours designing stuff. </span>
                <span class="opacity-half "><br> Solving the problem is the journey </span>   -->
                <span class="opacity-full"><br>Development and design are interdependent. Here are some of my projects</span>
                <!-- <span class="opacity-half "><br>Solving the problem is the journey. Here are some of my projects </span>   -->
                <span class="opacity-half "><br>Render projects have a startup time of approximately 1 minute.</span>  
            </p>
        </div>

        <!-- icon scroller -->
        <div class="scroller">
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
                <!-- <div class="icon-circle">
                    <i class="devicon-npm-original-wordmark icon"></i>
                </div> -->
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
                <!-- <div class="icon-circle">
                    <i class="devicon-npm-original-wordmark icon"></i>
                </div> -->
            </div>
        </div>

        <!-- projects container -->
        <div class="card-row">
            <div class="card">
                <img src="../assets/projects/shaded-eyewear-2.png" class="card-img" alt="#">
                <div class="card-body">
                    <h1 class="card-title headline-small-2 ">Shaded Eyewear</h1>
                    <p class="card-sub-title headline-xsmall-2">Quasar • Express • MongoDB • Node</p>
                    <p class="card-info font-inter-medium-white">Web application for purchasing sunglasses, integrated with the YOCO API, featuring admin management and secure cookie JWT authentication. Use <span style="text-decoration: underline;">TestAdmin1</span> and <span style="text-decoration: underline;">TestPass1</span> for testing.</p>
                    <div style="display: flex; justify-content: space-between;">
                        <button class="button" @click="viewDemo1">View Demo</button>
                        <button class="button" @click="viewCode1">View Code</button>
                    </div>
                </div>
            </div>
            <div class="card">
                <img src="../assets/projects/theweb.png" class="card-img" alt="#">
                <div class="card-body">
                    <h1 class="card-title headline-small-2 ">The Web</h1>
                    <p class="card-sub-title headline-xsmall-2">Quasar • Express • MongoDB • Node</p>
                    <p class="card-info font-inter-medium-white">
                        A secure student flat rental platform featuring payer scoring, admin management, and JWT-based authentication for enhanced privacy and control. Use <span style="text-decoration: underline;">aqeeladmin</span> and <span style="text-decoration: underline;">TestPass2</span> for testing.</p>
                    <div style="display: flex; justify-content: space-between;">
                        <button class="button" @click="viewDemoTheWeb">View Demo</button>
                        <button class="button" @click="viewCodeTheWeb">View Code</button>
                    </div>
                </div>
            </div>
            <div class="card">
                <img src="../assets/projects/jwt-login.png" class="card-img" alt="#">
                <div class="card-body">
                    <h1 class="card-title headline-small-2 ">JWT Login System</h1>
                    <p class="card-sub-title headline-xsmall-2">Quasar • Express • MongoDB • Node</p>
                    <p class="card-info font-inter-medium-white">Json web token login system for standard and admin users, storing tokens in local storage. Currently Hosted on render's free tier. Use <span style="text-decoration: underline;">AdminUser1</span> and <span style="text-decoration: underline;">Adminpass1</span> for testing.</p>
                    <!-- <button class="button" @click="viewDemo2">View Demo</button> -->
                    <div style="display: flex; justify-content: space-between;">
                        <button class="button" @click="viewDemo2">View Demo</button>
                        <button class="button" @click="viewCode2">View Code</button>
                    </div>
                </div>
            </div>
            <div class="card">
                <img src="../assets/projects/animeapp.png" class="card-img" alt="#">
                <div class="card-body">
                    <h1 class="card-title headline-small-2 ">Anime Web App</h1>
                    <p class="card-sub-title headline-xsmall-2">Java • VueJS • Springboot • MySQL</p>
                    <p class="card-info font-inter-medium-white">I developed a small full-stack application implementing CRUD operations to store, retrieve, update and delete entries from the database.</p>
                    <button class="button" @click="viewCode4">View Code</button>
                </div>
            </div>
            <div class="card">
                <img src="../assets/projects/otg.png" class="card-img" alt="#">
                <div class="card-body">
                    <h1 class="card-title headline-small-2 ">On The Go Rentals</h1>
                    <p class="card-sub-title headline-xsmall-2">Java • VueJS • Springboot • MySQL</p>
                    <p class="card-info font-inter-medium-white">Created a full-stack car rental application for a CPUT capstone group project using Spring Boot API, Java, Vue.js, and MySQL. Use email <span style="text-decoration: underline;">aqeel@gmail.com</span> and password <span style="text-decoration: underline;">aqeel</span> for testing.</p>
                    <!-- <button class="button" @click="viewDemo2">View Demo</button> -->
                    <div style="display: flex; justify-content: space-between;">
                        <button class="button" @click="viewDemo4">View Demo</button>
                        <button class="button" @click="viewCode6">View Code</button>
                    </div>
                </div>
            </div>
            <div class="card">
                <img src="../assets/projects/first-portfolio.png" class="card-img" alt="#">
                <div class="card-body">
                    <h1 class="card-title headline-small-2 ">First Portfolio</h1>
                    <p class="card-sub-title headline-xsmall-2">Static • HTML • CSS • JAVASCRIPT</p>
                    <p class="card-info font-inter-medium-white">This was my first portfolio, created using the fundamentals of HTML and CSS, complemented by some JavaScript. It is a single-page portfolio featuring a fixed navigation at the top.</p>
                    <!-- <button class="button" @click="redirectToSource1">Source Code</button> -->
                    <div style="display: flex; justify-content: space-between;">
                        <button class="button" @click="viewDemo3">View Demo</button>
                        <button class="button" @click="viewCode3">View Code</button>
                    </div>
                </div>
            </div>

            <div class="card">
                <img src="../assets/projects/bankapp2.png" class="card-img" alt="#">
                <div class="card-body">
                    <h1 class="card-title headline-small-2 ">Python Bank App</h1>
                    <p class="card-sub-title headline-xsmall-2">Python • Custom Tkinter • Gui • CapaCiTi</p>
                    <p class="card-info font-inter-medium-white">A banking application that my team and I created during our learnership at CapaCiTi. We used Custom Tkinter and implemented various functions to perform banking operations.</p>
                    <button class="button" @click="viewCode5">View Code</button>
                </div>
            </div>
        </div>

        <!-- view all projects -->
        <button class="button" @click="redirectToGitHub" >View GitHub</button>

        <!-- components -->
        <!-- number -->
        <div class="page-number">
            <h1 class="headline-xsmall">04</h1>
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
            },
            viewDemo1() { window.open("https://shaded-eyewear-frontend.onrender.com", "_blank") },
            viewCode1() { window.open("https://github.com/aqeeluser404/shaded-eyewear-backend", "_blank") },

            viewDemoTheWeb() { window.open("https://the-web-mobile-app.onrender.com", "_blank") },
            viewCodeTheWeb() { window.open("https://github.com/aqeeluser404/the-web-express", "_blank") },

            viewDemo2() { window.open("https://jwt-login-frontend.onrender.com", "_blank"); },
            viewCode2() { window.open("https://github.com/aqeeluser404/jwt-login-backend", "_blank"); },

            viewDemo3() { window.open("https://aqeel-hanslo-portfolio.netlify.app", "_blank"); },
            viewCode3() { window.open("https://github.com/aqeeluser404/aqeel-portfolio", "_blank"); },

            viewCode4() {
                window.open("https://github.com/aqeeluser404/animeapp-backend", "_blank");
            },

            viewCode5() {
                window.open("https://github.com/aqeeluser404/CodeX-Bank-GUI", "_blank");
            },

            viewDemo4() { window.open("https://otg.nemesisnet.co.za", "_blank") },
            viewCode6() { window.open("https://github.com/aqeeluser404/OnTheGoRentalsFrontend", "_blank") },

            redirectToGitHub() {
                window.open("https://github.com/aqeeluser404", "_blank");
            },



        },
        mounted() {
            const scrollers = document.querySelectorAll(".scroller");
            if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                addAnimation();
            }
            function addAnimation() {
                scrollers.forEach(scroller => {
                    scroller.setAttribute("data-animated", true)
                });
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
        gap: 3rem;
    }
    .text-container {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .scroller {
        max-width: 400px;
    }
    .icon-container {
        display: flex;
        gap: 1rem;
        padding-block: 1rem;
    }
    .icon-circle {
        padding: 1rem;
        /* width: 100%; */
        background-color: #242424;
        border-radius: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        animation: moveIcons 20s linear infinite;
    }
    .icon {
        font-size: 2rem;
        opacity: 75%;
        transition: 0.5s all;
        scale: 1;
    }
    .icon:hover {
        color: #0084ff;
        scale: .95;
    }
    .scroller[data-animated="true"] {
        border: 1px solid #242424;
        overflow: hidden;
        -webkit-mask: linear-gradient(
            90deg, 
            transparent, 
            white 20%, 
            white 80%, 
            transparent
        );
        mask: linear-gradient(
            90deg, 
            transparent, 
            white 20%, 
            white 80%, 
            transparent
        );
    }
    .scroller[data-animated="true"] .icon-container {
        width: max-content;
        flex-wrap: nowrap;
        animation: scroll 20s linear infinite;
    }
    @keyframes scroll {
        to {
            transform: translate(calc(-50% - .5rem));
        }
    }



    

    .card-row { 
        display: flex;
        justify-content: center;
        gap: 1rem; 
        flex-wrap: wrap;
    }
    .card {
        width: 320px; /* 640px */
        border-radius: 1%;
        border: #242424 2px solid;
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
        width: 100%;
        height: 100%;
        bottom: 0;
        right: 0;
        transform: scale(50%);
        opacity: 0;
        position: absolute;
        background: #000000b9;
        backdrop-filter: blur(15px);
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
        text-align: center;
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 500;
    }
    .card-sub-title {
        text-transform: uppercase;
        text-align: center;
        font-size: 16px;
        font-weight: 300;
    }
    .card-info {
        font-family: 'M PLUS 1 Code', monospace;
        text-align: center;
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
            width: 100%;
            padding-top: 75px;
            height: 100%;
        }
    }
</style>