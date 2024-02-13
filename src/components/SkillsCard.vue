<template>
    <!-- main container -->
    <div class="main-container" :style="getAdjustedWidth">

        <!-- row 1============================================================================== -->
        <div class="text-container line-height-low">
            <h1 class="headline-large">Skills</h1>
            <p class="headline-small">
                <span class="opacity-full"><br> The design of an application or website usually </span>
                <span class="opacity-half"><br> mirrors the thought process of the creator. Tell me </span>  
                <span class="opacity-quarter"><br> what to do and I'll try to visualize your ideas</span>
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
                width: this.isNavbarVisible ? 'calc(100% - 6.5rem)' : '100%,',
                position: 'relative',
                left: this.isNavbarVisible ? '6.5rem' : '0',
            };
        }
    }
}
</script>

<style scoped>

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
        align-items: center;
        justify-content: center;
        position: relative;
        gap: 2rem;
        padding-top: 25vh;

        /* scrolling */
        height: 100%;
    }
    .text-container {
        text-align: right;
        width: 40vw;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        /* scrolling */
        /* height: auto; */
    }
    .skill-container {
        width: 40vw;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        text-align: left;

        /* scrolling */
        /* height: 100vh; */
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
            padding: 9rem 3rem;
            align-items: center;
            justify-content: flex-start;
        }
        .text-container {
            text-align: right;
            width: 70vw;
            padding-top: 100px;
            height: 100%;
        }
        .skill-container {
            width: 70vw;
            padding-top: 50px;
            height: 100%;
        }
        #video-background {
            position: absolute;
        }
    }
</style>