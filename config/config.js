// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtZSLNqCDcPwzK6UavmEnl26U7fHLAt2I",
  authDomain: "movies-fec34.firebaseapp.com",
  projectId: "movies-fec34",
  storageBucket: "movies-fec34.firebasestorage.app",
  messagingSenderId: "759941695212",
  appId: "1:759941695212:web:2d10d6d6b227c5157207c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)