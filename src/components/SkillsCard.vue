<template>
    <!-- main container -->
    <div class="main-container" :style="getAdjustedWidth">

        <div class="column-left">
            <!-- row 1============================================================================== -->
            <div class="text-container line-height-low">
                <h1 class="headline-large">Skills</h1>
                <p class="alt-font-2"> 
                    <span class="opacity-full"><br> I've always been the type of person who can spend hours designing stuff. </span>
                    <span class="opacity-half"><br> I simply enjoy being able to illustrate my thoughts into something visually appealing. </span>  
                    <span class="opacity-quarter"><br> That being said, I am knowledgeable in most languages, including some backend code.</span>
                    <br><br><br><br>
                    <!-- view projects -->
                    <button class="button">View My work</button>
                </p>
            </div>
            <br>
            <!-- row 2============================================================================== -->
            <div class="skill-container">
                <div class="skill">
                    <div class="skill-name">HTML</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="90%" style="max-width:90%"></div>
                    </div>
                </div>

                <div class="skill">
                    <div class="skill-name">CSS</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="85%" style="max-width:85%"></div>
                    </div>
                </div>

                <div class="skill">
                    <div class="skill-name">Javascript</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="55%" style="max-width:55%"></div>
                    </div>
                </div>

                <div class="skill">
                    <div class="skill-name">Vue.JS</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="60%" style="max-width:60%"></div>
                    </div>
                </div>

                <div class="skill">
                    <div class="skill-name">SPRINGBOOT</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="70%" style="max-width:70%"></div>
                    </div>
                </div>

                <div class="skill">
                    <div class="skill-name">MYSQL</div>
                    <div class="skill-bar">
                            <div class="skill-per" per="70%" style="max-width:70%"></div>
                    </div>
                </div>

                <div class="skill">
                    <div class="skill-name">JAVA</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="80%" style="max-width:80%"></div>
                    </div>
                </div>

                <div class="skill">
                    <div class="skill-name">GIT</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="90%" style="max-width:90%"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="column-right">

            <div class="container">
                <h1 class="headline-small-2"> <span class="headline-large-blue"><img src="../assets/misc/quote.png" alt="#" width="50px"></span><br>Aqeel has good coding knowledge. He is quite shy and quiet but always gets work done on time and meets deadlines. </h1>
                <div class="container-splitter"><hr></div>
                <div class="testimonial-box">
                    <div>
                        <img src="../assets/testimonial/afika.jpg" alt="#" class="testimonial-img">
                    </div>
                    <h1 class="alt-font">Afika Maliwa 
                        <br>Line Manager - CapaCiTi</h1>
                </div>
            </div>
            <br>
            <div class="text-block-row">
                <div class="text-block">
                    <h1 class="headline-medium weight-bold">05+ </h1>
                    <p class="alt-font"> Backend Frontend Coding Languages</p>
                </div>
                <div class="text-block">
                    <h1 class="headline-medium weight-bold">04+ </h1>
                    <p class="alt-font">Full stack applications</p>
                </div>
                <div class="text-block">
                    <h1 class="headline-medium weight-bold">03+ </h1>
                    <p class="alt-font">Years in developing practice</p>
                </div>

            </div>
        </div>
        <!-- components -->
        <!-- number -->
        <div class="page-number">
            <h1 class="headline-xsmall">03</h1>
        </div>
        <!-- video wallpaper -->
        <video autoplay muted loop id="video-background">
            <source src="@/assets/wallpaper/video-wallpaper.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name : 'SkillsCard',
    computed: {
        ...mapState(['isNavbarVisible']),
        getAdjustedWidth() {
            return {
                width: this.isNavbarVisible ? 'calc(100% - 6.5rem)' : '100%',
                position: 'relative',
                left: this.isNavbarVisible ? '6.5rem' : '0',
            };
        }
    }
}
</script>

<style scoped>

    .text-block-row {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        gap: 1rem;
    }
    .text-block {
        border: 1px solid #949494;
        background: #ffffff;
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: center;
        text-transform: uppercase;
        gap: 1rem;
        width: 30%;
    }

    /* components================================================================================ */
    
    #video-background {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    /* containers================================================================================ */

    .main-container {
        padding: 9rem 3rem;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        gap: 5%;
        padding-top: 25vh;

        /* scrolling */
        height: 100%;
    }
    .column-left {
        width: 100%;
        max-width: 40vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .column-right {
        width: 100%;
        height: 100vh;
        max-width: 40vw;
    }
    .text-container {
        text-align: right;
        width: auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        /* scrolling */
        /* height: auto; */
    }
    .skill-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        text-align: left;
        padding-top: 50px;
        /* scrolling */
        /* height: 100vh; */
    }
    .container-splitter {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    hr {
        width: 25%;
    }
    .testimonial-box {
        width: 100%;
        justify-content: center;
        text-align: left;
        gap: 1.5rem;
        text-transform: uppercase;
        align-items: center;
    }
    .container {
        background: #22222262;
        box-shadow: inset 0 8px 60px rgba(0,0,0,0.1),
                    inset 0 8px 8px rgba(0,0,0,0.1),
                    inset 0 -4px 4px rgba(0,0,0,0.1);
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
        border-radius: 2rem;
        width: 100%;
        padding: 3rem 7rem;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        gap: 2rem;
    }
    .container div {
        display: flex;
    }
    .testimonial-img {
        width: 100px;
        border-radius: 50%;
        border: 3px solid #5E9FFF;
    }

    /* content=================================================================================== */

    /* skill progress bars */
    .skill-name{
        font-size: 15px;
        font-weight: 600;
        color: #f1f1f1;
        text-transform: uppercase;
        margin: 20px 0;
    }
    .skill-bar{
        height: 18px;
        background: #44444480;
        border-radius: 3px;
    }
    .skill-per{
        height: 18px;
        background: #0084ff;
        border-radius: 3px;
        position: relative;
        font-weight: 500;
        animation: fillBars 2.5s 1;
    }
    .skill-per::before{
        content: attr(per);
        position: absolute;
        padding: 4px 6px;
        background: #f1f1f1;
        color: black;
        border-radius: 4px;
        font-size: 12px;
        top: -35px;
        right: 0;
        transform: translateX(50%);
    }
    .skill-per::after{
        content: "";
        position: absolute;
        width: 10px;
        height: 6px;
        background: #f1f1f1;
        top: -17px;
        right: 0;
        transform: translateX(50%) rotate(45deg);
        border-radius: 2px;
    }
    @keyframes fillBars{
        from{
            width: 0;
        }
        to{
            width: 100%;
        }
    }

    /* media queries============================================================================= */

    @media only screen and (max-width: 611px) {
        .main-container {
            padding: 0;
            flex-direction: column;
            align-items: center;
            /* align-items: center;
            flex-direction: column;
            justify-content: center; */
        }
        .column-left {
            padding: 9rem 3rem;
            min-width: 100vw;
            height: 100%;
            /* max-width: 40vw; */
        }
        .column-right {
            /* padding: 9rem 3rem; */
            /* padding-top: 9rem;
            padding-right: 3rem; */
            width: 100%;
            height: 100%;
            max-width: 70vw;
            /* max-width: 40vw; */
        }
        .text-container {
            text-align: right;
            width: 70vw;
            padding-top: 100px;
            height: 100%;
        }
        .skill-container {
            width: 70vw;
            height: 100%;
        }
        .testimonial-box {
            width: 100%;
        }
        .text-block-row {
            flex-direction: column;
        }
        .text-block {
            width: 100%;
            text-align: left;
            flex-direction: row;
            text-align: space-evenly;
            justify-content: center;
            gap: 3rem;
        }
    }
</style>