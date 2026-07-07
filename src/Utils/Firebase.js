// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6vsjs-w9-X8wFIaUxw5b8FAJg2ghOVtg",
  authDomain: "netflix-gpt-59024.firebaseapp.com",
  projectId: "netflix-gpt-59024",
  storageBucket: "netflix-gpt-59024.firebasestorage.app",
  messagingSenderId: "705331309505",
  appId: "1:705331309505:web:63c7b4a079a15492a35d40",
  measurementId: "G-SCBHQELG4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
