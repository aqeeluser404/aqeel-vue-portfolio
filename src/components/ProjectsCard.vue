<template>
        <div class="main-container">
            
            <div class="text-container line-height-low">
                <h1 class="font-l color-white family-koulen">Projects</h1>
            
                <h1 class="typing-text-animation font-m color-blue family-lekton weight-bold">
                    <span class="typed-text">{{ typeValue }}</span>
                    <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                </h1>
            </div>

            <div class="card-row">
                <div class="card">
                    <img src="../assets/projects/first-portfolio.png" class="card-img" alt="#">
                    <div class="card-body">
                        <h1 class="card-title">First Portfolio</h1>
                        <p class="card-sub-title">HTML CSS and JavaScript</p>
                        <p class="card-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p>
                        
                        <button class="card-btn">Source Code</button>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/projects/animeapp.png" class="card-img" alt="#">
                    <div class="card-body">
                        <h1 class="card-title">Anime Web App</h1>
                        <p class="card-sub-title">Java Springboot and Vue.js</p>
                        <p class="card-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p>
                        <button class="card-btn">Source Code</button>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/projects/bankapp2.png" class="card-img" alt="#">
                    <div class="card-body">
                        <h1 class="card-title">Project 1</h1>
                        <p class="card-sub-title">Sub heading</p>
                        <p class="card-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate.</p>
                        <button class="card-btn">Source Code</button>
                    </div>
                </div>


            </div>

            <div class="page-number">
                <h1 class="font-xs color-blue family-lekton">04</h1>
            </div>
            <video autoplay muted loop id="video-background">
                <source src="@/assets/wallpaper/video-wallpaper.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
</template>

<script>
    export default {
        name : 'ProjectsCard',
        data: () => {
            return {
                typeValue: '',
                typeStatus: false,
                typeArray: ['Back-end.', 'Front-end.'],
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
    .main-container {
        align-items: center;
        justify-content: center;
        gap: 5%;
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
    .card-row {
        display: flex;
        gap: 1rem;
    }
    .card {
        width: 320px;
        height: 400px;
        overflow: hidden;
        border: 4px solid #ffffff2d;
        position: relative;
    }
    .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
    }
    .card-body {
        font-family: 'Koulen', sans-serif;
        width: 100%;
        height: 100%;
        bottom: -100%;
        right: 0;
        position: absolute;
        background: #000000b9;
        backdrop-filter: blur(5px);
        color: #fff;
        padding: 30px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        transition: ease-in-out 0.5s;
    }
    .card:hover .card-body{
        bottom: 0;
    }
    .card-title {
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 500;
    }
    .card-sub-title {
        text-transform: uppercase;
        font-size: 14px;
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
        /* border-radius: 5px; */
        text-transform: capitalize;
        border: 1px solid #5E9FFF;
        outline: none;
        font-weight: 500;
        cursor: pointer;
    }
    @media only screen and (max-width: 984px) {
        .main-container {
            height: 100%;
            padding: 9rem 3rem;
            gap: 4rem;
        }
        .card-row {
            flex-direction: column;
        }
    }
</style>