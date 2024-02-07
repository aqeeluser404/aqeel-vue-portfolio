<template>
    <div class="wrapper-container">
        <div class="main-container">
            
            <div class="text-container line-height-low">
                <h1 class="font-l color-white family-koulen">Projects</h1>
            
                <h1 class="typing-text-animation font-m color-blue family-lekton weight-bold">
                    <span class="typed-text">{{ typeValue }}</span>
                    <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                </h1>

                <div class="card-row">
                    <div class="card">
                        <img src="../assets/logo/vue.png" class="card-img" alt="#">
                        <div class="card-body">
                            <h1 class="card-title">Project 1</h1>
                            <p class="card-sub-title">Sub heading</p>
                            <p class="card-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate, culpa cumque eaque ipsa quaerat optio, dignissimos tempore nostrum in? Recusandae!</p>
                            <button class="card-btn">Preview</button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/logo/vue.png" class="card-img" alt="#">
                        <div class="card-body">
                            <h1 class="card-title">Project 1</h1>
                            <p class="card-sub-title">Sub heading</p>
                            <p class="card-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate, culpa cumque eaque ipsa quaerat optio, dignissimos tempore nostrum in? Recusandae!</p>
                            <button class="card-btn">Preview</button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/logo/vue.png" class="card-img" alt="#">
                        <div class="card-body">
                            <h1 class="card-title">Project 1</h1>
                            <p class="card-sub-title">Sub heading</p>
                            <p class="card-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt esse vel provident ducimus laborum praesentium perspiciatis, aliquid cupiditate, culpa cumque eaque ipsa quaerat optio, dignissimos tempore nostrum in? Recusandae!</p>
                            <button class="card-btn">Preview</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-number">
                <h1 class="font-xs color-blue family-lekton">04</h1>
            </div>
        </div>
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
    .wrapper-container {
        background-color: rgba(0, 0, 0, 0);
    }
    .main-container {
        align-items: center;
        justify-content: center;
    }
    .text-container {
        display: flex;
        flex-direction: column;
    }

    /* text animation styling */
    .typing-text-animation {
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
    } 
    @keyframes cursorBlink {
        49% { background-color: #fff; }
        50% { background-color: transparent; }
        99% { background-color: transparent; }
    }
    .card-row {
        display: flex;
        gap: 1rem;
    }
    .card {
        width: 320px;
        height: 500px;
        border-radius: 20px;
        overflow: hidden;
        border: 8px solid #fff;
        position: relative;
    }
    .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
    }
    .card-body {
        width: 100%;
        height: 100%;
        top: 0;
        right: -100%;
        position: absolute;
        background: #1f3d4738;
        backdrop-filter: blur(5px);
        border-radius: 15px;
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
        right: 0;
    }
    .card-title {
        text-transform: uppercase;
        font-size: 50px;
        font-weight: 500;
    }
    .card-sub-title {
        text-transform: capitalize;
        font-size: 14px;
        font-weight: 300;
    }
    .card-info {
        font-size: 16px;
        line-height: 25px;
        margin: 40px 0;
        font-weight: 400;
    }
    .card-btn {
        color: #1f3d47;
        background: #8fabba;
        padding: 10px 20px;
        width: 120px;
        border-radius: 5px;
        text-transform: capitalize;
        border: none;
        outline: none;
        font-weight: 500;
        cursor: pointer;
    }
</style>