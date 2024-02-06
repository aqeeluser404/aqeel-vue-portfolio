<template>
    <video ref="videoRef" autoplay loop muted class="video">
        <source src="@/assets/wallpaper/video-wallpaper.mp4" type="video/mp4"/> 
    </video>
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
                video.playbackRate = 0.4; 
            } else {
                console.error('Playback rate adjustment not supported.');
            }
        }
    }
};
</script>

<style scoped>
.video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1000;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
