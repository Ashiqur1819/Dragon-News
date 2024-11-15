// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMrN7ZoIxptzxyzBxaCicowwED2KYSvkg",
  authDomain: "dragon-news-609f3.firebaseapp.com",
  projectId: "dragon-news-609f3",
  storageBucket: "dragon-news-609f3.firebasestorage.app",
  messagingSenderId: "602139233065",
  appId: "1:602139233065:web:897b7dd5f667cfb51ec538",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);