<template>
    <!-- main container -->
    <div class="main-container">

        <!-- column 1============================================================================== -->
        <div class="container-one line-height-low">
            <div>
                <h1 class="headline-large-black">Contact</h1>
                <br>
                <h1 class="headline-medium"><span class="weight-bold">Let's Talk</span></h1>
                <br>
                <p class="headline-small-black line-height-med">
                    <span><b>Questions</b> or <b>ideas?</b></span><br>
                    <span>Drop me a message in the form</span><br><br>
                    <span>Let's talk about your next project!</span>
                </p>
            </div>
        </div>

        <!-- column 2============================================================================== -->
        <div class="container-two">
            
            <!-- form -->
            <div class="contact-form">
                <form @submit.prevent="handleSubmit">
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
                        <textarea id="message" name="message" required v-model="message"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <div class="g-recaptcha"></div>
                        <input id="submit" type="submit" value="Submit" class="button">
                    </div>
                    <span id="msg">{{ submitMessage }}</span>
                </form>
            </div>
        </div>
        <!-- components -->
        <!-- number -->
        <div class="page-number">
            <h1 class="headline-xsmall">05</h1>
        </div>
    </div>
</template>

<script>
/* global grecaptcha */
import { projectFirestore } from '../firebase/config';
// import emailjs from 'emailjs-com';

export default {
    name: 'ContactCard',
    data() {
        return {
        name: '',
        email: '',
        message: '',
        submitMessage: '',
        recaptchaToken: null,
        };
    },
    methods: {
        async handleSubmit() {
            try {
                // Check reCAPTCHA response
                const recaptchaResponse = await grecaptcha.execute('6LdGoW8pAAAAAK_oMIExegB957yAhvHfVYIJUoOk', { action: 'submit' });

                if (!recaptchaResponse) {
                    console.error('reCAPTCHA verification failed');
                    return;
                }

                let userMessage = {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                    recaptchaResponse: recaptchaResponse,
                };

                // Save form data to Firestore collection
                await projectFirestore.collection('userMessages').add(userMessage);

                // this.sendEmail();

                // Reset form fields
                this.name = '';
                this.email = '';
                this.message = '';
                this.submitMessage = 'Message sent successfully';
            } catch (error) {
                console.error('Error submitting form:', error);
                this.submitMessage = 'Error submitting form. Please try again.';
            }
        },
        // sendEmail() {
        //   emailjs.send('service_doxaq1h', 'template_1o8h4xa', {
        //     name: this.name,
        //     email: this.email,
        //     message: this.message,
        //   }, 'YOUR_EMAILJS_USER_ID')
        //   .then((result) => {
        //     console.log('Email sent:', result.text);
        //   }, (error) => {
        //     console.log('Email error:', error.text);
        //   });
        // }
    },
    mounted() {
        // Load the reCAPTCHA script dynamically
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?render=6LdGoW8pAAAAAK_oMIExegB957yAhvHfVYIJUoOk';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    },
};
</script>

<style scoped>

    /* containers================================================================================ */

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

    /* content=================================================================================== */

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

    /* media queries============================================================================= */

    @media only screen and (max-width: 611px) {
        .main-container {
            padding: 9rem 3rem;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100%;
        }
        .container-one div {
            max-width: 60vw;
            padding-top: 100px;
            height: 100%;

        }
        .container-two {
            width: 70vw;
            height: 100%;
            padding-top: 50px;
        }
        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group textarea {
            width: 100%;

        }
    }
</style>