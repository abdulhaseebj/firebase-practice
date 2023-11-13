import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC4qmvlyGOAEC4czCCeind9ti2u6ipPlPQ",
    authDomain: "social-app-5cbda.firebaseapp.com",
    projectId: "social-app-5cbda",
    storageBucket: "social-app-5cbda.appspot.com",
    messagingSenderId: "524725373933",
    appId: "1:524725373933:web:3a1e3a1978fa8a8bb775e4"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

