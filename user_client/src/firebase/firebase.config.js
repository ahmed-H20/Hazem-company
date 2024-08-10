/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBlmYeocRLlD4aeYFeoedxNPUeVPnsnh4",
  authDomain: "hazem-com.firebaseapp.com",
  projectId: "hazem-com",
  storageBucket: "hazem-com.appspot.com",
  messagingSenderId: "216097566576",
  appId: "1:216097566576:web:f08b5e3837de954e2369b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;