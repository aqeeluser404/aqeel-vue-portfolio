<template>
    <!-- main container -->
    <div class="main-container" :style="getAdjustedWidth">
        

        <div class="row-1">
            <!-- column 1============================================================================== -->
            <div class="container-one line-height-low">
                <div>
                    <!-- heading -->
                    <h1 class="headline-large-black">About Me</h1>
                    <br>
                    <!-- animation text -->
                    <h1 class="typing-text-animation headline-medium">
                        <span class="typed-text weight-bold">{{ typeValue }}</span>
                        <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                    </h1>
                </div>

                <div>
                    <!-- paragraph -->
                    <p class="alt-font-3">My name is Aqeel Hanslo , third year graduate at CPUT, I have chosen the career in Applications Development because I not only enjoy building applications but also consider it one of my strong suits. 
                    I possess the ability to think outside the box to create innovative solutions for problems.</p>
                    <br><br><br><br>
                    <!-- download cv button -->
                    <button class="button-2">Download CV</button>
                </div>

            </div>
            <!-- column 2============================================================================== -->
            <div class="container-two  line-height-low">
                <div class="image-container">
                    <img :src="gifPath" alt="#" class="image-1">
                    <img :src="gifPath" alt="#" class="image-2">  
                    <img :src="gifPath" alt="#" class="image-3">              
                </div>
            </div>

        </div>

        <div class="row-2">
            <!-- heading -->
            <h1 class="headline-large-blue">Education</h1>
            <br>
            <div class="timeline">
                <ul>
                    <li>
                        <div class="timeline-content">
                            <h3 class="date">2023 - 2024</h3>
                            <h1>CapaCiTi</h1>
                            <br>
                            <p>LEARNERSHIP IN FULLSTACK DEVELOPMENT</p>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-content">
                            <h3 class="date">2021 - 2023</h3>
                            <h1>Cape Peninsula University of Technology</h1>
                            <br>
                            <p>DIPLOMA IN ICT: APPLICATION DEVELOPMENT</p>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-content">
                            <h3 class="date">2020 - 2021</h3>
                            <h1>College of Cape Town</h1>
                            <br>
                            <p>HIGHER CERTIFICATION IN INFO & COM</p>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-content">
                            <h3 class="date">2019 - 2020</h3>
                            <h1>Gap year at Emcon Construction</h1>
                            <br>
                            <p>WORK EXPERIENCE</p>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-content">
                            <h3 class="date">2013 - 2018</h3>
                            <h1>Oracle Academy High School</h1>
                            <br>
                            <p>BACHELOR'S DEGREE CERTIFICATION</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- components -->
        <!-- number -->
        <div class="page-number">
            <h1 class="headline-xsmall">02</h1>
        </div>
        <div class="scroll-watcher"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        name : 'AboutCard',
        computed: {
            ...mapState(['isNavbarVisible']),
            getAdjustedWidth() {
                return {
                    width: this.isNavbarVisible ? 'calc(100% - 6.5rem)' : '100%',
                    position: 'relative',
                    left: this.isNavbarVisible ? '6.5rem' : '0',                
                };
            },
            // getAdjustedWidthRect() {
            //     return {
            //         width: this.isNavbarVisible ? 'calc(99% - 6.5rem)' : '99%',
            //         right: this.isNavbarVisible ? '6.5rem' : '100%',
                    
            //     }
            // }
        },
        data: () => {
            return {
                typeValue: '',
                typeStatus: false,
                typeArray: ['Creative.', 'Innovative.', 'Humble.', 'Curious.'],
                typingSpeed: 200,
                erasingSpeed: 100,
                newTextDelay: 500,
                typeArrayIndex: 0,
                charIndex: 0,
                gifPath: require('@/assets/aqeel/me.png'), 

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


    /* containers================================================================================ */

    .main-container {

        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        gap: 5%;
    }
    .row-1 {
        position: relative;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        outline: 2px solid #333; 
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        gap: 5%;
        /* padding-bottom: 15vh; */

        animation: fade-out linear;
        animation-timeline: view();
        animation-range: exit -75px;
    }
    .container-one {
        text-align: left;
        width: 30%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding-top: 25vh;
        gap: 3rem;
    }
    .container-two {
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        width: 40%;
        height: 100vh;
        padding-top: 26vh;
        gap: 2rem;
    }

    @keyframes fade-out {
        to { opacity: 0; }
    }
    @keyframes image-container-animation {
        25% { opacity: 1; }
        85%, 100% { opacity: 0; scale: 0.5;}
    }
    .row-2 {
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        align-items: center;
        justify-content: center;
        padding: 100px 3rem;
        padding-bottom: 300px;
        background-color: #111;
    }
    /* .alt-font {
        text-align: left;
    } */
    /* content=================================================================================== */

    .image-container {
        position: relative;
        width: 100%; 
        height: 100%;
        max-height: 400px;
        max-width: 400px;
        /* border: 5px #0084ff solid; */
        padding: 2rem;

        animation: image-container-animation linear;
        animation-timeline: view();
        animation-range: exit;


    }
    .image-container:hover .image-1 {
        transform: translate(-15%, -15%) scale(1.1);
    }
    .image-container:hover .image-3 {
        transform: translate(3%, 3%);
    }
    .image-container:hover .image-2 {
        transform: translate(15%, 15%);
    }
    .image-1 {
        width: 100%;
        height: 100%;
        /* border: 10px #ffffff solid; */
        /* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); */
        transition: all 0.5s;
    }
    .image-3 {
        position: absolute;
        top: 5%; 
        left: 5%; 
        border: 10px #ffffff solid;
        width: 100%;
        height: 100%;
        /* border: 2px #ffffff solid; */
        z-index: -1;
        filter: grayscale(100%);
        /* box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5); */
        transition: all 0.5s;
    }
    .image-2 {
        position: absolute;
        bottom: 5%; 
        right: 5%;
        width: 100%;
        height: 100%;
        border: 10px #ffffff solid;
        z-index: -1;
        opacity: 40%;
        filter: grayscale(100%);
        /* box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5); */
        transition: all 0.5s;
    }


    /* timeline styling */
    .timeline {
        font-family: 'Inter', sans-serif;
        width: 80%;
        height: auto;
        max-width: 800px;
        margin: 0 auto;
        position: relative;
        text-align: left;
    }

    .timeline ul {
        list-style: none;
        padding-left: 0;
        display: block;
    }

    .timeline ul li {
        padding: 20px;
        background-color: #1e1f22;
        /* background: #22222262; */
        box-shadow: inset 0 8px 60px rgba(0,0,0,0.1),
                    inset 0 8px 8px rgba(0,0,0,0.1),
                    inset 0 -4px 4px rgba(0,0,0,0.1);
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
        color: white;
        border-radius: 10px;
    }
    /* animation for timeline */
    @media (prefers-reduced-motion: no-preference) {
        .timeline ul li {
            scale: .8; opacity: 0;
            animation: fade-in linear forwards;
            animation-timeline: view();
            animation-range: 150px 400px;
        }
        @keyframes fade-in {
            from {scale: .8; opacity: 0;}
            to {scale: 1; opacity: 1;}
        }
    }



    .timeline ul li:last-child {
        margin-bottom: 0;
    }
    .timeline-content h1 {
        color: #5E9FFF;
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 30px;
        margin-bottom: 5px;
        /* text-transform: uppercase; */
    }
    .timeline-content p {
        font-size: 16px;
        line-height: 30px;
        font-weight: 300;
    }
    .timeline-content .date {
        font-size: 12px;
        font-weight: 300;
        margin-bottom: 15px;
        letter-spacing: 2px;
        line-height: 1.8;
    }

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
    @keyframes cursorBlink {
        49% { background-color: #fff; }
        50% { background-color: transparent; }
        99% { background-color: transparent; }
    }

    /* media queries============================================================================= */
/* 
    @media only screen and (max-width: 1600px) {
        .image-container {
            width: 100%;
            height: auto; 
        }
        .image-1 {
            width: 100%;
            height: auto; 
        }
        .image-2 {
            width: 90%; 
            height: auto; 
        }
        .image-3 {
            width: 90%; 
            height: auto; 
        }
    } */
    @media only screen and (max-width: 736px) {
        .main-container {
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
        }
        .row-1 {
            padding: 9rem 3rem;
            flex-direction: column; 
        }
        .container-one {
            text-align: left;
            width: 70vw;
            padding-top: 100px;
            height: 100%;
        }
        .container-two {
            width: 70vw;
            padding-top: 100px;
            height: 100%;
        }
        .row-2 {
            padding: 9rem 3rem;
            padding-bottom: 300px;
        }
    }

    /* timeline */
    @media only screen and (min-width: 768px) {
        .timeline:before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 100%;
            background-color: gray;
        }
        .timeline ul li {
            width: 50%;
            height: 100%;
            position: relative;
            margin-bottom: 1rem;
        }
        .timeline ul li:nth-child(odd) {
            float: left;
            clear: right;
            transform: translateX(-30px);
            border-radius: 20px 0px 20px 20px;
        }
        .timeline ul li:nth-child(even) {
            float: right;
            clear: left;
            transform: translateX(30px);
            border-radius: 0px 20px 20px 20px;
        }
        .timeline ul li::before {
            content: "";
            position: absolute;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background-color: gray;
            top: 0px;
        }
        .timeline ul li:nth-child(odd)::before {
            transform: translate(50%, -50%);
            right: -30px;
        }
        .timeline ul li:nth-child(even)::before {
            transform: translate(-50%, -50%);
            left: -30px;
        }
        .timeline-content .date {
            position: absolute;
            top: -30px;
            padding-bottom: 2rem;
        }
        .timeline ul li:hover::before {
            background-color: #5E9FFF;
        }
    }
</style>