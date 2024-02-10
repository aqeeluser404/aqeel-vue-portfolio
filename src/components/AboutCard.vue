<template>
    <!-- main container -->
    <div class="main-container">

        <!-- column 1============================================================================== -->
        <div class="container-one line-height-low">

            <div>
                <!-- heading -->
                <h1 class="font-l color-black family-koulen">About Me</h1>
                <!-- animation text -->
                <h1 class="typing-text-animation font-m color-blue family-lekton weight-bold">
                    <span class="typed-text">{{ typeValue }}</span>
                    <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                </h1>
            </div>

            <div>
                <!-- paragraph -->
                <p class="font-s color-black family-plus-code">My name is Aqeel Hanslo, third year graduate at CPUT, I have chosen the career in Applications Development because I not only enjoy building applications but also consider it one of my strong suits. I possess the ability to think outside the box to create innovative solutions for problems.</p>
                <br><br>
                <!-- download cv button -->
                <button class="button">Download CV</button>
            </div>

        </div>

        <!-- column 2============================================================================== -->
        <div class="container-two  line-height-low">

            <!-- heading -->
            <h1 class="font-l color-blue family-koulen">Education</h1>

            <!-- timeline -->
            <div class="timeline-container">
                <ul>
                    <div class="item-group">
                        <li class="item-decorated">
                            <h3>Oracle Academy High School</h3>
                        </li>
                        <li class="item-none">
                            <div class="left-border">
                                <h3>BACHELOR'S DEGREE CERTIFICATION</h3>
                                <h3>2013 - 2018</h3>
                            </div>
                        </li>
                    </div>
                    <div class="item-group">
                        <li class="item-decorated">
                            <h3>Gap year at Emcon Construction</h3>
                        </li>
                        <li class="item-none">
                            <div class="left-border">
                                <h3>WORK EXPERIENCE</h3>
                                <h3>2019 - 2020</h3>
                            </div>
                        </li>
                    </div>
                    <div class="item-group">
                        <li class="item-decorated">
                            <h3>College of Cape Town</h3>
                        </li>
                        <li class="item-none">
                            <div class="left-border">
                                <h3>HIGHER CERTIFICATION IN INFO & COM</h3>
                                <h3>2020 - 2021</h3>
                            </div>
                        </li>
                    </div>
                    <div class="item-group">
                        <li class="item-decorated">
                            <h3>Cape Peninsula University of Technology</h3>
                        </li>
                        <li class="item-none">
                            <div class="left-border">
                                <h3>DIPLOMA IN ICT: APPLICATION DEVELOPMENT</h3>
                                <h3>2021 - 2023</h3>
                            </div>
                        </li>
                    </div>
                    <div class="item-group">
                        <li class="item-decorated">
                            <h3>CapaCiTi</h3>
                        </li>
                        <li class="item-none">
                            <div class="left-border">
                                <h3>LEARNERSHIP IN FULLSTACK DEVELOPMENT</h3>
                                <h3>2023 - 2024</h3>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </div>

        <!-- components -->
        <!-- number -->
        <div class="page-number">
            <h1 class="font-xs color-blue family-lekton">02</h1>
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
    /* components================================================================================ */

    /* containers================================================================================ */

    .main-container {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-bottom: 25vh;
        height: 100%;
        gap: 5%;
    }
    .container-one {
        text-align: right;
        width: 35vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding-top: 25vh;
        gap: 3rem;
    }
    .container-two {
        text-align: left;
        width: 30vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding-top: 25vh;
        gap: 2rem;
    }

    /* content=================================================================================== */

    /* timeline */
    .item-decorated {
        list-style-type: disc;
        color: #0084ff;
    }
    .item-decorated h3 {
        color: #0084ff;
        font-family: 'Inter', sans-serif;
        font-size: 1.5rem;
        padding-bottom: 1rem;
    }
    .item-none {
        list-style-type: none;
    }
    .item-none h3 {
        font-family: 'Inter', sans-serif;
        font-size: 1.1rem;
        color: #0E0E0E;
        font-weight: 500;
    }
    .item-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .left-border {
        padding-left: 1rem;
        border-left: 2px #0084ff solid;

    }
    .left-border h3 {
        padding-bottom: 1rem;
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

    @media only screen and (max-width: 736px) {
        .main-container {
            padding: 9rem 3rem;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            gap: 4rem;
            height: 100%;
        }
        .container-one {
            text-align: left;
            width: 70vw;
            padding-top: 100px;
            height: 100%;
        }
        .container-two {
            width: 70vw;
            padding-top: 75px;
            height: 100%;
        }
    }
</style>