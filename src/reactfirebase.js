// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAifcFiUSO3k-NS6Io4y2ealc6NQrWeeSk",
  authDomain: "reactjs-6f15f.firebaseapp.com",
  projectId: "reactjs-6f15f",
  storageBucket: "reactjs-6f15f.appspot.com",
  messagingSenderId: "527008173725",
  appId: "1:527008173725:web:4a0034d9edbb9bfdbcce74",
  measurementId: "G-GQQVBVFEPT"
};
// Initialize Firebase
let auth;
const app = initializeApp(firebaseConfig);
 auth = initializeAuth(app);
 export default auth;
 