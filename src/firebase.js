// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByhv60PB61sYFXjd10Rz3_6aQgorfLb1I",
    authDomain: "golf-app-64dd1.firebaseapp.com",
    projectId: "golf-app-64dd1",
    storageBucket: "golf-app-64dd1.appspot.com",
    messagingSenderId: "215870621282",
    appId: "1:215870621282:web:3db56a293dc8246758b33b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;