// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAK0eq3abovkiXVrKLceLOaqao92doo2X4",
    authDomain: "simple-firebase-authenti-e5a36.firebaseapp.com",
    projectId: "simple-firebase-authenti-e5a36",
    storageBucket: "simple-firebase-authenti-e5a36.appspot.com",
    messagingSenderId: "152551331384",
    appId: "1:152551331384:web:6ff8243e4d2cfcccfdb8cd",
    measurementId: "G-WZF0TCQQ4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;