// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
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