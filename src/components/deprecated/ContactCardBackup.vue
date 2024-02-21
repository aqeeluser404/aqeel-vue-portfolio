<!-- <template>
    <!-- main container -->
    <div class="main-container" :style="getAdjustedWidth">

        <!-- top container -->
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

        <!-- bottom container -->
        <div class="container-two">
            
            <!-- form container -->
            <div class="contact-form">

                <form @submit.prevent="handleSubmit">

                    <div class="form-group">
                        <label for="name">NAME</label>
                        <input type="text" id="name" name="Name" required placeholder="Type Here" v-model="userMessage.name">
                        <span v-if="!isNameValid" class="error-message">Name is required</span>
                    </div>

                    <div class="form-group">
                        <label for="email">EMAIL</label>
                        <input type="email" id="email" name="Email" required placeholder="Type Here" v-model="userMessage.email">
                        <span v-if="!isEmailValid" class="error-message">Enter a valid email address</span>
                    </div>

                    <div class="form-group">
                        <label for="message">MESSAGE</label>
                        <textarea id="message" name="Message" required v-model="userMessage.message"></textarea>
                        <span v-if="!isMessageValid" class="error-message">Message is required</span>
                    </div>

                    <div class="form-group">
                        <div class="g-recaptcha"></div>
                        <input id="submit" type="submit" value="Say Hi!" class="button-hover-white">
                    </div>
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
import axios from 'axios';
import { mapState } from 'vuex';

export default {
    name: 'ContactCard',
    data() {
        return {
            userMessage: {
                name: '',
                email: '',
                message: '',
                recaptchaToken: null,
            },
            isNameValid: true,
            isEmailValid: true,
            isMessageValid: true,
        };
    },
    computed: {
        ...mapState(['isNavbarVisible']),
        getAdjustedWidth() {
            return {
                width: this.isNavbarVisible ? 'calc(100% - 6.5rem)' : '100%',
                position: 'relative',
                left: this.isNavbarVisible ? '6.5rem' : '0',
            };
        },
    },
    methods: {
        handleSubmit() {
            this.validateForm();

            if (this.isFormValid()) {
                // Check reCAPTCHA response
                const recaptchaResponse = grecaptcha.execute('6LdGoW8pAAAAAK_oMIExegB957yAhvHfVYIJUoOk', { action: 'submit' });

                if (!recaptchaResponse) {
                    console.error('reCAPTCHA verification failed');
                    return;
                }
                axios.post(`https://aqeel-dev-portfolio-default-rtdb.firebaseio.com/messages.json`, this.userMessage).then(response => {
                    console.log(response)
                });

                this.userMessage.name = '';
                this.userMessage.email = '';
                this.userMessage.message = '';
            }  
            else {
                this.nameErrorMessage = this.isNameValid ? '' : 'Name is required';
                this.emailErrorMessage = this.isEmailValid ? '' : 'Enter a valid email address';
                this.messageErrorMessage = this.isMessageValid ? '' : 'Message is required';
            }
        },
        validateForm() {
            this.isNameValid = this.userMessage.name.trim() !== '';
            this.isEmailValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(this.userMessage.email);
            this.isMessageValid = this.userMessage.message.trim() !== '';
        },
        isFormValid() {
            return this.isNameValid && this.isEmailValid && this.isMessageValid;
        },
    },


    mounted() {
        // reCAPTCHA
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?render=6LdGoW8pAAAAAK_oMIExegB957yAhvHfVYIJUoOk';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    },
}
</script>

<style scoped>

    /* main container */

    .main-container {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5vw;
    }

    /* text container */

    .container-one div  {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: right;
        max-width: 60vw;
    }

    /* form container */
    
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

    /* media queries============================================================================= */

    @media only screen and (max-width: 611px) {

        /* containers */

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
</style> -->