<template>
    <video autoplay loop muted class="video">
        <source src="@/assets/wallpaper/video-wallpaper.mp4" type="video/mp4"/> 
    </video>
</template>

<script>
export default {
    name : 'WallpaperComponent'
}
</script>

<style scoped>
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1000;
  position: absolute;
  top: 0;
  left: 0;
}

</style>