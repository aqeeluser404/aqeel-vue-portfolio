<template>
    <div class="video-background">
        <video ref="videoRef" autoplay loop muted class="video">
            <source src="@/assets/wallpaper/video-wallpaper.mp4" type="video/mp4"/> 
        </video>
    </div>
</template>

<script>
export default {
    name: 'WallpaperComponent',
    mounted() {
        this.slowDownVideo();
    },
    methods: {
        slowDownVideo() {
            const video = this.$refs.videoRef;

            if ('playbackRate' in video) {
                video.style.transition = 'all 0.5s ease-in-out';
                video.playbackRate = 1; 
            } else {
                console.error('Playback rate adjustment not supported.');
            }
        }
    }
};
</script>

<style scoped>
.video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1000;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
}
.video-background {
    background: #0E0E0E;
    overflow: hidden;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -1001;
    background-repeat: repeat;
}
</style>
