<template>
    <!-- main container -->
    <div class="main-container" :style="getAdjustedWidth">

        <!-- left container -->
        <div class="column-left">

            <!-- text container -->
            <div class="text-container line-height-low">

                <!-- heading & paragraph -->
                <h1 class="headline-large">Skills</h1>
                <p class="font-inter-medium-white"> 
                    <span class="opacity-full"><br> I've always been the type of person who can spend hours designing stuff. </span>
                    <span class="opacity-half"><br> I simply enjoy being able to illustrate my thoughts into something visually appealing. </span>  
                    <span class="opacity-quarter"><br> That being said, I am knowledgeable in most languages, including some backend code.</span>
                    <br><br><br><br>

                    <!-- view projects -->
                    <button class="button" @click="GoToProjects">View My work</button>
                </p>
            </div>

            <br>

            <!-- progression bars -->
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
                        <div class="skill-per" per="69%" style="max-width:69%"></div>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-name">Vue.JS</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="78%" style="max-width:78%"></div>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-name">SPRINGBOOT</div>
                    <div class="skill-bar">
                        <div class="skill-per" per="77%" style="max-width:77%"></div>
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

        <!-- right container -->
        <div class="column-right">

            <!-- testimonial container -->
            <div class="container">
                <h1 class="headline-small-2">
                    <span class="headline-large-blue"><img src="../assets/misc/quote.png" alt="#" width="50px"></span>
                    <br>Aqeel has good coding knowledge. He is quite shy and quiet but always gets work done on time and meets deadlines.
                </h1>

                <!-- splitter div -->
                <div class="container-splitter"><hr></div>
                <div class="testimonial-box">
                    <div>
                        <img src="../assets/testimonial/afika.jpg" alt="#" class="testimonial-img">
                    </div>
                    <h1 class="nav-item">Afika Maliwa 
                        <br>Line Manager - CapaCiTi</h1>
                </div>
            </div>
            <br>

            <!-- some more skill boxes -->
            <div class="text-block-row">
                <div class="text-block">
                    <img src="../assets/misc/coding-2.svg" alt="#">
                    <p class="font-inter-small"> Backend Frontend Coding Languages</p>
                </div>
                <div class="text-block">
                    <img src="../assets/misc/coding.svg" alt="#">
                    <p class="font-inter-small">Full stack java applications</p>
                </div>
                <div class="text-block">
                    <img src="../assets/misc/coding-3.svg" alt="#">
                    <p class="font-inter-small">Practical coding experience</p>
                </div>
            </div>
        </div>

        <!-- components -->
        <!-- number -->
        <div class="page-number">
            <h1 class="headline-xsmall">03</h1>
        </div>
        <!-- video wallpaper -->
        <video autoplay muted loop id="video-background" style="width: 100%; height: 100vh;">
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
                // margin: this.isNavbarVisible ? '0' : '0',
                left: this.isNavbarVisible ? '6.5rem' : '0',
            };
        }
    },
    methods: {
        GoToProjects() {
            this.$router.push('/projects')
        }
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
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        /* position: relative; */
        gap: 5%;

        height: 100%;
    }

    /* left container */

    .column-left {
        width: 100%;
        max-width: 30vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .text-container {
        text-align: right;
        width: auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        animation: slide 0.5s 1;    
    }
    .skill-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        text-align: right;
        padding-top: 50px;
        transform: scaleX(-1); 
    }

    /* skill progress bars */

    .skill-name {
        transform: scaleX(-1); 
        font-size: 15px;
        font-weight: 500;
        color: #f1f1f1;
        text-transform: uppercase;
        margin: 20px 0;
    }
    .skill-bar {
        height: 18px;
        background: #44444480;
        border-radius: 3px;
    }
    .skill-per {
        height: 18px;
        background: #0084ff;
        border-radius: 3px;
        position: relative;
        font-weight: 500;
        animation: fillBars 2.5s 1;
    }
    .skill-per::before {
        transform: scaleX(-1); 
        content: attr(per);
        position: absolute;
        padding: 4px 6px;
        background: #f1f1f1;
        color: rgb(37, 37, 37);
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        border-radius: 4px;
        font-size: 12px;
        top: -35px;
        right: 0;
        transform: translateX(50%);
        transform: scaleX(-1); 
    }
    .skill-per::after{
        content: "";
        position: absolute;
        width: 10px;
        height: 6px;
        background: #f1f1f1;
        top: -17px;
        right: 0;
        transform: translateX(-75%) rotate(45deg);
        border-radius: 2px;
        
    }

    /* right container */

    .column-right {
        width: 100%;
        height: 100vh;
        max-width: 35vw;
    }

    /* testimonial container */
    
    .container {
        background: #22222262;
        box-shadow: inset 0 8px 60px rgba(0,0,0,0.1),
                    inset 0 8px 8px rgba(0,0,0,0.1),
                    inset 0 -4px 4px rgba(0,0,0,0.1);
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
        border-radius: 2rem;
        width: 100%;
        padding: 3rem 6rem;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        gap: 2rem;
        animation: slide 1s 1;
    }
    .container-splitter {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    hr { width: 25%; }
    .testimonial-box {
        width: 100%;
        justify-content: center;
        text-align: left;
        gap: 1.5rem;
        align-items: center;
    }
    .container div { display: flex; }
    .testimonial-img {
        width: 100px;
        border-radius: 50%;
        border: 5px solid #5E9FFF;
    }

    /* some more skill boxes */

    .text-block-row {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        gap: 1rem;
        animation: slide-bottom-up 0.5s 1;
    }
    .text-block {
        border-radius: 1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        gap: 1rem;
        width: 30%;
        background: #22222262;
        transition: all 0.5s;
        box-shadow: inset 0 8px 60px rgba(0,0,0,0.1),
                    inset 0 8px 8px rgba(0,0,0,0.1),
                    inset 0 -4px 4px rgba(0,0,0,0.1);
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    }
    .text-block:hover { transform: scale(1.05); }
    .text-block img { width: 50%;filter: invert(40%) sepia(130%) saturate(1000%) hue-rotate(200deg); }

    /* animations */
    @keyframes fillBars{ from{ width: 0; }to{ width: 100%; } }
    @keyframes slide{ from{ transform: translateX(100%); }to{ transform: translateX(0); } }
    @keyframes slide-bottom-up{ from{ transform: translateY(100%);}to{ transform: translateY(0);}}

    /* media queries============================================================================= */

    /* mobile sized queries */

    @media only screen and (max-width: 736px) {

        /* containers */

        .main-container {
            padding: 0;
            flex-direction: column;
            align-items: center;
            padding-bottom: 300px;
        }
        .column-left {
            padding: 9rem 3rem;
            /* min-width: 100vw; */
            height: 100%;
        }
        .text-container {
            text-align: left;
            width: 70vw;
            padding-top: 100px;
            height: 100%;
        }
        .skill-container {
            width: 70vw;
            height: 100%;
        }
        .column-right {
            width: 100%;
            height: 100%;
            max-width: 70vw;
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
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
        }
        .text-block img {
            width: 25%;
        }

        /* fonts */
        
        .nav-item {
            font-size: 0.7rem;
        }
        .font-inter-small {
            font-size: 0.7rem;
        }
        .container {
            padding: 3rem 3rem;
        }
    }
</style>