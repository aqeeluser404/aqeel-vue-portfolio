// deprecated version of firebase - update to version 10 at a later date

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBOwOFP4AczsFXt6U-QgWg1aeEjlpUGVhU",
    authDomain: "portfolio-version-2-96bc6.firebaseapp.com",
    projectId: "portfolio-version-2-96bc6",
    storageBucket: "portfolio-version-2-96bc6.appspot.com",
    messagingSenderId: "849045256972",
    appId: "1:849045256972:web:08a57a19023eb61e532729"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }

