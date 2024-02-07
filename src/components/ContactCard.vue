<template>
    <div class="wrapper-container">
        <div class="main-container">
            <div class="container-one line-height-low">
                <div>
                    <h1 class="font-l color-black family-koulen">Contact</h1>
                    <br>
                    <h1 class="font-s color-blue-darker weight-bold family-lekton">Let's Talk</h1>
                    <br>
                    <p class="font-s color-black family-plus-code line-height-med">
                        <span><b>Questions</b> or <b>ideas?</b></span><br>
                        <span>Drop me a message in the form</span><br><br>
                        <span>Let's talk about your next project!</span>
                    </p>
                </div>
            </div>
            <div class="container-two">
                <div class="contact-form">
                <form action="#" method="#">
                    <div class="form-group">
                        <label for="name">NAME</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">EMAIL</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">MESSAGE</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <div class="form-group">
                        <input id="submit" type="submit" value="Submit" class="btn">
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'ContactCard',

    }
</script>

<style scoped>
    .wrapper-container {
        background-color: rgb(255, 255, 255);
    }
    .main-container {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5vw;
        /* padding: 0; */
    }
    .container-one div  {
        display: flex;
        flex-direction: column;
        text-align: right;
        max-width: 60vw;
    }
    .container-two {
        max-width: 40vw;
    }

    /* form styling */
    .contact-form {
        width: auto;
        text-align: left;
        margin: 0 auto;
        color: #0E0E0E;
    }
    .form-group {
        /* width: 100%; */
        font-size: 1.25rem;
    }
    .form-group label {
        display: block;
        color: #424242;
        margin-bottom: 1rem;
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
    }
    .form-group input[type="text"],
    .form-group input[type="email"],
    .form-group textarea {
        /* width: 100%; */
        padding: 8px;
        border: 1px solid #0E0E0E;
        resize: vertical;
        min-height: 60px;
    }
    #message {
        min-height: 90px;
    }

</style>