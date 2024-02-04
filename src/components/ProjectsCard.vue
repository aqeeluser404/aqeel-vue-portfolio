<template>
    <div class="wrapper-container">
        <div class="main-container">
            
            <div class="text-container line-height-low">
                <h1 class="font-l color-white family-koulen">Projects</h1>
                <h1 class="font-m color-blue family-lekton">Sample Text</h1>
            </div>

            <div class="projects-container">
                <div class="container">
                    <!-- project 1 -->
                    <input type="radio" name="slide" id="c1" checked>
                    <label for="c1" class="card">
                        <div class="row">
                            <div class="icon">1</div>
                            <div class="description">
                                <h1>Project 1</h1>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </label>
                    <!-- project 2 -->
                    <input type="radio" name="slide" id="c1" checked>
                    <label for="c1" class="card">
                        <div class="row">
                            <div class="icon">2</div>
                            <div class="description">
                                <h1>Project 2</h1>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </label>
                    <!-- project 3 -->
                    <input type="radio" name="slide" id="c1" checked>
                    <label for="c1" class="card">
                        <div class="row">
                            <div class="icon">3</div>
                            <div class="description">
                                <h1>Project 3</h1>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </label>
                    <!-- project 4 -->
                    <input type="radio" name="slide" id="c1" checked>
                    <label for="c1" class="card">
                        <div class="row">
                            <div class="icon">4</div>
                            <div class="description">
                                <h1>Project 4</h1>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>

            <div class="page-number">
                <h1 class="font-xs color-blue family-lekton">04</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'ProjectsCard'
}
</script>

<style scoped>
    .wrapper-container {
        background-color: black;
    }
    .main-container {
        align-items: center;
        justify-content: center;
    }
    .text-container {
        display: flex;
        flex-direction: column;
    }
    /* projects */
    .projects-container {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .container {
        height: 400px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    .card {
        width: 80px;
        border-radius: .75rem;
        background-size: cover;
        cursor: pointer;
        overflow: hidden;
        border-radius: 2rem;
        margin: 0 10px;
        display: flex;
        transition: .6s cubic-bezier(.28, -0.03, 0, .99);
        box-shadow: 0px 10px 30px -5px rgba(0,0,0,0.8);
    }

    .card > .row {
        color: rgb(0, 0, 0);
        display: flex;
        flex-wrap: nowrap;
    }
    .card > .row > .icon {
        
    }
</style>