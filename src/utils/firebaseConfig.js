// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWWBDUCI72mcdg6os1AboCPQzrUMlzXig",
    authDomain: "movie-gpt-658a3.firebaseapp.com",
    projectId: "movie-gpt-658a3",
    storageBucket: "movie-gpt-658a3.firebasestorage.app",
    messagingSenderId: "1084302671957",
    appId: "1:1084302671957:web:6da72b00d15570977e14dc",
    measurementId: "G-DBG0686E26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);