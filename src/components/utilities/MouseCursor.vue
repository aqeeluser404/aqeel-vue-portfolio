<template>
    <!-- <div class="video-background">
        <video ref="videoRef" autoplay loop muted class="video">
            <source src="@/assets/wallpaper/video-wallpaper.mp4" type="video/mp4"/> 
        </video>
    </div> -->
    <div class="circle"></div>
</template>

<script>
export default {
    name: 'WallpaperComponent',
    mounted() {
        console.clear();

// Select the circle element
const circleElement = document.querySelector('.circle');

// Create objects to track mouse position and custom cursor position
const mouse = { x: 0, y: 0 }; // Track current mouse position
const previousMouse = { x: 0, y: 0 } // Store the previous mouse position
const circle = { x: 0, y: 0 }; // Track the circle position

// Initialize variables to track scaling and rotation
let currentScale = 0; // Track current scale value
let currentAngle = 0; // Track current angle value

// Update mouse position on the 'mousemove' event
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
const speed = 0.17;

// Start animation
const tick = () => {
  // MOVE
  // Calculate circle movement based on mouse position and smoothing
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  // Create a transformation string for cursor translation
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  // SQUEEZE
  // 1. Calculate the change in mouse position (deltaMouse)
  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  // Update previous mouse position for the next frame
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150); 
  // 3. Convert mouse velocity to a value in the range [0, 0.5]
  const scaleValue = (mouseVelocity / 150) * 0.5;
  // 4. Smoothly update the current scale
  currentScale += (scaleValue - currentScale) * speed;
  // 5. Create a transformation string for scaling
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  // ROTATE
  // 1. Calculate the angle using the atan2 function
  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
  // 2. Check for a threshold to reduce shakiness at low mouse velocity
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  // 3. Create a transformation string for rotation
  const rotateTransform = `rotate(${currentAngle}deg)`;

  // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  // Request the next frame to continue the animation
  window.requestAnimationFrame(tick);
}

// Start the animation loop
tick();
        // this.slowDownVideo();
    },
    // methods: {
    //     slowDownVideo() {
    //         const video = this.$refs.videoRef;

    //         if ('playbackRate' in video) {
    //             video.style.transition = 'all 0.5s ease-in-out';
    //             video.playbackRate = 1; 
    //         } else {
    //             console.error('Playback rate adjustment not supported.');
    //         }
    //     }
    // }
};
</script>

<style>
    .circle {
        --circle-size: 40px;
        position: fixed;
        height: var(--circle-size);
        width: var(--circle-size);
        border: 1px solid white;
        border-radius: 100%;
        top: calc(var(--circle-size) / 2 * -1);
        left: calc(var(--circle-size) / 2 * -1);
        pointer-events: none;
        z-index: 2;
    }
/* .video-background {
    background: #0E0E0E;
    overflow: hidden;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -1001;
    background-repeat: repeat;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    margin: 0 auto;
}

@media only screen and (max-width: 611px) {
    .video-background {

        width: 100vw;
        height: 120vh;

    }
} */
</style>