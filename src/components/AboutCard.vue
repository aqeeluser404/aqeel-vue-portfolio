<template>
    <div class="wrapper-container">
        <div class="main-container">
            <div class="container-one line-height-low">
                <div>
                    <h1 class="font-l color-black family-koulen">About Me</h1>
                    <h1 class="typing-text-animation font-m color-blue family-lekton weight-bold">
                        <span class="typed-text">{{ typeValue }}</span>
                        <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                    </h1>
                </div>
                <div>
                    <p class="font-s color-black family-plus-code">My name is Aqeel Hanslo, third year graduate at CPUT, I have chosen the career in Applications Development because I not only enjoy building applications but also consider it one of my strong suits. I possess the ability to think outside the box to create innovative solutions for problems.</p>
                    <br><br>
                    <button class="button">Download CV</button>
                </div>
            </div>
            <div class="container-two">
                <h1 class="font-l color-blue family-koulen">Education</h1>
                <!-- TODO:TIMELINE -->
            </div>
            <div class="page-number">
                <h1 class="font-xs color-blue family-lekton">02</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'AboutCard',
        data: () => {
            return {
                typeValue: '',
                typeStatus: false,
                typeArray: ['Creative.', 'Innovative.', 'Humble.', 'Curious.'],
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
        background-color: white;
    }
    .main-container {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5%;
    }
    .container-one {
        text-align: right;
        width: 40vw;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .container-two {
        width: 30vw;
        display: flex;
        flex-direction: column;
        text-align: left;
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
</style>