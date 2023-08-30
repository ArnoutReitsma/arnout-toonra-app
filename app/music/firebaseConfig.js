// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVq7zSENgdPSWHR9DIb-stHzPFwgGw5lA",
  authDomain: "arnout-toonra.firebaseapp.com",
  projectId: "arnout-toonra",
  storageBucket: "arnout-toonra.appspot.com",
  messagingSenderId: "171855369315",
  appId: "1:171855369315:web:7648a71c7bba34c1fa5456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);