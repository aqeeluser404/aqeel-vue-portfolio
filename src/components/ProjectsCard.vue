<template>
    <div class="wrapper-container">
        <div class="main-container">
            
            <div class="text-container line-height-low">
                <h1 class="font-l color-white family-koulen">Projects</h1>
            
                <h1 class="typing-text-animation font-m color-blue family-lekton">
                    <span class="typed-text">{{ typeValue }}</span>
                    <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                </h1>
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
                newTextDelay: 2000,
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
        background-color: rgb(0, 0, 0);
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
</style>