// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBDvA9bcJlRt5xyEPAkwtfsiDDBCbNRJDg",
    authDomain: "interview-ai-d0c33.firebaseapp.com",
    projectId: "interview-ai-d0c33",
    storageBucket: "interview-ai-d0c33.appspot.com",
    messagingSenderId: "15128726938",
    appId: "1:15128726938:web:9238ebb11ffdd0bc663e23",
    measurementId: "G-5J859M75BS"
  };

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export {db}