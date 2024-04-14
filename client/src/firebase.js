// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-639d7.firebaseapp.com",
  projectId: "mern-blog-639d7",
  storageBucket: "mern-blog-639d7.appspot.com",
  messagingSenderId: "767166351520",
  appId: "1:767166351520:web:d55da22ddba6d0191121c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

 