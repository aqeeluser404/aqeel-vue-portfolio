<template>
    <div class="main-container">
        <div class="container-one line-height-low">
            <div>
                <h1 class="font-l color-black family-koulen">About Me</h1>
                <h1 class="font-m color-blue family-lekton">Sample Text</h1>
            </div>
            <div>
                <p class="font-s color-black family-plus-code">My name is Aqeel Hanslo, third year graduate at CPUT, I have chosen the career in Applications Development because I not only enjoy building applications but also consider it one of my strong suits. I possess the ability to think outside the box to create innovative solutions for problems.</p>
                <br><br>
                <button class="button">Download CV</button>
            </div>
        </div>
        <div class="container-two">
            <h1 class="font-l color-blue family-koulen">Education</h1>

        </div>

       

    </div>
    <div class="page-number">
        <h1 class="font-xs color-blue family-lekton">02</h1>
    </div>
</template>

<script>
export default {
    name : 'AboutCard'
}
</script>

<style scoped>
    .main-container {
        background-color: white;
        flex-direction: row;
        gap: 5%;
    }
    .container-one {
        text-align: right;
        width: 40vw;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
</style>