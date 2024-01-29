// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-237f1.firebaseapp.com",
  projectId: "mern-blog-237f1",
  storageBucket: "mern-blog-237f1.appspot.com",
  messagingSenderId: "533393229041",
  appId: "1:533393229041:web:af6350b951da7a2d7f5550"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

