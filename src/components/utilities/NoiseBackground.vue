<template>
    <div class="noise"></div>
</template>

<script>
export default {
    name : 'NoiseBackground',
}
</script>

<style>
    .noise::before{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        content: "";
        opacity: .02;  
        z-index: 1000;
        pointer-events: none;
        background: url(@/assets/misc/noise.gif) ;
    }
</style>