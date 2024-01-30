<template>
    <div class="main-container">
        <h1>Home</h1>
        <!-- <div class="text-container">
            <h3>Hi there,</h3>
            <h1>I'm Aqeel Hanslo</h1>
            <h2>Software Developer Intern</h2>
            <p>The design of an application or website usually mirrors the thought process of the creator. Tell me what to do, and I'll try to visualise your ideas.</p>
            <div class="links-container">
                <button>Get In Touch</button>
                <div class="social-links">
                    <a href="https://github.com/aqeeluser404">
                        <img src="../assets/logo/github.png" alt="github logo" class="social-link-img">
                    </a>
                    <a href="#">
                        <img src="../assets/logo/instagram.png"  alt="instagram logo" class="social-link-img">
                    </a>
                    <a href="https://www.linkedin.com/in/aqeel-hanslo-234961210/">
                        <img src="../assets/logo/linkedin.png" alt="linkedin logo" class="social-link-img">
                    </a>


                </div>
            </div>
        </div> -->

        <!-- <div class="styled-button">
            <div class="left">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
            </div>
                <div class="middle">
                    <div class="line-4"></div>
                    <div class="line-5"><button class="button">Get In Touch</button></div>
                    <div class="line-6"></div>
                </div>
            <div class="right">
                <div class="line-7"></div>
                <div class="line-8"></div>
                <div class="line-9"></div>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'HomeCard'
    }
</script>

<style scoped>
    .styled-button {
        display: flex;
        flex-direction: row;
    }
    .button {
        min-width: 100px;
        min-height: 50px;
        border: 1px #0084ff solid;
    }
    .left {
        min-width: 50px;
        display: flex;
        flex-direction: column;
    }
    .line-1 {
        min-width: 50px;
        min-height: 50px;
        border-right: 1px solid;
        border-image: linear-gradient(to bottom, rgba(161, 161, 161, 0) 40%, #0084ff 60%) 1;
    }

    /* to top: Bottom to top.
    to right: Left to right.
    to bottom: Top to bottom (which you have already used).
    to left: Right to left.
    to top right: Bottom-left to top-right.
    to top left: Bottom-right to top-left.
    to bottom right: Top-left to bottom-right.
    to bottom left: Top-right to bottom-left. */

    .line-2 {
        min-width: 50px;
        min-height: 50px;
        border-bottom: 1px solid;
        border-image: linear-gradient(to bottom left, #0084ff 40%, rgba(161, 161, 161, 0) 60%) 1;

    }

    .line-3 {
        min-width: 50px;
        min-height: 50px;
    /* border-image: linear-gradient(to bottom left, rgba(161, 161, 161, 0) 40%, #0084ff 60%) 1; */
    }
    .middle {
        min-width: 100px;
        display: flex;
        flex-direction: column;
    }
    .line-4, .line-5, .line-6 {
        min-width: 100px;
        min-height: 50px;
    }
    .right {
        min-width: 50px;
        display: flex;
        flex-direction: column;
    }
    .line-7, .line-8, .line-9 {
        min-width: 50px;
        min-height: 50px;
    }
    .text-container {
        width: 28rem;
        line-height: 1.5;
    }
    .text-container h3 {text-align: right;}
    .text-container h1 {text-align: left;}
    .text-container h2 {text-align: right;}
    .text-container p {text-align: left;}
    .social-link-img {
        width: 2.813rem;
    }
    .links-container {
        display: flex;
    }
</style>