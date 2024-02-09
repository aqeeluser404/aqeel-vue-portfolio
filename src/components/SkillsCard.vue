<template>
        <div class="main-container">
            <div class="text-container line-height-low">
                <h1 class="font-l color-white family-koulen">Skills</h1>
                <h1 class="font-s color-white family-plus-code">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugit animi provident cumque totam recusandae error quaerat atque corporis, porro perferendis incidunt.</h1>
            </div>
            <br>
            
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

            <div class="page-number">
                <h1 class="font-xs color-blue family-lekton">03</h1>
            </div>
            <video autoplay muted loop id="video-background">
                <source src="@/assets/wallpaper/video-wallpaper.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>

</template>

<script>
export default {
    name : 'SkillsCard'
}
</script>

<style scoped>
    .main-container {
        align-items: center;
        justify-content: center;
        position: relative;
        gap: 5%;
    }
    .text-container {
        width: 70vw;
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
    .skill-container {
        width: 100%;
        max-width: 50vh;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        text-align: left;
    }
    .skill-name{
        font-size: 15px;
        font-weight: 600;
        color: #f1f1f1;
        text-transform: uppercase;
        margin: 20px 0;
    }
    .skill-bar{
        height: 18px;
        background: #badeff;
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
    @media only screen and (max-width: 611px) {
        .main-container {
            /* padding: 9rem 3rem;
            align-items: center;
            justify-content: flex-start;
            gap: 4rem;
            height: 100%; */
            flex-direction: column;
            gap: 2rem;
            padding: 9rem 3rem;
            height: 100%;
            
        }
        .skill-container {
            width: 70vw;
        }
        .text-container {
            width: 70vw;
           
            line-height: 1.4;
            text-align: left;
        }
    }
</style>