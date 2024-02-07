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
                <form @submit.prevent="">
                    <div class="form-group">
                        <label for="name">NAME</label>
                        <input type="text" id="name" name="name" required placeholder="Type Here" v-model="name">
                    </div>
                    <div class="form-group">
                        <label for="email">EMAIL</label>
                        <input type="email" id="email" name="email" required placeholder="Type Here" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="message">MESSAGE</label>
                        <textarea id="message" name="message" required placeholder="Type Here" v-model="message"></textarea>
                    </div>
                    <div class="form-group">
                        <input id="submit" type="submit" value="Submit" class="btn">
                    </div>
                </form>
                <!-- <div>
                    <p>Result</p>
                    <p>name: {{ name }}</p>
                    <p>email: {{ email }}</p>
                    <p>message: {{ message }}</p>
                </div> -->
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'ContactCard',
        data() {
            return {
                name : '',
                email : '',
                message : ''
            }

        }

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
        width: 22vw;
    }
    /* form styling */
    .contact-form {
        text-align: left;
        margin: 0 auto;
        color: #0E0E0E;
    }
    .contact-form form {
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }
    .form-group {
        font-size: 1.25rem;
    }
    .form-group label {
        display: block;
        color: #424242;
        font-size: .9rem;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        padding-bottom: 0.3rem;
    }
    textarea::placeholder {
        font-family: 'Inter', sans-serif;
        font-size: .9rem;
        color: #999; 
        padding: 0.5rem;
        font-weight: 500;
    }
    input::placeholder {
        font-family: 'Inter', sans-serif;
        font-size: .9rem;
        color: #999; 
        padding: 0.5rem;
        font-weight: 500;
    }
    .form-group input[type="text"],
    .form-group input[type="email"],
    .form-group textarea {
        width: 22vw;
        padding: 8px;
        border: 2px solid #0E0E0E;
        resize: vertical;
        min-height: 60px;
    }
    #message {
        min-height: 90px;
    }
</style>