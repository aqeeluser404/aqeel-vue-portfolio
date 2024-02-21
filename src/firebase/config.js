// deprecated version of firebase - update to version 10 at a later date

// import firebase from 'firebase/app'
// import 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyBnjblsrSHYchneveWDLXFT6GLpcRVZ59o",
//     authDomain: "aqeel-dev-portfolio.firebaseapp.com",
//     projectId: "aqeel-dev-portfolio",
//     storageBucket: "aqeel-dev-portfolio.appspot.com",
//     messagingSenderId: "384356502628",
//     appId: "1:384356502628:web:e08f9739394e0933982371"
//   };

// firebase.initializeApp(firebaseConfig)

// const projectFirestore = firebase.firestore()

// export { projectFirestore }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnjblsrSHYchneveWDLXFT6GLpcRVZ59o",
  authDomain: "aqeel-dev-portfolio.firebaseapp.com",
  projectId: "aqeel-dev-portfolio",
  storageBucket: "aqeel-dev-portfolio.appspot.com",
  messagingSenderId: "384356502628",
  appId: "1:384356502628:web:9991192b197aa02d982371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

