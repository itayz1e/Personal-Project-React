// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDRjLiS6UPf1mErQpA6rc-Ng6KjKhCbdKU",

  authDomain: "portfolio-itayz1e.firebaseapp.com",

  projectId: "portfolio-itayz1e",

  storageBucket: "portfolio-itayz1e.appspot.com",

  messagingSenderId: "1021765848656",

  appId: "1:1021765848656:web:b95f0ce894f58d53778b55",

  measurementId: "G-T1LF0WTSL9"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export const db = getFirestore(app);
