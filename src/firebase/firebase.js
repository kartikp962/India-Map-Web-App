// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBmHT73EMkBX_uVWgukDdf8ZRUARz_sQvs",
  authDomain: "login-form-86a2e.firebaseapp.com",
  projectId: "login-form-86a2e",
  storageBucket: "login-form-86a2e.appspot.com",
  messagingSenderId: "252808692037",
  appId: "1:252808692037:web:5d25d4532c2fae1bb6fe2c",
  measurementId: "G-2TSNJQWRY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};