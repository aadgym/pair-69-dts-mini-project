// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "pair69-dts-mini-project.firebaseapp.com",
    projectId: "pair69-dts-mini-project",
    storageBucket: "pair69-dts-mini-project.appspot.com",
    messagingSenderId: "329887091951",
    appId: "1:329887091951:web:4f8daed0ec7bb50ca51f1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);