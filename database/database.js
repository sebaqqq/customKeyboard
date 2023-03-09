// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI6wMO_tKqBBPhV3OI9qODyvcOPs2so60",
  authDomain: "keyboardsystemcustom.firebaseapp.com",
  projectId: "keyboardsystemcustom",
  storageBucket: "keyboardsystemcustom.appspot.com",
  messagingSenderId: "698333965260",
  appId: "1:698333965260:web:5beb1dfd3d1b0dcc1d8b69",
  measurementId: "G-R1R4S8N2TJ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const database = getAnalytics(app);'['