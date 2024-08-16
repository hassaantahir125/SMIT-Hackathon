// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdXEURXoJkhOKaDVkr2MW-keT-wkUWovQ",
  authDomain: "smit-hackathon-2024.firebaseapp.com",
  projectId: "smit-hackathon-2024",
  storageBucket: "smit-hackathon-2024.appspot.com",
  messagingSenderId: "858588365241",
  appId: "1:858588365241:web:f36cd0cfbd9036bf117668",
  measurementId: "G-GMC1LEQMY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();


let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

window.signupUser = () => {
  let obj = {
    username : username.value,
    email : email.value,
    password : password.value,
  }
  console.log(obj);

  createUserWithEmailAndPassword(auth, obj.email, obj.password).then((res) => {
    
  })

  
 
  
}