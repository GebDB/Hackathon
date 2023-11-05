// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyB98k8-7zTZQXGjglgeAXfTAEL4YE_w9xo",

  authDomain: "stepinbusinessfirebase.firebaseapp.com",

  projectId: "stepinbusinessfirebase",

  storageBucket: "stepinbusinessfirebase.appspot.com",

  messagingSenderId: "798049323096",

  appId: "1:798049323096:web:b440db212bc30e1b82622d",

  measurementId: "G-WEHBS2F8W3"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);