<template>
    <!-- main container -->
    <div class="main-container">

        <div class="row-1">
            <!-- column 1============================================================================== -->
            <div class="container-one line-height-low">
                <div>
                    <!-- heading -->
                    <h1 class="headline-large-black">About Me</h1>
                    <!-- animation text -->
                    <h1 class="typing-text-animation headline-medium weight-bold">
                        <span class="typed-text">{{ typeValue }}</span>
                        <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                    </h1>
                </div>

                <div>
                    <!-- paragraph -->
                    <p class="headline-small-black">My name is Aqeel Hanslo, third year graduate at CPUT, I have chosen the career in Applications Development because I not only enjoy building applications but also consider it one of my strong suits. I possess the ability to think outside the box to create innovative solutions for problems.</p>
                    <br><br>
                    <!-- download cv button -->
                    <button class="button">Download CV</button>
                </div>

            </div>
            <!-- column 2============================================================================== -->
            <div class="container-two  line-height-low">
                <div class="image-container">
                    <img :src="gifPath" alt="#" class="image-1">
                    <img :src="gifPath" alt="#" class="image-2">               
                </div>
            </div>

        </div>

        <div class="row-2">
            <!-- heading -->
            <h1 class="headline-large-blue">Education</h1>

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
        gap: 5%;
    }
    .row-1 {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        width: 100vw;
        gap: 5rem;
        padding-bottom: 15vh;
    }
    .container-one {
        text-align: right;
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 25vh;
        gap: 3rem;
    }
    .container-two {
        text-align: left;
        width: 40%;
        height: 100%;
        padding-top: 25vh;
        gap: 2rem;
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
        background-color: #111;
    }

    /* content=================================================================================== */

    .image-container {
        position: relative;
        width: 500px;
        height: 500px;
        border: 3px #0084ff solid;
        padding: 2rem;
    }
    .image-1 {
        width: 450px;
        height: 450px;
        border: 1px #1e1f22 solid;
    }
    .image-2 {
        position: absolute;
        top: 50px;
        left: 50px;
        width: 480px;
        z-index: -1;
    }

    /* timeline styling */
    .timeline {
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
    }
    .timeline ul li {
        padding: 20px;
        background-color: #1e1f22;
        color: white;
        border-radius: 10px;
        padding-bottom: 20px;
    }
    .timeline ul li:last-child {
        margin-bottom: 0;
    }
    .timeline-content h1 {
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 30px;
        margin-bottom: 10px;
    }
    .timeline-content p {
        font-size: 16px;
        line-height: 30px;
        font-weight: 300;
    }
    .timeline-content .date {
        font-size: 12px;
        font-weight: 300;
        margin-bottom: 10px;
        letter-spacing: 2px;
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

    @media only screen and (max-width: 1415px) {
        .container-two {
            width: 100%;
            padding-top: 50px;
            height: 100%;
        }
        .row-1 {
            flex-direction: column;
        }
        .image-container {
            width: 350px;
            height: 350px;
        }
        .image-1 {
            width: 250px;
            height: 250px;
        }
        .image-2 {
            top: 50px;
            left: 50px;
            width: 280px;
        }
    }

    @media only screen and (max-width: 736px) {
        .main-container {
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            gap: 4rem;
            height: 100%;
        }
        .row-1 {
            padding: 9rem 3rem;
            flex-direction: column;
            
        }
        .row-2 {
            padding: 9rem 0rem;
        }
        .container-one {
            text-align: left;
            width: 70vw;
            padding-top: 100px;
            height: 100%;
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
        .timeline ul {
            gap: 1rem;
        }
        .timeline ul li {
            width: 50%;
            position: relative;
            margin-bottom: 50px;
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
        }
        .timeline ul li:hover::before {
            background-color: aqua;
        }
    }
</style>